import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import MobileNumber from "./src/MobileNumber"
import DrawerContent from './src/Drawer/DrawerContent';
import Homes from "./src/Drawer/Homes";
import Home from "./src/BottamTab/Home";
import Videos from "./src/BottamTab/Videos";
import Profile from "./src/BottamTab/Profile";
import Orders from "./src/BottamTab/Orders";
import VerifyCode from "./src/VerifyCode"

const stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab =createBottomTabNavigator();

function Mystack(){
    return(
        <stack.Navigator>
            <stack.Screen
            name='MobileNumber'
            component={MobileNumber}
            options={{headerShown:false}}
            />
            <stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{headerShown:false}}
            />
            <stack.Screen
            name="Tab"
            component={MyTab}
            options={{headerShown:false}}/>
            <stack.Screen
            name="BottomTab"
            component={MyBottom}
            options={{headerShown:false}}
            />
            <stack.Screen
            name="VerifyCode"
            component={VerifyCode}
            options={{headerShown:false}}
            />
        </stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator
        drawerContent={(props)=><DrawerContent{...props}/>}>
        <Drawer.Screen
        name="Home"
        component={Homes}
        />
        <Drawer.Screen
        name="BottomTab"
        component={MyBottom}/>
    </Drawer.Navigator>
    )
}

function MyTab(){
    return(
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: {fontSize :14},
        tabBarItemStyle:{width:100},
        tabBarStyle:{backgroundColor:'#fff'}
    }}>
        <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({focused})=>
            focused ? <Icon name="shopping-cart" size={24} color="blue"/> : <Icon name="shopping-cart" size={24} color="gray"/>
        }}/>
        <Tab.Screen
        name="Order"
        component={Order}
        options={{
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=> 
            focused ? <Icon name="shopping-bag" size={24} color="blue"/> : <Icon name="shopping-bag" size={24} color="gray"/>
        }}/>
        <Tab.Screen
        name="Category"
        component={Category}
        options={{
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=>
            focused ? <Icon name="category" size={24} color="blue"/> : <Icon name="category" size={24} color="gray"/>
        }}/>
        <Tab.Screen
        name="Search"
        component={Search}
        options={{
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({focused})=>
            focused ? <Icon name="search" size={24} color="blue"/> : <Icon name="search" size={24} color="gray"/>
        }}/>
    </Tab.Navigator>
    )
}

function MyBottom(){
    return(
        <BottomTab.Navigator
        screenOptions={{
            tabBarLabelStyle:{fontSize:14},
            tabBarItemStyle:{width:100},
            tabBarStyle:{backgroundColor:"#fff"}
        }}>
            <BottomTab.Screen
            name="Drawer"
            component={MyDrawer}
            options={{
            headerShown:false,
            title:"Home",
            tabBarActiveTintColor:"green",
            tabBarInactiveTintColor:"gray",
            tabBarIcon: ({focused})=>
            focused ? <Icon name="home" size={24} color="green"/> : <Icon name="home" size={24} color="gray"/>
        }}/>
                <BottomTab.Screen
                name="Videos"
                component={Videos}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:"green",
                    tabBarInactiveTintColor:"gray",
                    tabBarIcon: ({focused})=>
                    focused? <Icon name="slideshow" size={24} color="green"/> : <Icon name="slideshow" size={24} color="gray"/>
                }}/>
                <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:"green",
                    tabBarInactiveTintColor:"gray",
                    tabBarIcon:({focused})=>
                    focused ? <Icon name="person" size={24} color="green"/> :  <Icon name="person" size={24} color="gray"/>
                }}/>
                <BottomTab.Screen
                name="Orders"
                component={Orders}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:"green",
                    tabBarInactiveTintColor:"gray",
                    tabBarIcon:({focused})=>
                    focused ? <Icon name="mail" size={24} color="green"/> :  <Icon name="mail" size={24} color="gray"/>
                }}/>
                </BottomTab.Navigator>
    )
}

export default function App(){
    return(
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>
    )
}