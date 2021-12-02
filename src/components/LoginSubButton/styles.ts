import styled, { css } from 'styled-components/native'

interface ContainerProps {
     buttonColor?: string;
}

interface TextProps {
    fontColor:string;

}

export const Container = styled.TouchableOpacity<ContainerProps>`
     background-color:${(props) => props.buttonColor};
     height:45px;
     justify-content:center;
     align-items:center;
     margin-bottom:10px

`

export const ButtonTitle = styled.Text <TextProps>`

    font-size:14px;
    font-weight:${({ theme }) => theme.typography.fontWeightBold};
    color:${props => props.fontColor};
    

`
