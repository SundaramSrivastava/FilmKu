import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    text: { 
        color: '#000', 
        letterSpacing: 1.5, 
        fontFamily: 'monospace' 
    },
    textCenter: {
        textAlign: 'center'
    },
    boldText: {
        fontWeight: '900'
    },
    LightText: {
        fontWeight: '100'
    },
    RegularText: {
        fontWeight: '300'
    }
})

export default commonStyles