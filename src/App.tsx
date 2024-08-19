import ProductCard from "./components/ProductCard"
import { productList } from './components/data/Product'
import './App.css'
function App() {
  const list = productList.map((product)=> <ProductCard key={product.id} product={product} />)
  return (
    <main className="container">
    <div className="rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 p-2 mt-2">
    {list}
    </div>
    </main>
  )
}

export default App