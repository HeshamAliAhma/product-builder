import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    ButtonClass:string,
    width?: "w-full" | "w-fit",
}

const Button = ({children,ButtonClass, width = 'w-full',...rest}:IProps) => {
  return <button className={`text-white rounded-md font-bold ${width} p-2 ${ButtonClass}`} {...rest}>{children}</button>

}

export default Button;
