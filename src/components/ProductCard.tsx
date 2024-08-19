import Image from "./Image"
import Button from "./ui/Button"
import {trimText} from './utils/functions'
import { IProduct } from './data/Product'

interface IProps {
  product:IProduct,
}

const ProductCard = ({product}:IProps) => {
  const {title, description,price,imageUrl,category} = product
  return (
    <div className="p-2 bg-white rounded-md">
        <div className="max-w-md h-[20rem]">
          <Image ImageUrl={imageUrl} ImageName={"car"} ImageClass={"rounded-md h-full w-full"}/>
        </div>
        <h1 className="font-bold text-xl my-2">{trimText(title,30)}</h1>
        <p>{trimText(description,70)}</p>
        <div className="flex gap-2 my-3">
          <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer"></span>
          <span className="w-5 h-5 rounded-full bg-yellow-500 cursor-pointer"></span>
          <span className="w-5 h-5 rounded-full bg-blue-700 cursor-pointer"></span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl">${price}</span>
          <Image ImageUrl={category.imageUrl} ImageName={category.name} ImageClass={"rounded-full w-12 h-12 "}/>
        </div>
        <div className="flex items-center justify-between gap-3 mt-3">
          <Button ButtonClass={"bg-blue-600"} onClick={()=>console.log('click')}>EDIT</Button>
          <Button ButtonClass={"bg-red-600"} onClick={()=>console.log('deleted')}>DELETE</Button>
        </div>
    </div>
  )
}

export default ProductCard