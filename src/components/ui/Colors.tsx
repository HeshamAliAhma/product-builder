import { HTMLAttributes } from "react"

interface IProps extends HTMLAttributes<HTMLSpanElement> {
colors:string
}

const Colors = ({colors,...rest}:IProps) => {
  return (
    <span className="block w-5 h-5 rounded-full bg-red-600 cursor-pointer" style={{backgroundColor:colors}} {...rest}></span>
)
}

export default Colors