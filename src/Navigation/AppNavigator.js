import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import TabNavigator from './AuthenticatedNavigation';
import { connect } from 'react-redux';
import LoginNavigator from './LoginNavigator';
import { Logout, SetUser } from '../Redux/actions/user.action';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Description from '../Screens/Description/Description.screen';
import { DESCRIPTION_SCREEN } from '../Screens/screenName';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

const screenDefaultOptions = {
  headerShown: false,
}


function AppNavigator(props) {

    function onAuthStateChanged(user) {
        let email = user ? user.email : null
        if (email) {
            props.LoginUser(email)
        } else {
            props.Logout()
        }
        
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)

        return subscriber
    }, [])


    return (
        <>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content' />
            <NavigationContainer>
                {
                    props.User.loggedIn ?
                    <Stack.Navigator screenOptions={screenDefaultOptions}>
                        <Stack.Screen name="BottomTabNavigator" component={TabNavigator} />
                        <Stack.Screen name={DESCRIPTION_SCREEN} component={Description} />
                    </Stack.Navigator>
                        :
                        <LoginNavigator />
                }
            </NavigationContainer>
        </>
    );
}

const mapStateToProps = state => {
    return {
        User: state.User
    };
};

const mapDispatchToProps = dispatch => {
    return {
        LoginUser: email => dispatch(SetUser(email)),
        Logout: () => dispatch(Logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)