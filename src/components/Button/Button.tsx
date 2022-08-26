import React from 'react';
import './Button.css';

interface ButtonProps {
  children: string;
  block?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  [propertyName: string]: any;
}

export const Button = (props: ButtonProps) => {
  const { type, block, ...rest } = props;

  return (
    <button className={`btn ${block ? 'btn-block' : ''}`} type={type} {...rest}>
      Button
    </button>
  );
};
