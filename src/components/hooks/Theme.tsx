import React, {
     createContext,
     ReactNode,
     useContext, useState
} from 'react'

interface IThemeProviderProps {
     children: ReactNode
}

interface ThemeData {
     toggleTheme: () => void
     currentTheme: string
}

const ThemeContext = createContext({} as ThemeData)

export const CustomThemeProvider = ({ children }: IThemeProviderProps) => {
     const [currentTheme, setWwitchTheme] = useState('light')

     const toggleTheme = () => {

          if (currentTheme ==='light'){
               setWwitchTheme('dark')
          }
          setWwitchTheme('dark')
          console.log({currentTheme})
     }

     return (
          <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
               {children}
          </ThemeContext.Provider>
     )
}

export function useCustomTheme() {
     const context = useContext(ThemeContext)

     return context
}
