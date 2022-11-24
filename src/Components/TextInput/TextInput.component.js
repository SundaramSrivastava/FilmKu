import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import commonStyles from '../../Commons/common.styles'
import styles from './TextInput.styles'

const PLACEHOLDER_COLOR = '#00000050'

function Input({ label = null, placeholder = null, password = false, value = '', onChangeText = () => { } }) {
  const [focus, setFocus] = useState(false)

  const onFocus = () => setFocus(true)
  const onBlur = () => setFocus(false)

  return (
    <View>
      {
        label ?
          <Text style={[styles.Label]}>{label}</Text>
          :
          <></>
      }
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={PLACEHOLDER_COLOR} secureTextEntry={password} style={[
        commonStyles.text, commonStyles.RegularText, styles.InputText, { borderColor: focus ? 'blue' : '#00000050', marginTop: label ? 10 : 0 }
      ]} onFocus={onFocus} onBlur={onBlur} />
    </View>
  )
}

export default Input