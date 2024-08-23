

export interface IProduct {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    price: string,
    colors: string[],
    category: {
        name: string,
        imageUrl: string,
    }
}







export interface IFormInput{
    id:string,
    title: "title" | "description" | "imageUrl" | "price",
    label:string,
    type:string
}


export interface ICategory{
    id: string,
    name: string,
    imageUrl:string,
}