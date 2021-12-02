import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { CustomThemeProvider } from './Theme'

export const AppProvider: React.FC = ({ children }) => {
     return <CustomThemeProvider>{children}</CustomThemeProvider>
}
