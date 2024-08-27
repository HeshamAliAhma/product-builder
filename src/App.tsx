import ProductCard from "./components/ProductCard"
import { Categorylist, colorsList, formInputList, productList } from './components/data/Product'
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
import { v4 as uuidv4 } from 'uuid'
import Select from "./components/ui/Select"
import { TProductName } from "./components/type"
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct)
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0)
  const [errors, setErrors] = useState({ title: '', description: '', imageUrl: '', price: '' })
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenToEdit, setIsOpenToEdit] = useState(false)
  const [tempColor, setTempColor] = useState<string[]>([])
  const [selected, setSelected] = useState(Categorylist[0])

  const [isOpenToRemove, setIsOpenToRemove] = useState(false)

  // ---------- Handler ----------
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  // const openToEdit = () => setIsOpenToEdit(true)
  const openToEdit = (product: IProduct, index: number) => {
    setIsOpenToEdit(true);
    setProductToEdit(product);
    setProductToEditIndex(index);
    setTempColor(product.colors);
  }
  const closeToEdit = () => setIsOpenToEdit(false)



  const closeToRemove = () => setIsOpenToRemove(false)

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
  
  const HandlerEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setProductToEdit({
      ...productToEdit,
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
    setIsOpenToEdit(false)
  }
  const cancelToRemove = () => {
    setIsOpenToRemove(false)
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
    toast('The product has been Created', {
      duration: 4000,
      position: 'top-center',
      icon: '👏',
      style: {
        backgroundColor: 'green',
        color: 'white',
      },
    });

    setProducts(prev => [{ ...product, id: uuidv4(), colors: tempColor, category: selected }, ...prev])
    setProduct(defaultProduct)
    setTempColor([])
    close()
  }
  const onsubmitEditHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, imageUrl, price } = productToEdit;
    const errors = productValidation({ title, description, imageUrl, price });
    const hasMsgError = Object.values(errors).some((value) => value !== "");
    if (hasMsgError) {
      setErrors(errors);
      return;
    }

    toast('The product has been Edited', {
      duration: 4000,
      position: 'top-center',
      icon: '👏',
      style: {
        backgroundColor: 'black',
        color: 'white',
      },
    });




    const updateProducts = [...products];
    updateProducts[productToEditIndex] = { ...productToEdit, colors: tempColor.concat(productToEdit.colors) };
    setProducts(updateProducts);



    setProductToEdit(defaultProduct)
    setTempColor([])
    closeToEdit()
  }

  const removeHandler = () => {
    const removeProducts = products.filter((product) => product.id !== productToEdit.id);
    setProducts(removeProducts);
    setIsOpenToRemove(false)
    toast('The product has been removed', {
      duration: 4000,
      position: 'top-center',
      icon: '👏',
      style: {
        backgroundColor:'red',
        color: 'white',
      },
    });
  }

  // ------------ Render ------------
  const RenderProductList = products.map((product, index) =>
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openToEdit={() => openToEdit(product, index)}
      setProductToEditIndex={setProductToEditIndex}
      index={index} isOpenToRemove={setIsOpenToRemove} />
  )

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
    if (productToEdit.colors.includes(color)) {
      setTempColor(prev => prev.filter(item => item !== color))
      return;
    }
    setTempColor((prev) => [...prev, color])
  }} />)

  const RenderFormEditWithErrorMsg = (id: string, title: string, name: TProductName, label: string) => {
    return (
      <div className="flex flex-col mb-1">
        <label htmlFor={title}>{label}</label>
        <Input type={'text'} name={title} id={id} value={productToEdit[name]} onChange={HandlerEdit} />
        <MsgError msg={errors[name]} />
      </div>
    )

  }


  return (
    <main className="relative">
      <div className="container">
        {/* <div className={`${isOpen || isOpenToEdit ? "transition-all backdrop-blur-sm absolute top-0 left-0 w-full h-full" : ""}`}></div> */}
        <Button ButtonClass={"bg-blue-600"} onClick={open} textColor={"text-white"}>Add</Button>
        <div className="rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 p-2 mt-2">
          {RenderProductList}
        </div>

        <MyModal isOpen={isOpen} close={close} title="Add The Product">
          <form action="" onSubmit={onsubmitHandler}>
            {RenderFormInputList}
            <Select selected={selected} setSelected={setSelected} />
            <div className="flex gap-2 my-3 flex-wrap">
              {RenderColorsList}
              {tempColor.map(color => <span style={{ backgroundColor: color }} key={color} className="w-fit px-2 py-1 text-white rounded-md font-bold">{color}</span>)}
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Button ButtonClass={"bg-blue-950 opacity-70 hover:opacity-100"} textColor={"text-white"} >Add</Button>
              <Button ButtonClass={"bg-white opacity-70 hover:opacity-100"} onClick={cancelHandler} textColor={"text-black"}>cancel</Button>
            </div>
          </form>
        </MyModal>

        {/* Open Modal To Edit */}
        <MyModal isOpen={isOpenToEdit} close={closeToEdit} title="Eidt This Product">
          <form action="" onSubmit={onsubmitEditHandler}>
            {RenderFormEditWithErrorMsg('title', 'title', 'title', 'Product Title')}
            {RenderFormEditWithErrorMsg('description', 'description', 'description', 'Product Description')}
            {RenderFormEditWithErrorMsg('imageUrl', 'imageUrl', 'imageUrl', 'Image Url')}
            {RenderFormEditWithErrorMsg('price', 'price', 'price', 'Product Price')}



            <Select selected={selected} setSelected={setSelected} />

            <div className="flex gap-2 my-3 flex-wrap">
              {RenderColorsList}
              {tempColor.concat(productToEdit.colors).map(color => <span style={{ backgroundColor: color }} key={color} className="w-fit px-2 py-1 text-white rounded-md font-bold">{color}</span>)}
            </div>



            <div className="flex items-center gap-2 mt-6">
              <Button ButtonClass={"bg-blue-950 opacity-70 hover:opacity-100"} textColor={"text-white"} >Add</Button>
              <Button ButtonClass={"bg-red-950 opacity-70 hover:opacity-100"} onClick={cancelHandler} textColor={"text-white"}>cancel</Button>
            </div>
          </form>
        </MyModal>


        {/* Open Modal To Remove */}
        <MyModal isOpen={isOpenToRemove} close={closeToRemove} title="Are You Sure You Want To Remove This Product From Your Store?">
          <p>Deleting this product will remove it permanetly from your inventory. Any assoclated data sales history and other related information will also be removed. Please make sure this in the intended action</p>
          <div className="flex items-center gap-2 mt-6">
            <Button ButtonClass={"bg-red-950 opacity-70 hover:opacity-100"} textColor={"text-white"} onClick={removeHandler}>Yes, Remove</Button>
            <Button ButtonClass={"bg-white text-black"} onClick={cancelToRemove} textColor={"text-black"}>cancel</Button>
          </div>
        </MyModal>
        <Toaster />

      </div>
    </main>
  )
}

export default App