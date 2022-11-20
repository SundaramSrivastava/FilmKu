import React from 'react'
import { Pressable, Text, View } from 'react-native'
import commonStyles from '../../Commons/common.styles'
import styles from './Button.styles'

function Button({ label = 'Button', action = () => { } }) {
  return (
    <Pressable onPress={action} style={({ pressed }) => [{
      backgroundColor: pressed ? '#E3423490' : '#E34234',
      elevation: pressed ? 0 : 20
    },
    styles.Button]}>
      <Text style={[commonStyles.text, commonStyles.textCenter, styles.ButtonText]}>{label}</Text>
    </Pressable>
  )
}

export default Button