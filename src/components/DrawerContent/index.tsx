import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, Switch } from 'react-native'

import { useCustomTheme } from '../hooks/Theme';

import { Container } from './styles'

export function DrawerContent({ ...props }) {

     const {currentTheme, toggleTheme} = useCustomTheme();

     function handleTheme () {

     }

     return (
          <Container>
               <DrawerContentScrollView>
                    <View>
                         <Switch

                         value={!!currentTheme}
                         onValueChange={toggleTheme}

                         />
                         <Text>{currentTheme}</Text>
                    </View>
               </DrawerContentScrollView>
          </Container>
     )
}
