

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { OpenRoutes } from './OpenRoutes.routes';


export function Routes(){
 return (
    <NavigationContainer>
        <OpenRoutes/>
    </NavigationContainer>
  )
}