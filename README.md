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
  visible={this.state.basicOkCancelVisible}
  onOk={() => {
  ToastAndroid.show("Pressed OK", ToastAndroid.SHORT);
  this.setState({basicOkCancelVisible: false})
}}
  onCancel={() => {
  ToastAndroid.show("Pressed CANCEL", ToastAndroid.SHORT);
  this.setState({basicOkCancelVisible: false})
}}>
  <Text style={styles.dialogText}>
    Let Google help apps determine location. This means sending anonymous location
    data to Google, even when no apps are running.
  </Text>
</MaterialDialog>
```

## More examples
See [example/App.js](example/App.js)


## License
- [MIT](LICENSE)

[![NPM](https://nodei.co/npm/react-native-material-dialog.png)](https://npmjs.org/package/react-native-material-dialog)
