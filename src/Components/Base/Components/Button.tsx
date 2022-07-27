import React from 'react'
import { TColor } from '../../../Types/TColor'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    color?: TColor
    darkColor?: boolean
}

const Button = ({ children, color="blue", darkColor=false, ...props }: Props) => {
    return (
        <button
            className={`
                px-4 py-2 rounded-md
                text-${darkColor ? "white" : "black"}
                bg-${color}-400 hover:bg-${color}-500
                dark:bg-${color}-600 dark:hover:bg-${color}-700
            `}
            {...props}
        >
            { children }
        </button>
    )
}

export default Button