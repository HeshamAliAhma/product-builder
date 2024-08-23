import { ICategory, IFormInput, IProduct } from "../interface/Interfacce"
import { v4 as uuidv4 } from 'uuid';

export const productList: IProduct[] = [
    {
        id: uuidv4(),
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: "109.95",
        colors: ["#3C2A21","#6C4AB6"],
        category: {
            name: "men's clothing",
            imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }
    },
    {
        id: uuidv4(),
        title: "Mens Casual Premium Slim Fit T-Shirts",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        imageUrl: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        price: "22.3",
        colors: ["#a855f7","#2563eb","#13005A","#FF6E31","#6C4AB6","#000000","#1f8a70","#ff0032",],
        category: {
            name: "men's clothing",
            imageUrl: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        }
    },
    {
        id: uuidv4(),
        title: "Mens Cotton Jacket",
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
        imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        price: "55.99",
        colors: ["#13005A","#A31ACB","#FF6E31"],
        category: {
            name: "men's clothing",
            imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        }
    },
    {
        id: uuidv4(),
        title: "Mens Casual Slim Fit",
        description: "The color could be slightly different between on the screen and in practice.",
        imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        price: "15.99",
        colors: ["#CB1C8D","#000000","#645cbb"],
        category: {
            name: "men's clothing",
            imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        }
    },
    {
        id: uuidv4(),
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        imageUrl: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        price: "695",
        colors: ["#1f8a70","#820000","#ff0032"],
        category: {
            name: "jewelry",
            imageUrl: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        }
    },
    {
        id: uuidv4(),
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        imageUrl: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        price: "695",
        colors: ["#a855f7","#2563eb","#84D2C5"],
        category: {
            name: "jewelry",
            imageUrl: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        }
    }
]



export const formInputList:IFormInput[] =[
    {
        id:'Title',
        title:"title",
        label:"Product Title",
        type:"text",
    },
    {
        id:'Description',
        title:"description",
        label:"Product Description",
        type:"text",
    },
    {
        id:'Image',
        title:"imageUrl",
        label:"Image URL",
        type:"text",
    },
    {
        id:'Price',
        title:"price",
        label:"Product Price",
        type:"text",
    }
]

export const colorsList: string[] = [
    "#a855f7",
    "#2563eb",
    "#84D2C5",
    "#13005A",
    "#A31ACB",
    "#FF6E31",
    "#3C2A21",
    "#6C4AB6",
    "#CB1C8D",
    "#000000",
    "#645cbb",
    "#1f8a70",
    "#820000",
    "#ff0032",
]


export const Categorylist:ICategory[] = [
  {
    id: uuidv4(),
    name: 'Nike',
    imageUrl:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmlrZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: uuidv4(),
    name: 'T-Shirt',
    imageUrl:'https://images.unsplash.com/photo-1575737132307-1fad104f1f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: uuidv4(),
    name: 'Clothes',
    imageUrl:'https://images.unsplash.com/photo-1453486030486-0a5ffcd82cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: uuidv4(),
    name: 'PC Desctop',
    imageUrl:'https://images.unsplash.com/photo-1640955014216-75201056c829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGMlMjBkZXNjdG9wfGVufDB8fDB8fHww'
  },
]