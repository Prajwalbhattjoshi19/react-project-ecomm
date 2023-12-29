import React, { useEffect, useMemo } from 'react';
import './product.css';
import addTocart from './productUtility';
const Products=(props)=>{
    const products=getRandomProductsList();
    const productView= <div className="container">{products.map((product)=>{
        return <div class="prods">
            <h6>Product name: {product.name}</h6>
            <h6>Product price: {product.price}</h6>
            <button onClick={() => addTocart(product,props.setCart,props.cart)}>Add to cart</button>
        </div>
    })}
    </div>
    return productView;
}
function getRandomProductsList(){
    var productList=[];
        for(let a=0;a<12;a++){
            const prod=getRandomProd();
            productList.push(prod);
        }
    
    return productList;
  
}
function getRandomProd(){
    const name=getRandomName(10);
    const price=getRandomPrice(10,1000);
    const prod=new Product(name,price);
    return prod;
}
function getRandomName(length){
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomName = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomName += characters[randomIndex];
    }
  
    return randomName;
}
function getRandomPrice(min,max){
    const random = Math.random();

  // Calculate the range of the prices
  const range = max - min;

  // Calculate the random price within the range
  const randomPrice = (random * range) + min;

  // Round the price to two decimal places
  const roundedPrice = Math.round(randomPrice * 100) / 100;

  // Return the generated random price
  return roundedPrice;
}
function Product(name,price){
    this.name=name;
    this.price=price;
}
export default Products;