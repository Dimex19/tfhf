import React from 'react'

type ButtonProps = {
    text: string,
    style: string
}

const Button: React.FC<ButtonProps> = ({text, style}) => {
  return (
    <div className={`px-4 flex items-center justify-center ${style}`}>{text}</div>
  )
}

export default Button