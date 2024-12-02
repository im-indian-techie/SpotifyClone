import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Favourites from './src/screens/Favourites';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Player from './src/screens/Player';
import PlayerProvider from './src/providers/PlayerProvider';


const Tab=createBottomTabNavigator();
const App = () => {
  return (
   <PlayerProvider>
    <NavigationContainer>
    <Tab.Navigator tabBar={(props)=>(<View><Player/><BottomTabBar {...props}/></View>)} screenOptions={{ headerShown: false,tabBarStyle:{backgroundColor:'black'} }}>
      <Tab.Screen name='Home' component={Home} options={{headerShown:false,tabBarLabel:'Home',tabBarIcon:({color,size})=>(
       <Ionicons name='home' size={size} color={color}/>
      )}}/>
      <Tab.Screen name='Search' component={Search} options={{headerShown:false,tabBarLabel:'Search',tabBarIcon:({color,size})=>(
       <Ionicons name='search' size={size} color={color}/>
      )}}/>
      <Tab.Screen name='Favourites' component={Favourites} options={{headerShown:false,tabBarLabel:'Favourites',tabBarIcon:({color,size})=>(
       <Ionicons name='heart' size={size} color={color}/>
      )}}/>
    </Tab.Navigator>
    </NavigationContainer>
    </PlayerProvider>
  )
}

export default App

const styles = StyleSheet.create({})