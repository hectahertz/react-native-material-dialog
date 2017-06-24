import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  Platform,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native';
import colors from './colors';

const {height, width} = Dimensions.get('window');

// TODO: Don't rely on Dimensions for the actions footer layout
// TODO: Support custom actions
// TODO: Stacked full-width buttons

class ActionButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.actionContainer}
        underlayColor={colors.androidPressedUnderlay}
        onPress={this.props.onPress}>
        <Text
          style={[styles.actionText, { color: this.props.colorAccent }]}>
          {this.props.label}
        </Text>
      </TouchableHighlight>
    );
  }
}

export default class MaterialDialog extends Component {
  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent
        hardwareAccelerated
        visible={this.props.visible}
        onRequestClose={this.props.onCancel}>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.backgroundOverlay}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <View style={[styles.modalContainer, { backgroundColor: this.props.backgroundColor }]}>
                <TouchableWithoutFeedback>
                  <View>
                    {this.props.title != null
                      ? <View
                        style={this.props.scrolled
                          ? styles.titleContainerScrolled
                          : styles.titleContainer}>
                        <Text
                          style={[styles.titleText, { color: this.props.titleColor }]}>
                          {this.props.title}
                        </Text>
                      </View>
                      : null}
                    <View
                      style={this.props.scrolled
                        ? styles.contentContainerScrolled
                        : styles.contentContainer}>
                      {this.props.children}
                    </View>
                    {this.props.onOk != null && this.props.onCancel != null
                      ? <View
                        style={this.props.scrolled
                          ? styles.actionsContainerScrolled
                          : styles.actionsContainer}>
                        <ActionButton
                          colorAccent={this.props.colorAccent}
                          onPress={this.props.onCancel}
                          label={this.props.cancelLabel} />
                        <ActionButton
                          colorAccent={this.props.colorAccent}
                          onPress={this.props.onOk}
                          label={this.props.okLabel} />
                      </View>
                      : null}
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backgroundOverlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundOverlay,
  },
  modalContainer: {
    marginHorizontal: 16,
    marginVertical: 106,
    paddingTop: 24,
    minWidth: 280,
    borderRadius: 2,
    elevation: 24,
    overflow: 'hidden',
  },
  titleContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleContainerScrolled: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.androidBorderColor,
  },
  titleText: {
    fontSize: 20,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
      ios: {
        fontWeight: '600'
      }
    })
  },
  contentContainer: {
    flex: -1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  contentContainerScrolled: {
    flex: -1,
    maxHeight: height - 264, // (106px vertical margin * 2) + 52px
    paddingHorizontal: 24,
  },
  actionsContainer: {
    height: 52,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 8,
  },
  actionsContainerScrolled: {
    height: 52,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.androidBorderColor,
  },
  actionContainer: {
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: 64,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
      ios: {
        fontWeight: '600'
      }
    })
  },
});

MaterialDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
  cancelLabel: PropTypes.string,
  okLabel: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  colorAccent: PropTypes.string,
  scrolled: PropTypes.bool,
}

MaterialDialog.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'CANCEL',
  titleColor: colors.androidPrimaryTextColor,
  backgroundColor: colors.background,
  colorAccent: colors.androidColorAccent,
  scrolled: false,
};

ActionButton.propTypes = {
  colorAccent: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

