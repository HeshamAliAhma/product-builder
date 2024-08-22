interface IProduct {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

interface IErrors {
    title?: string;
    description?: string;
    imageUrl?: string;
    price?: string;
}

/**
 * Validates a product object to ensure it meets certain criteria.
 *
 * @param {IProduct} product - The product object to validate. It should contain the following properties:
 *   - `title` (string): The title of the product. Must be between 10 and 80 characters.
 *   - `description` (string): The description of the product. Must be between 10 and 900 characters.
 *   - `imageUrl` (string): The URL of the product image. Must be a valid URL with an image extension (e.g., .jpg, .png).
 *   - `price` (string): The price of the product. Must be a positive number.
 *
 * @returns {IErrors} An object containing validation errors. The object may have the following properties:
 *   - `title` (string): Error message if the title is not valid.
 *   - `description` (string): Error message if the description is not valid.
 *   - `imageUrl` (string): Error message if the image URL is not valid.
 *   - `price` (string): Error message if the price is not a positive number.
 *   If a field is valid, it will not be present in the returned object.
 */
export const productValidation = (product: IProduct): IErrors => {
    const errors: IErrors = {};

    // تحقق من عنوان الصورة باستخدام تعبير منتظم متقدم
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
