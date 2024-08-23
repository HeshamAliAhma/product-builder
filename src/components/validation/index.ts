interface IProduct {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

export const productValidation = (product: IProduct) => {
    const errors: IProduct = {
        title:'',
        description:"",
        imageUrl:"",
        price:""
    };

    const imageValid = /^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(product.imageUrl);
    if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = 'Product Title must be between 10 and 80 characters';
    }

    if (!product.description.trim() || product.description.length < 10 || product.description.length > 900) {
        errors.description = 'Product Description must be between 10 and 900 characters';
    }

    if (!product.imageUrl.trim() || !imageValid) {
        errors.imageUrl = 'Product Image URL is not valid';
    }

    const priceNumber = Number(product.price);
    if (isNaN(priceNumber) || priceNumber <= 0 || !product.price.trim()) {
        errors.price = 'Product Price must be a positive number';
    }

    return errors;
};
