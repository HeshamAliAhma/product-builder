import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    ButtonClass:string,
    width?: "w-full" | "w-fit",
    textColor:string
}

const Button = ({children,ButtonClass, textColor='text-white', width = 'w-full',...rest}:IProps) => {
  return <button className={`${textColor} rounded-md font-bold opacity-85 hover:opacity-100 ${width} p-2 ${ButtonClass}`} {...rest}>{children}</button>

}

export default Button;
