# react-native-material-dialog
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://github.com/hectahertz/react-native-material-dialog)
[![npm](https://img.shields.io/npm/dt/express.svg)](https://github.com/hectahertz/react-native-material-dialog)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://npmjs.org/package/react-native-material-dialog)
[![npm](https://img.shields.io/npm/l/react-native-smart-badge.svg)](https://github.com/hectahertz/react-native-material-dialog/blob/master/LICENSE)

Material design compliant dialog for React Native

![](https://raw.githubusercontent.com/hectahertz/react-native-material-dialog/master/screenshots/3.png)
![](https://raw.githubusercontent.com/hectahertz/react-native-material-dialog/master/screenshots/7.png)

Javascript-only, uses react-native's Modal component.

Follows the [Material Design dialog specification](https://material.io/guidelines/components/dialogs.html).

## Installation

#### Step 1

Install react-native-vector-icons (if you do not already have it)

`npm i react-native-vector-icons --save && react-native link react-native-vector-icons`

*If you have any issues with icons not working or installation of React Native Vector Icons, check out their installation guide [here](https://github.com/oblador/react-native-vector-icons#installation)*

#### Step 2

Install react-native-material-dialog

`npm install react-native-material-dialog --save`

## Included
- [x] [MaterialDialog](https://github.com/hectahertz/react-native-material-dialog#MaterialDialog)
- [x] [MultiPickerMaterialDialog](https://github.com/hectahertz/react-native-material-dialog#MultiPickerMaterialDialog)

## Roadmap
- [ ] Simple dialog component that accepts a string as content and styles it.

## More examples
See [example/App.js](example/App.js)


## MaterialDialog

Basic and customizable dialog that can hold any component.

![](https://raw.githubusercontent.com/hectahertz/react-native-material-dialog/master/screenshots/dialog.gif)

```jsx
import { MaterialDialog } from 'react-native-material-dialog';

<MaterialDialog
  title={"Use Google's Location Service?"}
  visible={this.state.visible}
  onOk={() => {
  ToastAndroid.show("Pressed OK", ToastAndroid.SHORT);
  this.setState({visible: false})
}}
  onCancel={() => {
  ToastAndroid.show("Pressed CANCEL", ToastAndroid.SHORT);
  this.setState({visible: false})
}}>
  <Text style={styles.dialogText}>
    Let Google help apps determine location. This means sending anonymous location
    data to Google, even when no apps are running.
  </Text>
</MaterialDialog>
```

## Props
 Name | Description | Default/Required | Type
------|-------------|----------|-----------
visible | shows or hides the dialog | required | bool
children | element to be rendered in the content of the dialog | required | element
onCancel | callback when the dialog is closed or the cancel action is pressed | required | func
onOk | callback when the ok action is pressed | undefined | func
cancelLabel | label for the cancel action | 'CANCEL' | string
okLabel | label for the ok action | 'OK' | string
title | text for the dialog title | undefined | string
titleColor | color of the dialog title | 'rgba(0, 0, 0, 0.87)' | string
colorAccent | color of the action text | '#51BC78' | string
scrolled | whether the form is in scrolled mode | false | bool

## MultiPickerMaterialDialog

Ready to use dialog that allows to choose several options from a list.

![](https://raw.githubusercontent.com/hectahertz/react-native-material-dialog/master/screenshots/multipicker.gif)

```jsx
import { MultiPickerMaterialDialog } from 'react-native-material-dialog';

<MultiPickerMaterialDialog
  title={"Pick some elements!"}
  colorAccent={this.props.colorAccent}
  items={LIST.map((row, index) => {
    return {value: index, label: row}
  })}
  visible={this.state.multiPickerVisible}
  selectedItems={this.state.multiPickerSelectedItems}
  onCancel={() => this.setState({multiPickerVisible: false})}
  onOk={(result) => {
    this.setState({multiPickerVisible: false});
    this.setState({multiPickerSelectedItems: result.selectedItems});
  }}/>
```

## Props
 Name | Description | Default/Required | Type
------|-------------|----------|-----------
visible | shows or hides the dialog | required | bool
items | list of options to choose from | required | array of objects with a 'label' and 'value' property
selectedItems | items that will be selected when opening the dialog | required | array of objects with a 'label' and 'value' property
onCancel | callback when the dialog is closed or the cancel action is pressed | required | func
onOk | callback when the ok action is pressed | undefined | func
cancelLabel | label for the cancel action | 'CANCEL' | string
okLabel | label for the ok action | 'OK' | string
title | text for the dialog title | undefined | string
titleColor | color of the dialog title | 'rgba(0, 0, 0, 0.87)' | string
colorAccent | color of the action text | '#51BC78' | string

## License
- [MIT](LICENSE)

[![NPM](https://nodei.co/npm/react-native-material-dialog.png)](https://npmjs.org/package/react-native-material-dialog)
