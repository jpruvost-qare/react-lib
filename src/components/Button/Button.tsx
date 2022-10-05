import React from "react";
import { Button as JeanJacque } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <ChakraProvider>
      <JeanJacque colorScheme='blue'>Button</JeanJacque>
    </ChakraProvider>
  )
};

export default Button;