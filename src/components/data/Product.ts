import { IFormInput, IProduct } from "../interface/Interfacce"

export const productList: IProduct[] = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: "109.95",
        color: ["Black", "Blue"],
        category: {
            name: "men's clothing",
            imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        imageUrl: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        price: "22.3",
        color: ["Red", "White"],
        category: {
            name: "men's clothing",
            imageUrl: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        }
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
        imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        price: "55.99",
        color: ["Green", "Brown"],
        category: {
            name: "men's clothing",
            imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        }
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        description: "The color could be slightly different between on the screen and in practice.",
        imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        price: "15.99",
        color: ["Grey", "Black"],
        category: {
            name: "men's clothing",
            imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        }
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        imageUrl: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        price: "695",
        color: ["Gold", "Silver"],
        category: {
            name: "jewelry",
            imageUrl: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        }
    },
    {
        id: 6,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        imageUrl: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        price: "695",
        color: ["Gold", "Silver"],
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