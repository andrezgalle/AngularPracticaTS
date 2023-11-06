import { Product } from "./06-funtions-destructuring";
import { taxCalculation } from "./06-funtions-destructuring";
const shoppingCart: Product[] = [
    {
        description: 'nokia',
        price:150
    }
];

const [total, impuesto] = taxCalculation({products: shoppingCart,tax:0.15})
console.log(total)
console.log(impuesto)