import promptSync from 'prompt-sync'
const prompt = promptSync()

import data from './products.json'

const products: Product[] = data

type Product = {
  id:number,
  name:string,
  description:string,
  category:string,
  price:number,
  quantity:number,
  discount:number,
  reviewCount:number
}
/*
//Map
const nameProducts = products.map(product => product.name)
console.log(`nameProducts:` + nameProducts)

type ProductInfo  = {
  name: string,
  price: number
}
const productsInfo: ProductInfo[] = products.map(product => {
  return {
        name: product.name,
        price: product.price
    };
})
console.log(`products name and price:`, productsInfo)

//Filter
const filteredProductsQuantity = products.filter(product => product.quantity > 20)
console.log(`filteredProductsQuantity:`,filteredProductsQuantity)

const filteredProductsPrice = products.filter(product => product.price > 100)
console.log(`filteredProductsPrice:`,filteredProductsPrice)

const filteredProductsCategory = products.filter(product => product.category === "Electronics")
console.log(`filteredProductsCategory:`,filteredProductsCategory)

const filteredProductsDiscount = products.filter(product => (product.price * (1 - product.discount / 100)) > 50)
console.log(`filteredProductsDiscount:`,filteredProductsDiscount)

//Reduce
const sumAllProtucts = products.reduce((sum, product) => sum + product.price, 0)
console.log(`sumAllProtucts:`,sumAllProtucts)

console.log(`averagePriceProtucts:`,sumAllProtucts / products.length)

//Task 9
const minPriceProduct = products.reduce((min, product) => min.price < product.price ? min : product)
console.log(`minPriceProduct:`,minPriceProduct)

const maxPriceProduct = products.reduce((max, product) => max.price > product.price ? max : product)
console.log(`maxPriceProduct:`,maxPriceProduct)

//Task 10
type ProductPriceWithDiscount = {
    price: number,
    quantity: number,
    discount:number
    priceWithDiscount: number
}

const productPriceWithDiscount : ProductPriceWithDiscount[] = products.map(product =>{
    return{
        price: product.price,
        quantity: product.quantity,
        discount: product.discount,
        priceWithDiscount: product.price * (1 - product.discount / 100)
    }
})

const sumAllProtuctsWithDiscount = productPriceWithDiscount.reduce((sum, product) => sum + product.priceWithDiscount, 0)
console.log(`sumAllProtuctsWithDiscount`,sumAllProtuctsWithDiscount)

//Task 11
const hasZeroQuantity = products.filter(product => product.quantity === 0);

if (hasZeroQuantity.length > 0) {
    console.log("Є товари з нульовою кількістю:", hasZeroQuantity);
} else {
    console.log("Усі товари в наявності.");
}

//Task 12
const sumAllReviewCountProducts = products.reduce((sum, product) => sum + product.reviewCount, 0)
console.log(`sumAllReviewCountProducts`,sumAllReviewCountProducts) */

//Task 13
type ProductCategory  = {
  category: string
}
const dataProductCategory: ProductCategory[] = products.map(product => {
  return {
        category: product.category,
    };
})

const uniqCategory = [...new Set(products.map(product => product.category))];
console.log(`uniqCategory:`, uniqCategory)