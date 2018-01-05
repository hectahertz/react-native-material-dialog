import React from 'react';
import PropTypes from 'prop-types';
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
import { material } from 'react-native-typography';

const { height } = Dimensions.get('window');

// TODO: Don't rely on Dimensions for the actions footer layout
// TODO: Support custom actions
// TODO: Stacked full-width buttons

const ActionButton = ({ testID, onPress, colorAccent, label }) => (
  <TouchableHighlight
    testID={testID}
    style={styles.actionContainer}
    underlayColor={colors.androidPressedUnderlay}
    onPress={onPress}
  >
    <Text style={[material.button, { color: colorAccent }]}>{label}</Text>
  </TouchableHighlight>
);

const MaterialDialog = ({
  visible,
  scrolled,
  title,
  titleColor,
  colorAccent,
  backgroundColor,
  addPadding,
  onOk,
  onCancel,
  okLabel,
  cancelLabel,
  children,
}) => (
  <Modal
    animationType={'fade'}
    transparent
    hardwareAccelerated
    visible={visible}
    onRequestClose={onCancel}
    supportedOrientations={['portrait', 'landscape']}
  >
    <TouchableWithoutFeedback onPress={onCancel}>
      <View style={styles.backgroundOverlay}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View
            style={[
              styles.modalContainer,
              (title != null || (addPadding && title == null)) && styles.modalContainerPadding,
              { backgroundColor },
            ]}
          >
            <TouchableWithoutFeedback>
              <View>
                {title != null ? (
                  <View style={scrolled ? styles.titleContainerScrolled : styles.titleContainer}>
                    <Text style={[material.title, { color: titleColor }]}>{title}</Text>
                  </View>
                ) : null}
                <View
                  style={
                    scrolled
                      ? [
                        styles.contentContainerScrolled,
                        addPadding && styles.contentContainerScrolledPadding,
                      ]
                      : [styles.contentContainer, addPadding && styles.contentContainerPadding]
                  }
                >
                  {children}
                </View>
                {onOk != null && onCancel != null ? (
                  <View
                    style={scrolled ? styles.actionsContainerScrolled : styles.actionsContainer}
                  >
                    <ActionButton
                      testID="dialog-cancel-button"
                      colorAccent={colorAccent}
                      onPress={onCancel}
                      label={cancelLabel}
                    />
                    <ActionButton
                      testID="dialog-ok-button"
                      colorAccent={colorAccent}
                      onPress={onOk}
                      label={okLabel}
                    />
                  </View>
                ) : null}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

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
    minWidth: 280,
    borderRadius: 2,
    elevation: 24,
    overflow: 'hidden',
  },
  modalContainerPadding: {
    paddingTop: 24,
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
  contentContainer: {
    flex: -1,
  },
  contentContainerPadding: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  contentContainerScrolled: {
    flex: -1,
    maxHeight: height - 264, // (106px vertical margin * 2) + 52px
  },
  contentContainerScrolledPadding: {
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
  backgroundColor: PropTypes.string,
  colorAccent: PropTypes.string,
  scrolled: PropTypes.bool,
  addPadding: PropTypes.bool,
};

MaterialDialog.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'CANCEL',
  title: undefined,
  titleColor: colors.androidPrimaryTextColor,
  backgroundColor: colors.background,
  colorAccent: colors.androidColorAccent,
  scrolled: false,
  addPadding: true,
  onOk: undefined,
  onCancel: undefined,
};

ActionButton.propTypes = {
  testID: PropTypes.string.isRequired,
  colorAccent: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default MaterialDialog;
