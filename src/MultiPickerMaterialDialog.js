import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, ListView, Platform } from 'react-native';
import { material } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialDialog from './MaterialDialog';

import colors from './colors';

export default class MultiPickerMaterialDialog extends Component {
  constructor(props) {
    super(props);

    const { items, selectedItems } = props;
    const rows = buildSelectedRows(items, selectedItems);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.value !== r2.value || r1.selected !== r2.selected,
    }).cloneWithRows(rows);

    this.state = {
      dataSource,
      rows,
    };
  }

  // Refreshing the dataSource when we refresh any prop (such as visible)
  componentWillReceiveProps(nextProps) {
    const { items, selectedItems } = nextProps;
    const rows = buildSelectedRows(items, selectedItems);
    const dataSource = this.state.dataSource.cloneWithRows(rows);
    this.setState({ dataSource, rows });
  }

  onRowPress(rowID) {
    const rows = [...this.state.rows];
    rows[rowID] = Object.assign({}, rows[rowID], {
      selected: !rows[rowID].selected,
    });
    const dataSource = this.state.dataSource.cloneWithRows(rows);
    this.setState({ dataSource, rows });
  }

  renderRow = (row, sectionID, rowID) => (
    <TouchableOpacity key={row.value} onPress={() => this.onRowPress(rowID)}>
      <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name={row.selected ? 'check-box' : 'check-box-outline-blank'}
            color={this.props.colorAccent}
            size={24}
          />
        </View>
        <Text style={material.subheading}>{row.label}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <MaterialDialog
        title={this.props.title}
        titleColor={this.props.titleColor}
        colorAccent={this.props.colorAccent}
        visible={this.props.visible}
        okLabel={this.props.okLabel}
        scrolled={this.props.scrolled}
        onOk={() =>
          this.props.onOk({
            selectedItems: this.state.rows.filter(row => row.selected),
          })}
        cancelLabel={this.props.cancelLabel}
        onCancel={this.props.onCancel}
      >
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
      </MaterialDialog>
    );
  }
}

function buildSelectedRows(items, selectedItems) {
  const rows = items.map(item =>
    Object.assign({}, item, {
      selected: selectedItems.some(i => i.value === item.value),
    }),
  );

  return rows;
}

const styles = StyleSheet.create({
  rowContainer: {
    height: 56,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
});

MultiPickerMaterialDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  titleColor: PropTypes.string,
  colorAccent: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  cancelLabel: PropTypes.string,
  okLabel: PropTypes.string,
  scrolled: PropTypes.bool,
};

MultiPickerMaterialDialog.defaultProps = {
  selectedItems: [],
  title: undefined,
  titleColor: undefined,
  colorAccent: colors.androidColorAccent,
  cancelLabel: undefined,
  okLabel: undefined,
  scrolled: false,
};
