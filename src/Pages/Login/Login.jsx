import { useState } from "react";
import { LogInFunction, RegisterFunction, getLogedInUserName, logOut, setLogInData } from "./LoginUtility";
const Login = ({userName,setUserName}) => {
    // State for login status
    const [isLogin, setIsLogin] = useState(true);
    {console.log("username=",userName)}
  if(userName===""||userName===null||userName===undefined){
    return (
        <div className="LoginOrRegister">
          <div className="Buttons">
          <button className="ele" onClick={()=>{setIsLogin(true)}}>Login</button>
          <button className="ele" onClick={()=>{setIsLogin(false)}}>Register</button>
          </div>
          {isLogin ===true ? 
            // Login form
            <div className="Form">
              <h1>Login</h1>
              <form id="login" onSubmit={(event)=>{setLogInData(event,LogInFunction(),setUserName)}}>
                <label>
                  UserName:
                  <input id="loginusername"></input>
                </label>
                <label>
                  Password:
                  <input id="loginpassword" type="password"></input>
                </label>
                <label>
                  <button type="submit">Login</button>
                </label>
              </form>
            </div>
           : 
            // Registration form
            <div>
              <h1>Register</h1>
              <form id="register" onSubmit={() => { RegisterFunction() ? userName = RegisterFunction() : userName = null }}>
                <label>
                  UserName:
                  <input id="registerusername"></input>
                </label>
                <label>
                  Password:
                  <input id="registerpassword" type="password"></input>
                </label>
                <label>
                  <button type="submit">Register</button>
                </label>
              </form>
            </div>
          }
        </div>
      );
  
    
  }
  else {
    setUserName("");
    logOut();
    window.location.href="http://localhost:3001/";
  }
      
function ssetUserName(userName){
        
}
};
  
  export default Login;
  