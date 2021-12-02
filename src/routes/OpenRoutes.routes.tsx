import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { DrawerContent } from '../components/DrawerContent'
import { Lists } from '../screens/Lists'
import { Login } from '../screens/Login'

const Drawer = createDrawerNavigator()
const StackNavigator = createStackNavigator()

function drawerNavigator() {
     return (
          <Drawer.Navigator
               drawerContent={(props) => <DrawerContent {...props} />}
          >
               <Drawer.Screen name='Feed' component={Login} />
          </Drawer.Navigator>
     )
}

export function OpenRoutes() {
     return (
          <StackNavigator.Navigator
               initialRouteName='Drawer'
               screenOptions={{ headerShown: false }}
          >
               <StackNavigator.Screen
                    name='Drawer'
                    component={drawerNavigator}
               />
          </StackNavigator.Navigator>
     )
}
