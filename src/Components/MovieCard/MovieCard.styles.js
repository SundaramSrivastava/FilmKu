import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    CardContainer: { 
        marginTop: 20,
    },
    HCardContainer: { 
        marginTop: 20,
        maxWidth: 212,
        flexWrap: 'wrap'
    },
    Poster: { 
        height: 120, 
        width: 80, 
        borderRadius: 10, 
        marginRight: 10 
    },
    DetailsContainer: { 
        marginTop: 15 
    },
    Title: { 
        fontSize: 18 
    },
    RatingContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 10 
    },
    Rating: { 
        fontSize: 12, 
        marginLeft: 10 
    },
    // HPoster: {
    //     marginRight: 16 
    // }
})

export default styles