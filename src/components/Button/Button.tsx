import React, { useCallback } from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const handleClick = useCallback(() => {
    alert('toto');
  }, [])

  return <button onClick={handleClick}>Button</button>;
};

export default Button;