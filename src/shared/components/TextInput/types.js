/* @flow */

export type DefaultProps = {
  autoCapitalize: string,
  autoFocus: boolean,
  defaultValue?: string,
  keyboardType: string,
  multiline: boolean,
  onBlur: ?Function,
  onChangeText: ?Function,
  onContentSizeChange: ?Function,
  onFocus: ?Function,
  onSubmitEditing: ?Function,
  placeholderTextColor?: string,
  returnKeyType: string,
  selectionColor?: string,
  secured: boolean,
  style: StyleSheet,
  value?: string,
}

export type Props = {
  autoCapitalize?: string,
  autoFocus?: boolean,
  defaultValue?: string,
  keyboardType?: string,
  multiline?: boolean,
  onBlur?: ?Function,
  onChangeText?: ?Function,
  onContentSizeChange?: ?Function,
  onFocus?: ?Function,
  onSubmitEditing?: ?Function,
  placeholder: string,
  placeholderTextColor?: string,
  returnKeyType?: string,
  selectionColor?: string,
  secured?: boolean,
  style?: StyleSheet,
  value?: string,
}
