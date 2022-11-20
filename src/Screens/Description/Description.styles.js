import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 0,
        zIndex: 99999999999,
        left: 0,
        backgroundColor: '#00000030',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ScreenContainer: {
        position: 'relative',
        backgroundColor: '#fff'
    },
    Poster: {
        height: 300,
        width: '100%'
    },
    DescriptionContainer: {
        marginTop: -50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderColor: '#000',
        elevation: 20,
    },
    Title: {
        fontSize: 30
    },
    RatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    RatingText: { 
        fontSize: 15, 
        marginLeft: 10 
    },
    DescriptionBox: { 
        marginTop: 10 
    },
    DescriptionHeading: { 
        fontSize: 20, 
        marginVertical: 10 
    },
    DescriptionText: { 
        fontSize: 18,
        letterSpacing: 0.5
    }
})

export default styles