import React from 'react'

import { ButtonTitle, Container } from './styles'

interface ButtonProps {
     title: string
     buttonColor?: string
     fontColor:string;

}

export function LoginSubButton({ buttonColor, title, fontColor }: ButtonProps) {
     return (
          <Container buttonColor={buttonColor}  >
               <ButtonTitle fontColor={fontColor}>{title}</ButtonTitle>
          </Container>
     )
}
