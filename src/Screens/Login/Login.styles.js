import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loader: { 
        flex: 1, 
        position: 'absolute', 
        top: 0, 
        backgroundColor: '#00000060', 
        width: '100%', 
        height: 7000, 
        zIndex: 999999 
    },
    screenContainer: { 
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        flex: 1
    },
    AppTitleContainer: { 
        height: 220, 
        justifyContent: 'center' 
    },
    AppTitle: { 
        fontSize: 30, 
        marginTop: 100 ,
        fontFamily: 'Mulish-Bold',
        textAlign: 'center',
        color: '#000'
    }
})

export default styles