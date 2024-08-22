import ProductCard from "./components/ProductCard"
import { formInputList, productList } from './components/data/Product'
import './App.css'
import MyModal from "./components/ui/Modal"
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import { IProduct } from "./components/interface/Interfacce"
import { defaultProduct } from "./components/utils/defaultProduct"
import { productValidation } from "./components/validation"
import MsgError from "./components/ui/MsgError"

function App() {

  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [errors, setErrors] = useState({ title: '', description: '', imageUrl: '', price: 0, })
  const [isOpen, setIsOpen] = useState(false)

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
  }
  // ------------ Render ------------
  const RenderProductList = productList.map((product) => <ProductCard key={product.id} product={product} />)
  const RenderFormInputList = formInputList.map((input) => {
    return (
      <div className="flex flex-col mb-1" key={input.id}>
        <label htmlFor={input.id}>{input.label}</label>
        <Input type={input.type} name={input.title} id={input.id} value={product[input.title]} onChange={Handler} />
        <MsgError msg={errors[input.title]} />
      </div>
    )
  })

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