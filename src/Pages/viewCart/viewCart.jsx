import React, { useState } from 'react';
import { getCartFromDB, getProductListFromDB, shareCart } from './viewCartUtility';
import Checkout from '../checkout/checkout';
import './viewCart.css'
const ViewCart=(props)=>{
    let [productList,setProductList]=useState(getProductListFromDB());
    let [cart,setCart]=useState(getCartFromDB());
    let [showCheckout,setShowCheckout]=useState(false);
    let[displayShareCart,setDisplayShareCart]=useState(false);
    return <div className='qwert'><table>
        <h1>Cart:</h1>
        {displayShareCart&&<ShareCart setDisplayShareCart={setDisplayShareCart} userName={props.userName} cart={props.cart} productList={props.productList} />}
        <img className='shareImg' onClick={()=>{setDisplayShareCart(true)}}  width={25} height={25} src='https://banner2.cleanpng.com/20180710/sx/kisspng-computer-icons-share-icon-clip-art-shares-icon-5b456a80079317.114099841531275904031.jpg'></img>
        <tr>
        <th>cart total</th>
        <th>cart qty</th>
        </tr>
        <tr>
        <td>
       {cart.cartTotal} 
        </td>
        <td>
        {cart.cartQty}
        </td>
        </tr>
    </table>
    <button className='checkout' onClick={()=>{
        setShowCheckout(true);
       }}>Checkout</button>
    <table>
        <tr>
        <th>Product Name:</th>
        <th>Product Price</th>
        </tr>
        
            {productList.map((product)=>{
                
                return <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            })}
        
    </table>
    <Checkout showCheckout={showCheckout} cart={cart} setCart={setCart} setProductList={setProductList}/>
    </div>
}
export const ShareCart=(props)=>{
  return  <div className='shareCartTab'>
    <h1>Share cart to</h1>
    <img className="CrossMark" onClick={()=>{props.setDisplayShareCart(false)}} src='https://th.bing.com/th/id/OIP.1aoBOh50jMA3E6SVjj-6HQHaH_?rs=1&pid=ImgDetMain' height={25} width={25}/>
        <form id='sharecartform' onSubmit={()=>{shareCart(props.userName,props.cart,props.productList)}}>
        <label>Eamil:
            <input id='sharecartformemailTo'></input>
        </label>
       <button type='submit'>Submit</button>
        </form>
    </div>
}
export default ViewCart;