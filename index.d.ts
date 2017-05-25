// Type definitions for react-native-material-dialog
// Project: https://github.com/hectahertz/react-native-material-dialog
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.2.2

import React from 'react'

interface Dialog {
    /**
     * Title text for the dialog
     * 
     * Default value is null
     */
    title?: string

    /**
     * Color of the title text
     * 
     * Default is 'rgba(0, 0, 0, 0.87)'
     */
    titleColor?: string
    
    /**
     * Accent color used on the buttons and elements
     * 
     * Default is '#51BC78'
     */
    colorAccent?: string

    /**
     * Text for the confirm button
     * 
     * Default value is 'OK'
     */
    okLabel?: string

    /**
     * Text for the cancel button
     * 
     * Default value is 'CANCEL'
     */
    cancelLabel?: string

    /**
     * Determines if the dialog is showing or not
     */
    visible: boolean

    /**
     * Determines if the form is in scrolled mode
     * 
     * Default is false
     */
    scrolled?: boolean

    /**
     * Callback function fired when the confirm(ok) button is pressed
     */
    onOk?(selected: PickerItem): void

    /**
     * Callback function fired when the cancel button is pressed
     */
    onCancel?(selected: PickerItem): void
}

interface MaterialDialogStatic extends Dialog {
    /**
     * Content of the dialog
     */
    children?: JSX.Element
}


interface PickerItem {
    /**
     * Text shown to the user for the item
     */
    label: string

    /**
     * The value retured when the user selects this item
     */
    value: string
}

interface SinglePickerMaterialDialogStatic extends Dialog {
    /**
     * List of items shown to the user to select from
     */
    items: PickerItem[]

    /**
     * Currently selected item chosen from the items array
     */
    selectedItem: PickerItem
}

interface MultiPickerMaterialDialogStatic extends Dialog {
    /**
    * List of items shown to the user to select from
    */
    items: PickerItem[]

    /**
     * Currently selected items chosen from the items array
     */
    selectedItems: PickerItem[]
}

export class MaterialDialog extends React.Component<MaterialDialogStatic, null> {} 
export class SinglePickerMaterialDialog extends React.Component<SinglePickerMaterialDialogStatic, null> {}
export class MultiPickerMaterialDialog extends React.Component<MultiPickerMaterialDialogStatic, null> {}
