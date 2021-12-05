import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { material } from "react-native-typography";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialDialog from "./MaterialDialog";

import colors from "./colors";
import filter from "lodash.filter";

export default class SinglePickerMaterialDialogWithSearch extends Component {
  constructor(props) {
    super(props);

    const { items, selectedItem } = props;

    this.state = {
      selectedIndex: null,
      query: "",
      data: items,
      selectedItem,
    };
  }

  componentDidMount() {
    const { items, selectedItem } = this.props;

    let selectedIndex;
    if (selectedItem != null) {
      selectedIndex = items.findIndex(
        (item) => item.value === selectedItem.value
      );
    }

    this.setState({ ...this.state, selectedIndex });
  }

  contains = (name, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const data = filter(this.props.items, (item) => {
      return this.contains(item.label.toLowerCase(), formattedQuery);
    });
    this.setState({ ...this.state, data, query: text });
  };

  onPressItem(item) {
    this.setState({
      ...this.state,
      selectedIndex: item.value,
      selectedItem: item,
    });
  }

  keyExtractor = (item) => String(item.value);

  renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.onPressItem(item)}>
      <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name={
              item.value === this.state.selectedIndex
                ? "radio-button-checked"
                : "radio-button-unchecked"
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
            selectedItem: this.state.selectedItem,
            query: "",
          })
        }
        cancelLabel={this.props.cancelLabel}
        onCancel={() => {
          this.props.onCancel();
        }}
      >
        <TextInput
          placeholder={this.props.placeholder || "Search:"}
          value={this.state.query}
          onChangeText={(text) => this.handleSearch(text)}
          style={[styles.searchInput, { borderColor: this.props.colorAccent }]}
        />
        <FlatList
          data={this.state.data}
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
    paddingVertical: 6,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 16,
  },
  searchInput: {
    backgroundColor: "#fff",
    marginBottom: 16,
    borderWidth: 2,
    borderRadius: 4,
    paddingStart: 8,
    paddingEnd: 6,
    paddingVertical: 8,
    fontSize: 14,
  }
});

SinglePickerMaterialDialogWithSearch.propTypes = {
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

SinglePickerMaterialDialogWithSearch.defaultProps = {
  selectedItem: undefined,
  title: undefined,
  titleColor: undefined,
  colorAccent: colors.androidColorAccent,
  cancelLabel: undefined,
  okLabel: undefined,
  scrolled: false,
};
