"use client"
import React, { ButtonHTMLAttributes } from 'react';

// Define the type for button props
interface CustomButtonProps {
    // Add your custom props here
    variant?: 'primary' | null;
    text?: string
  }
  
  // Define the type for button props by merging ButtonHTMLAttributes with CustomButtonProps
  type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps;

const Button : React.FC<ButtonProps> = ({ variant, text, ...props}) => {
    return (
        <div>
            <button {...props} className={`border-2 dark:border-white border-primary rounded-md p-2 font-medium m-1 ${variant === 'primary' && 'bg-primary dark:bg-white dark:text-primary text-white'} hover:scale-[0.95] transition ease-in-out duration-100`}>{text}</button>
        </div>
    )
}

export default Button;
