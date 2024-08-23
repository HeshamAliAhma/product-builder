import ProductCard from "./components/ProductCard"
import { colorsList, formInputList, productList } from './components/data/Product'
import './App.css'
import MyModal from "./components/ui/Modal"
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import { IProduct } from "./components/interface/Interfacce"
import { defaultProduct } from "./components/utils/defaultProduct"
import { productValidation } from "./components/validation"
import MsgError from "./components/ui/MsgError"
import Colors from "./components/ui/Colors"
import { v4 as uuidv4 } from 'uuid';
import Select from "./components/ui/Select"


function App() {
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [errors, setErrors] = useState({ title: '', description: '', imageUrl: '', price: '' })
  const [isOpen, setIsOpen] = useState(false)
  const [tempColor, setTempColor] = useState<string[]>([])
  // ---------- Handler ----------
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const Handler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setProduct({
      ...product,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]: ""
    })
  }

  const cancelHandler = () => {
    setProduct(defaultProduct)
    setIsOpen(false)
  }

  const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, imageUrl, price } = product;
    const errors = productValidation({ title, description, imageUrl, price });

    const hasMsgError = Object.values(errors).some((value) => value !== "");

    if (hasMsgError) {
      setErrors(errors);
      return;
    }
    console.log('Send Data To Server');
    setProducts(prev => [{ ...product, id: uuidv4(), colors: tempColor },...prev])
    setProduct(defaultProduct)
    setTempColor([])
    close()
  }
  // ------------ Render ------------
  const RenderProductList = products.map((product) => <ProductCard key={product.id} product={product} />)

  const RenderFormInputList = formInputList.map((input) => {
    return (
      <div className="flex flex-col mb-1" key={input.id}>
        <label htmlFor={input.id}>{input.label}</label>
        <Input type={input.type} name={input.title} id={input.id} value={product[input.title]} onChange={Handler} />
        <MsgError msg={errors[input.title]} />
      </div>
    )
  })
  const RenderColorsList = colorsList.map((color) => <Colors key={color} colors={color} onClick={() => {
    if (tempColor.includes(color)) {
      setTempColor(prev => prev.filter(item => item !== color))
      return;
    }
    setTempColor((prev) => [...prev, color])
  }} />)
  return (
    <main className="relative">
      <div className="container">
        <div className={`${isOpen ? "bg-gray-700 opacity-60 absolute top-0 left-0 w-full h-full" : null}`}></div>
        <Button ButtonClass={"bg-blue-600"} onClick={open}>Add</Button>
        <div className="rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 p-2 mt-2">
          {RenderProductList}
        </div>
        <MyModal isOpen={isOpen} close={close} title="this is the product">
          <form action="" onSubmit={onsubmitHandler}>
            {RenderFormInputList}
            <Select/>
              <div className="flex gap-2 my-3 flex-wrap">
                {RenderColorsList}
                {tempColor.map(color => <span style={{ backgroundColor: color }} className="w-fit px-2 py-1 text-white rounded-md font-bold">{color}</span>)}
              </div>
            <div className="flex items-center gap-2 mt-6">
              <Button ButtonClass={"bg-blue-950 opacity-70 hover:opacity-100"} >Add</Button>
              <Button ButtonClass={"bg-red-950 opacity-70 hover:opacity-100"} onClick={cancelHandler}>cancel</Button>
            </div>
          </form>
        </MyModal>
      </div>
    </main>
  )
}

export default App