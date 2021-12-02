import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Dimensions, TextInputProps } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'



interface ContainerProps {
     isFocussed:boolean
}

export const Container = styled.View <ContainerProps>`
     width: 100%;
     height: ${RFValue(50)}px;
     background: ${({ theme }) => theme.surface};
     margin-bottom: 8px;

     flex-direction: row;
     align-items: center;

     ${({isFocussed, theme})=> isFocussed && css`

          border-bottom-width:2px;
          border-bottom-color: ${theme.primary.main}

     ` }
`

export const IconContainer = styled.View`
     margin-left: 5px;
`

// You user textInput like this bellow, or else you wont get its props
export const CustomLoginInput = styled(TextInput)`
     background: ${({ theme }) => theme.surface};
     color: ${({ theme }) => theme.typography.onSurface};
     width: ${Dimensions.get('window').width - 80}px;
     margin-left: 10px;
     font-weight:${({ theme }) => theme.typography.fontWeightRegular};
     font-size:${RFValue(18)}px;
     
`

export const VisibilityButton = styled(RectButton)`
  
`;
