export function getCartFromDB(){
    let cart=JSON.parse(sessionStorage.getItem("cart"));
    if(cart==null|| cart==undefined){
        return {cartTotal:0,cartQty:0}
    }
    return cart;
}
export function getProductListFromDB(){
    return JSON.parse(sessionStorage.getItem("productList"));
}

export function shareCart(name="Guest",cart,productList){
    let email=document.getElementById('sharecartformemailTo').value;
    if(name===null||undefined){
        name="Guest";
    }
    let shareCartEmailDto={name,...cart,"products":[...productList],email};
    console.log("shareCartEmailDto=",JSON.stringify(shareCartEmailDto));
    fetch("http://localhost:8080/api/cart/sharecart",{
        method:"POST",
        body:JSON.stringify(shareCartEmailDto),
    }).then(response => response.text()).
    then(response => console.log("sahreCart",response));

}