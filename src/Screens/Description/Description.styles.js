import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 28,
        zIndex: 99999999999,
        left: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ScreenContainer: {
        position: 'relative',
        backgroundColor: '#fff'
    },
    Poster: {
        // height: 300,
        // width: '100%'
    },
    DescriptionContainer: {
        marginTop: -60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        padding: 24,
        borderColor: '#000',
        elevation: 20,
    },
    Title: {
        fontSize: 30
    },
    RatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
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