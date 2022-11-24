import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    commonHeadings: {
        fontFamily: 'Merriweather-Bold',
        // fontWeight: '900',
        fontSize: 20,
        lineHeight: 20.11,
        letterSpacing: 2,
        color: '#110E47'
    },
    text: { 
        color: '#000', 
        letterSpacing: 1.5, 
        fontFamily: 'Mulish-Regular' 
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