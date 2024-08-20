import ProductCard from "./components/ProductCard"
import { productList } from './components/data/Product'
import './App.css'
import MyModal from "./components/ui/Modal"
import { useState } from 'react'
import Button from "./components/ui/Button"

function App() {
  
  const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }
    
    function close() {
      setIsOpen(false)
    }
    
    const list = productList.map((product)=> <ProductCard key={product.id} product={product} />)
  return (
    <main className="container">
        <Button ButtonClass={"bg-blue-600"} onClick={open}>Add</Button>
        <div className="rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 p-2 mt-2">
        {list}
      </div>
      <MyModal isOpen={isOpen} close={close} open={open} title="this is the product"> 
        <div className="flex items-center gap-2">
          <Button ButtonClass={"bg-blue-950 opacity-70 hover:opacity-100"} >Add</Button>
          <Button ButtonClass={"bg-red-950 opacity-70 hover:opacity-100"} >cancel</Button>
        </div>
      </MyModal>
    </main>
  )
}

export default App