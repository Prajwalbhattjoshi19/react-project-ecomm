import React, { useState } from 'react';
import Header from '../../components/header/header';
import Products from '../../components/product/products';
import { getCartFromDB } from '../viewCart/viewCartUtility';
const Home=(props)=>{
    
    let [cart,setCart]=useState(getCartFromDB())
    
    return (
        <div>
         <Header cart={cart} userName={props.userName} setUserName={props.setUserName}/>
          <Products cart={cart} setCart={setCart} userName={props.userName}/>
          </div>
    );
}
export default Home;