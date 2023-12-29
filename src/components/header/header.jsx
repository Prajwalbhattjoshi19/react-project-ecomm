import React from "react"
import CartIcon from "../cartIcon/cartIcon";
import './header.css';
import LoginIcon from "./LoginIcon";

const Header=(props)=>{
        return <div class="header">
        <a href="/">
        <img src="https://shmector.com/_ph/13/979709898.png"  alt="company's logo" id="companyLogo"/>
        </a>
        <CartIcon cart={props.cart} userName={props.userName}/>
        <a href="/viewCart">
          <img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" class="cartLogo"/>
        </a>
        {props.userName&&<h1>Hi {props.userName}</h1>}
        <a href="/login" className="outterLogin">
          <LoginIcon userName={props.userName}/>
        </a>
        </div>
}
export default Header;
