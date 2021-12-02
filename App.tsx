import React from 'react'
import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'
import { AppProvider } from './src/components/hooks'
import { useCustomTheme } from './src/components/hooks/Theme'
import { Routes } from './src/routes'
import { dark } from './src/styles/themeDark'
import { light } from './src/styles/themeLight'




export default function App() {
     const { currentTheme } = useCustomTheme()

     return (
          <AppProvider>
               <ThemeProvider theme={ currentTheme === 'light' ? light : dark}>
                    <Routes />
                    
               </ThemeProvider>
          </AppProvider>
     )
}
