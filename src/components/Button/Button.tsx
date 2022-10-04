import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button>Button</button>
    )
};

export default Button;