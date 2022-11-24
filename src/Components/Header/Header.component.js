import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { connect } from 'react-redux';
import { Logout } from '../../Redux/actions/user.action';
import styles from './Header.styles';
import commonStyles from '../../Commons/common.styles';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-solid-svg-icons';

const ICON_COLOR = '#000000'

function Header(props) {
    const [ShowDropDown, setShowDropDown] = useState(false)

    const handleDropDownToggler = () => {
        setShowDropDown(!ShowDropDown)
    }

    const signOut = () => auth().signOut()

    return (
        <>
            <View style={[styles.HeaderContainer]}>
                <View style={[styles.DropDownTogglerContainer]}>
                    <TouchableOpacity onPress={handleDropDownToggler}>
                        <View style={[styles.IconContainer]}>
                            <FontAwesomeIcon icon={faBars} color={ICON_COLOR} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.HeaderTitleContainer]}>
                    <Text style={[commonStyles.commonHeadings, commonStyles.textCenter]}>FilmKu</Text>
                </View>
                <View style={[styles.DropDownTogglerContainer]}>
                    <TouchableOpacity onPress={handleDropDownToggler}>
                        {/* <View style={[styles.IconContainer]}> */}
                            <FontAwesomeIcon icon={faBell} color={'#000'} size={20} />
                        {/* </View> */}
                    </TouchableOpacity>
                </View>
            </View>
            {
                ShowDropDown ?
                    <View style={[styles.DropDownContainer]}>
                        <View style={[styles.DropdownItems, styles.DropDownItemSeprator]}>
                            <Text style={[commonStyles.text, styles.DropDownItemFontStyle, styles.UserDetailsFont]}>User: {props.User.email}</Text>
                        </View>
                        <View style={[styles.DropdownItems,]}>
                            <TouchableOpacity onPress={signOut}>
                                <Text style={[commonStyles.text, styles.DropDownItemFontStyle]}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <></>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        User: state.User
    };
};

const mapDispatchToProps = dispatch => {
    return {
        Logout: () => dispatch(Logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)