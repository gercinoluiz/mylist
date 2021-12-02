import React, { useState } from 'react'
import { KeyboardAvoidingView, Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'
import { LoginSubButton } from '../../components/LoginSubButton'
import { MyCustomInput } from '../../components/MyCustomInput'

import {
     Container,
     Title,
     TitleContainer,
     Description,
     InputsContainer,
     ButtonsContainer,
} from './styles'

export function Login() {
     const theme = useTheme()

     const [email, setEmail] = useState('')
     const [passWord, setPassWord] = useState('')

     function handleCloseKeyBoard() {
          Keyboard.dismiss()
     }

     // const handleTest = (text: any) => {
     //      console.log(text)
     // }

     return (
          //  KeyboardAvoidingView serve para o teclado nao esconder os icones
          <KeyboardAvoidingView behavior='position' enabled>
               <TouchableWithoutFeedback onPress={handleCloseKeyBoard}>
                    <Container>

                         
                         <TitleContainer>
                              <Title>Estamos quase lá.</Title>
                              <Description>
                                   Faça login para começar a utilizar nosso app!
                              </Description>
                         </TitleContainer>

                         <InputsContainer>
                              <MyCustomInput
                                   iconName='mail'
                                   placeholder='E-mail'
                                   keyboardType='email-address'
                                   autoCapitalize='none'
                                   onChangeText={setEmail}
                                   value={email}
                              />
                              <MyCustomInput
                                   iconName='lock'
                                   type='password'
                                   placeholder='Senha'
                                   autoCapitalize='none'
                                   onChangeText={setPassWord}
                                   value={passWord}
                              />
                         </InputsContainer>

                         <ButtonsContainer>
                              <LoginSubButton
                                   fontColor={theme.typography.onPrimary}
                                   title='Login'
                                   buttonColor={theme.primary.main}
                              />
                              <LoginSubButton
                                   title='Criar conta gratuita'
                                   buttonColor={theme.surface}
                                   fontColor={theme.typography.onSurface}
                              />
                         </ButtonsContainer>
                    </Container>
               </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
     )
}
