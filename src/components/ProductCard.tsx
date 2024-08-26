import Image from "./Image"
import { IProduct } from "./interface/Interfacce"
import Button from "./ui/Button"
import Colors from "./ui/Colors"
import {trimText} from './utils/functions'

interface IProps {
  product:IProduct,
  setProductToEdit:(product:IProduct) => void,
  openToEdit:() => void
  setProductToEditIndex:(index:number) => void
  index:number,
}

const ProductCard = ({product,setProductToEdit,openToEdit,setProductToEditIndex,index}:IProps) => {
  const {title, description,price,imageUrl,colors,category} = product

  // ------------- Render Colors ---------------
  const RenderColorsList = colors.map(color => <Colors colors={color}/>)

  // ------------ Handler Edit --------------- 
  // event: MouseEvent<HTMLButtonElement, MouseEvent>
  const HandlerEdit = (): void => {
    setProductToEdit(product)
    openToEdit();
    setProductToEditIndex(index);
  }

  return (
    <div className="p-2 bg-white rounded-md">
        <div className="max-w-md h-[20rem]">
          <Image ImageUrl={imageUrl} ImageName={"car"} ImageClass={"rounded-md h-full w-full"}/>
        </div>
        <h1 className="font-bold text-xl my-2">{trimText(title,25)}</h1>
        <p>{trimText(description,70)}</p>
        <div className="flex gap-2 my-3">
          {RenderColorsList}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-indigo-600">${price}</span>
          <Image ImageUrl={category.imageUrl} ImageName={category.name} ImageClass={"rounded-full w-10 h-10 "}/>
        </div>
        <div className="flex items-center justify-between gap-3 mt-3">
          <Button ButtonClass={"bg-blue-600"} onClick={HandlerEdit}>EDIT</Button>
          <Button ButtonClass={"bg-red-600"} >DELETE</Button>
        </div>
    </div>
  )
}

export default ProductCard