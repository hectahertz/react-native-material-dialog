import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { material } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialDialog from './MaterialDialog';

import colors from './colors';

export default class SinglePickerMaterialDialog extends Component {
  constructor(props) {
    super(props);

    const { items, selectedItem } = props;

    let selectedIndex;
    if (selectedItem != null) {
      selectedIndex = items.findIndex(
        item => item.value === selectedItem.value,
      );
    }
    this.state = { selectedIndex };
  }

  onPressItem(value) {
    const { items } = this.props;
    this.setState(() => {
      const selectedIndex = items.findIndex(item => item.value === value);
      return { selectedIndex };
    });
  }

  keyExtractor = item => String(item.value);

  renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.onPressItem(item.value)}>
      <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name={
              index === this.state.selectedIndex
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
            color={this.props.colorAccent}
            size={24}
          />
        </View>
        <Text style={material.subheading}>{item.label}</Text>
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
            selectedItem: this.props.items[this.state.selectedIndex],
          })
        }
        cancelLabel={this.props.cancelLabel}
        onCancel={() => {
          this.props.onCancel();
        }}
      >
        <FlatList
          data={this.props.items}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </MaterialDialog>
    );
  }
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

SinglePickerMaterialDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItem: PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  }),
  title: PropTypes.string,
  titleColor: PropTypes.string,
  colorAccent: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  cancelLabel: PropTypes.string,
  okLabel: PropTypes.string,
  scrolled: PropTypes.bool,
};

SinglePickerMaterialDialog.defaultProps = {
  selectedItem: undefined,
  title: undefined,
  titleColor: undefined,
  colorAccent: colors.androidColorAccent,
  cancelLabel: undefined,
  okLabel: undefined,
  scrolled: false,
};
