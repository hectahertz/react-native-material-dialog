// Type definitions for react-native-material-dialog
// Project: https://github.com/hectahertz/react-native-material-dialog
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.2.2

import React from "react";

interface MaterialDialogStatic extends Dialog {
  /**
   * Content of the dialog
   */
  children?: JSX.Element;
}

interface PickerItem {
  /**
   * Text shown to the user for the item
   */
  label: string;

  /**
   * The value retured when the user selects this item
   */
  value: string;
}

interface SelectedItem {
  /**
   * The item selected at the time
   */
  selectedItem: PickerItem;
}

interface SelectedItems {
  /**
   * The items selected at the time
   */
  selectedItems: PickerItem[];
}

interface Dialog {
  /**
   * Title text for the dialog
   *
   * Default value is null
   */
  title?: string;

  /**
   * Color of the title text
   *
   * Default is 'rgba(0, 0, 0, 0.87)'
   */
  titleColor?: string;

  /**
   * Accent color used on the buttons and elements
   *
   * Default is '#51BC78'
   */
  colorAccent?: string;

  /**
   * Text for the confirm button
   *
   * Default value is 'OK'
   */
  okLabel?: string;

  /**
   * Text for the cancel button
   *
   * Default value is 'CANCEL'
   */
  cancelLabel?: string;

  /**
   * Determines if the dialog is showing or not
   */
  visible: boolean;

  /**
   * Determines if the form is in scrolled mode
   *
   * Default is false
   */
  scrolled?: boolean;
}

interface MaterialDialogStatic extends Dialog {
  /**
   * Content of the dialog
   */
  children?: JSX.Element;

  /**
   * Callback function fired when the confirm(ok) button is pressed
   * @param selected
   */
  onOk?(): void;

  /**
   * Callback function fired when the cancel button is pressed
   * @param selected
   */
  onCancel?(): void;
}

interface PickerItem {
  /**
   * Text shown to the user for the item
   */
  label: string;

  /**
   * The value retured when the user selects this item
   */
  value: string;
}

interface SinglePickerMaterialDialogStatic extends Dialog {
  /**
   * List of items shown to the user to select from
   */
  items: PickerItem[];

  /**
   * Currently selected item chosen from the items array
   */
  selectedItem: PickerItem;

  /**
   * Callback function fired when the confirm(ok) button is pressed
   * @param selected
   */
  onOk?(selected: SelectedItem): void;

  /**
   * Callback function fired when the cancel button is pressed
   * @param selected
   */
  onCancel?(): void;
}

interface MultiPickerMaterialDialogStatic extends Dialog {
  /**
   * List of items shown to the user to select from
   */
  items: PickerItem[];

  /**
   * Currently selected items chosen from the items array
   */
  selectedItems: PickerItem[];

  /**
   * Callback function fired when the confirm(ok) button is pressed
   * @param selected
   */
  onOk?(selected: SelectedItems): void;

  /**
   * Callback function fired when the cancel button is pressed
   * @param selected
   */
  onCancel?(): void;
}

export class MaterialDialog extends React.Component<MaterialDialogStatic> {}
export class SinglePickerMaterialDialog extends React.Component<
  SinglePickerMaterialDialogStatic
> {}
export class MultiPickerMaterialDialog extends React.Component<
  MultiPickerMaterialDialogStatic
> {}
