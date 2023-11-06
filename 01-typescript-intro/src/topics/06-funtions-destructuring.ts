export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[]
} 

export function taxCalculation(options:TaxCalculationOptions): [number,number] {
    const {products,tax} = options
    let total = 0;

    products.forEach(({price}) =>{
        total += price
    })

    return[total,total*tax]
}

const shoppingCard = [phone,tablet];
const tax = 0.15;

const [total, impuesto] = taxCalculation({products: shoppingCard,tax})


console.log('Total: ', total)
console.log('Tax: ', impuesto)


export {

}