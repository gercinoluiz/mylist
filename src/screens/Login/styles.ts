import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
     justify-content: space-between;

     height: ${Dimensions.get('window').height - 50}px;
`

export const TitleContainer = styled.View`
     margin-top: 50px;
     max-width: ${Dimensions.get('window').width / 1.5}px;
`

export const Title = styled.Text`
     font-weight: ${({ theme }) => theme.typography.fontWeightBold};
     font-size: ${RFValue(35)}px;
     margin-bottom: 14px;
`

export const Description = styled.Text`
     font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
     font-size: ${RFValue(14)}px;
     
`

export const InputsContainer = styled.View``

export const ButtonsContainer = styled.View`
     margin-bottom: 100px;
`
