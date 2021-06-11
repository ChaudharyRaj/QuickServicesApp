/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsSreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExplorScreen from './ExploreScreen';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = () => (

    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff">
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExplorScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-aperture" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (

    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignContent: 'center',
            fontWeight: 'bold'
        }
    }}>

        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: 'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (

    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsSreen} options={{
            title: 'Details',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            headerTitleAlign: 'center'
        }} />
    </DetailsStack.Navigator>
);