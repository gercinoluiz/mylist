import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

import {
     Container,
     CustomLoginInput,
     IconContainer,
     VisibilityButton,
} from './styles'
import { useTheme } from 'styled-components'

interface IInputProps extends TextInputProps {
     iconName: React.ComponentProps<typeof Feather>['name']
     type?: 'default' | 'password'
     value: string
}

export function MyCustomInput({ iconName, type, value, ...rest }: IInputProps) {
     const theme = useTheme()
     const [passwordVisible, setPasswordVisible] = useState(true)
     const [isFocused, setIsFocused] = useState(false)
     const [isFilled, setIsFilled] = useState(false)

     function handlePasswordVisibility() {
          setPasswordVisible(!passwordVisible)
     }


     function handleFocus () {
          setIsFocused(true)
          
          
     }


     function handleBlur () {
          
          setIsFocused(false)
          setIsFilled(!!value)

          
     }

     return (
          <Container isFocussed={isFocused}>
               <IconContainer>
                    <Feather
                         name={iconName}
                         size={24}
                         color={(isFocused || isFilled) ? theme.primary.main: theme.iconGraphy.onSurface}
                    />
               </IconContainer>
               <CustomLoginInput
                    secureTextEntry={passwordVisible && type === 'password'}
                    placeholder={rest.placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
                    
                    
               />

               {type && (
                    <VisibilityButton onPress={handlePasswordVisibility}>
                         <Feather
                              name={passwordVisible ? 'eye' : 'eye-off'}
                              color={ theme.primary.main}
                              size={24}
                         />
                    </VisibilityButton>
               )}
          </Container>
     )
}
