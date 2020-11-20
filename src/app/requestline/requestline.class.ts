import { Product } from '../product/product.class';


export class Requestline {
    id: number = 0;
    requestId: number = 0;
    productId: number = 0;
    quantity: number = 1;

    product: Product = null;
    request: Request = null;

    constructor() {}
}