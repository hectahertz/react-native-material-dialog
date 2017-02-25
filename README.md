# react-native-material-dialog
Material design compliant dialog for React Native

![](https://raw.githubusercontent.com/hectahertz/react-native-material-dialog/master/screenshots/3.png)
![](https://raw.githubusercontent.com/hectahertz/react-native-material-dialog/master/screenshots/6.png)

Javascript-only, uses react-native's Modal component. Follows the [Material Design dialog specification](https://material.io/guidelines/components/dialogs.html), and accepts any View as the content.

## Installation

`npm install react-native-material-dialog --save`

## How to use
```jsx
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

## More examples
See [example/App.js](example/App.js)

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

## License
- [MIT](LICENSE)

[![NPM](https://nodei.co/npm/react-native-material-dialog.png)](https://npmjs.org/package/react-native-material-dialog)
