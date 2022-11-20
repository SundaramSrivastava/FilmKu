import { faBehanceSquare } from "@fortawesome/free-brands-svg-icons";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HeaderContainer: { 
        paddingVertical: 20, 
        paddingHorizontal: 10, 
        flexDirection: 'row' 
    },
    HeaderTitleContainer: { 
        width: '90%', 
        alignItems: 'center'
    },
    HeaderFont: {
        fontSize: 20
    },
    DropDownTogglerContainer: { 
        width: '10%', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    IconContainer: { 
        borderRadius: 1000, 
        borderWidth: 0.5, 
        padding: 5 
    },
    DropDownContainer: {
        minWidth: 180, 
        position: 'absolute', 
        zIndex: 999999, 
        backgroundColor: '#f4f4f4', 
        right: 5, 
        top: 60, 
        borderRadius: 10, 
        borderTopRightRadius: 0, 
        elevation: 20
    },
    DropdownItems: { 
        paddingVertical: 5, 
        paddingHorizontal: 10 
    },
    DropDownItemSeprator: { 
        borderBottomWidth: 0.5, 
        borderColor: '#00000030' 
    },
    DropDownItemFontStyle: { 
        fontSize: 12, 
        fontWeight: '900', 
        color: '#000000' 
    },
    UserDetailsFont: {
        fontWeight: '500', 
        color: '#00000080' 
    }
})

export default styles
