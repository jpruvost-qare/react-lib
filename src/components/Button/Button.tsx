import React from "react";
import { Button as JeanJacque } from '@chakra-ui/react'

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
    return (
        <JeanJacque colorScheme='blue'>Button</JeanJacque>
    )
};

export default Button;