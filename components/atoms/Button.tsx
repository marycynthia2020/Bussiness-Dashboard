import { ButtonProps } from '@/types'
import React from 'react'


const Button = ({text, variant}:ButtonProps) => {
  const variantStyles = {
    default: "text-white bg-black",
    secondary: "text-white bg-[#008494]"
  }
  return (
    <button className={`py-2  px-4 text-xl font-medium w-full rounded-md  ${variantStyles[variant]}`}>
        {text}
    </button>
  )
}

export default Button