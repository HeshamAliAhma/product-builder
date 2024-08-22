

export interface IProduct {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    price: string,
    color: string[],
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