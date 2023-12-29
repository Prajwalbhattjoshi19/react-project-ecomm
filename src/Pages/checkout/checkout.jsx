import { formData, sendOrderEmailToAdmin } from "./checkoutUtility";
import error from '../../components/error'
const Checkout= (props)=>{
    if(props.showCheckout==true){
        return ( 
            <div>
                 <form id="checkoutform" onSubmit={()=>{if(sendOrderEmailToAdmin(props.cart)==="done"){props.setCart={};props.productList={}}else{<error/>}} }>
                    <label>Phone Number:
                    <input type="tel"  id="checkoutformphonenumber"></input>
                    </label>
                    
                    <label>Name:
                    <input type="text" id="checkoutformName"></input>
                    </label>
                    
                    <label>Email:
                    <input type="email" id="checkoutformEmail"></input>
                    </label>
                    
                    <label>Address:
                    <input type="text" height="30px" width="100 px" id="checkoutformAddress"></input>
                    </label>
                    
                    <button type="submit">Submit</button>
                    {/* {console.log(document.getElementById("checkoutform"))} */}
                    
                    {/* <input type="submit"></input> */}
                    
                </form>
                
            </div>
        );
    }
    
}
export default Checkout;