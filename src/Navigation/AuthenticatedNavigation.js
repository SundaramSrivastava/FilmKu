import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../Components/Header/Header.component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import Home from '../Screens/Home/Home.screen';
import Search from '../Screens/Search/Search.screen';
import { HOME_SCREEN, SEARCH_SCREEN } from '../Screens/screenName';

const Tab = createBottomTabNavigator();

const screenDefaultOptions = {
  headerShown: false,
}

export default function TabNavigator() {
    return (
    <Tab.Navigator screenOptions={screenDefaultOptions}>
        <Tab.Screen name={HOME_SCREEN} component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHouse} color={color} size={20} />
          ),
          tabBarLabelStyle: {fontSize : 12, marginBottom: 5}
        }} />
        <Tab.Screen name={SEARCH_SCREEN} component={Search} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faMagnifyingGlass} color={color} size={20} />
          ),
          tabBarLabelStyle: {fontSize : 12, marginBottom: 5}
        }} />
    </Tab.Navigator>
    )
}