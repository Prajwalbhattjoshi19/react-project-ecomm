function addTocart(product,setCart,cart){
    setCart({cartTotal:cart.cartTotal+product.price,cartQty:cart.cartQty+1});
    updateDB(product,{cartTotal:cart.cartTotal+product.price,cartQty:cart.cartQty+1});
    
    console.log("cart",JSON.parse(sessionStorage.getItem("cart")));
    console.log("productList",JSON.parse(sessionStorage.getItem("productList")));
}
function updateDB(product,cart){
   
   persistCartData(cart);
   persistProductData(product);
   
}
function persistCartData(cart){
    let cartString=JSON.stringify(cart);
    sessionStorage.removeItem("cart");
    sessionStorage.setItem('cart',cartString);
}
function persistProductData(product){
    let productList=JSON.parse(sessionStorage.getItem("productList"));
    if(productList==null){
        productList=[];
        productList.push(product);
    }else{
        productList.push(product);
    }
    sessionStorage.removeItem("productList");
    sessionStorage.setItem("productList",JSON.stringify(productList));
}
export default addTocart;