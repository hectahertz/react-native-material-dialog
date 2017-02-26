import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableNativeFeedback,
  ToastAndroid,
  ScrollView
} from 'react-native';
import {MaterialDialog, MultiPickerMaterialDialog} from 'react-native-material-dialog';

export default class MaterialDialogExample extends Component {

  state = {
    basicNoActionsVisible: false,
    basicNoTitleVisible: false,
    basicOkCancelVisible: false,
    basicCustomLabelsVisible: false,
    basicCustomColorsVisible: false,
    basicScrolledListVisible: false,
    multiPickerVisible: false,
    multiPickerSelectedItems: [],
  }

  //TODO Add examples with more complex views
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#303f9f'/>
        <View style={styles.navigationBar}>
          <Text style={styles.navigationBarNameText}>
            react-native-material-dialog examples
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.titleText}>
              MaterialDialog
            </Text>
            <TouchableNativeFeedback
              onPress={() => this.setState({basicNoActionsVisible: true})}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  TITLE & NO ACTIONS
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.setState({basicNoTitleVisible: true})}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  NO TITLE & OK/CANCEL
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.setState({basicOkCancelVisible: true})}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  TITLE & OK/CANCEL
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.setState({basicCustomLabelsVisible: true})}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  NO TITLE & CUSTOM LABELS
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.setState({basicCustomColorsVisible: true})}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  CUSTOM COLORS
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.setState({basicScrolledListVisible: true})}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  SCROLLED WITH A CUSTOM LIST
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.titleText}>
              MultiPickerMaterialDialog
            </Text>
            <TouchableNativeFeedback
              onPress={() => this.setState({multiPickerVisible: true})}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  MULTI PICKER
                </Text>
              </View>
            </TouchableNativeFeedback>
            <Text numberOfLines={1} style={styles.viewText}>
              {this.state.multiPickerSelectedItems.length == 0
                ? "No items selected."
                : "Selected: " + this
                  .state
                  .multiPickerSelectedItems
                  .map((item) => item.label)
                  .join(", ")}
            </Text>
          </View>
        </View>

        <MaterialDialog
          title={"Information"}
          visible={this.state.basicNoActionsVisible}
          onCancel={() => {
          ToastAndroid.show("Pressed CANCEL", ToastAndroid.SHORT);
          this.setState({basicNoActionsVisible: false})
        }}>
          <Text style={styles.dialogText}>
            You logged out of the application.
          </Text>
        </MaterialDialog>

        <MaterialDialog
          visible={this.state.basicNoTitleVisible}
          onOk={() => {
          ToastAndroid.show("Pressed OK", ToastAndroid.SHORT);
          this.setState({basicNoTitleVisible: false})
        }}
          onCancel={() => {
          ToastAndroid.show("Pressed CANCEL", ToastAndroid.SHORT);
          this.setState({basicNoTitleVisible: false})
        }}>
          <Text style={styles.dialogText}>
            Set alarm?
          </Text>
        </MaterialDialog>

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

        <MaterialDialog
          visible={this.state.basicCustomLabelsVisible}
          okLabel="KEEP"
          onOk={() => {
          ToastAndroid.show("Pressed KEEP", ToastAndroid.SHORT);
          this.setState({basicCustomLabelsVisible: false})
        }}
          cancelLabel="DISCARD"
          onCancel={() => {
          ToastAndroid.show("Pressed DISCARD", ToastAndroid.SHORT);
          this.setState({basicCustomLabelsVisible: false})
        }}>
          <Text style={styles.dialogText}>
            Discard draft?
          </Text>
        </MaterialDialog>

        <MaterialDialog
          visible={this.state.basicCustomColorsVisible}
          title={"Save the conversation?"}
          titleColor='#FF4081'
          colorAccent='#FF4081'
          okLabel="SAVE"
          onOk={() => {
          ToastAndroid.show("Pressed SAVE", ToastAndroid.SHORT);
          this.setState({basicCustomColorsVisible: false})
        }}
          cancelLabel="DISCARD"
          onCancel={() => {
          ToastAndroid.show("Pressed DISCARD", ToastAndroid.SHORT);
          this.setState({basicCustomColorsVisible: false})
        }}>
          <Text style={styles.dialogText}>
            Store the conversation log in Google Drive.
          </Text>
        </MaterialDialog>
        <MaterialDialog
          visible={this.state.basicScrolledListVisible}
          title={"Scrollable list"}
          scrolled
          onOk={() => {
          ToastAndroid.show("Pressed OK", ToastAndroid.SHORT);
          this.setState({basicScrolledListVisible: false})
        }}
          onCancel={() => {
          ToastAndroid.show("Pressed CANCEL", ToastAndroid.SHORT);
          this.setState({basicScrolledListVisible: false})
        }}>
          <ScrollView contentContainerStyle={{
            paddingTop: 8
          }}>
            {LIST.map((row, index) => {
              return (
                <TouchableNativeFeedback key={index}>
                  <View style={styles.row}>
                    <Text style={styles.dialogText}>{row}</Text>
                  </View>
                </TouchableNativeFeedback>
              );
            })}
          </ScrollView>
        </MaterialDialog>

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
      </View>
    );
  }
}

const LIST = [
  "List element 1",
  "List element 2",
  "List element 3",
  "List element 4",
  "List element 5",
  "List element 6",
  "List element 7",
  "List element 8",
  "List element 9",
  "List element 10",
  "List element 12",
  "List element 13",
  "List element 14",
  "List element 15",
  "List element 16",
  "List element 17",
  "List element 18",
  "List element 19"
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  contentContainer: {
    flex: 1,
    marginTop: 56,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 16
  },
  sectionContainer: {
    paddingVertical: 16
  },
  navigationBar: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#3F51B5",
    elevation: 4
  },
  navigationBarNameText: {
    fontFamily: 'sans-serif-regular',
    color: "white",
    fontSize: 20
  },
  titleText: {
    fontFamily: 'sans-serif-regular',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 20
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 88,
    height: 36,
    borderRadius: 2,
    backgroundColor: '#E8EAF6',
    elevation: 2,
    paddingHorizontal: 16,
    marginVertical: 8
  },
  buttonText: {
    fontFamily: 'sans-serif',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 14
  },
  dialogText: {
    fontFamily: 'sans-serif',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 17
  },
  row: {
    height: 48,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  viewText: {
    fontFamily: 'sans-serif',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 14
  },
});

AppRegistry.registerComponent('MaterialDialog', () => MaterialDialog);
