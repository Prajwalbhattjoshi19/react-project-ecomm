export function LogInFunction(setNameFunction){
    let credentials=JSON.parse(sessionStorage.getItem("credentials"));
    let userName=getUserName();
    let password=getPassword();
    let authorized =false;
    if(credentials !== null){
        credentials.map((credential)=>{
            if(credential.userName===userName){
                if(credential.password===password){
                    sessionStorage.removeItem("LogedInUserName")
                    sessionStorage.setItem("LogedInUserName",userName)
                    setNameFunction(userName);
                    authorized=true;
                }
            }
        })
    }
    return authorized?userName:null;
}
export function RegisterFunction(props){
    let userName=document.getElementById("registerusername").value;
    let password=document.getElementById("registerpassword").value;
       let credential=new Credential(userName,password);
       let credentials=sessionStorage.getItem("credentials")==null?[]:JSON.parse(sessionStorage.getItem("credentials"));
       console.log(...credentials)
        credentials.push(credential);
        sessionStorage.setItem("credentials",JSON.stringify(credentials));
       props.userName=userName;
       return userName;
}
function getUserName(){
    return document.getElementById("loginusername")===null?null:document.getElementById("loginusername").value;
   }
   function getPassword(){
    return document.getElementById("loginpassword")===null?null:document.getElementById("loginpassword").value;
   }
function Credential(userName,password){
    this.userName=userName;
    this.password=password;
}
export function setLogInData(event,name,setNameFunction){
    event.preventDefault();
    LogInFunction(setNameFunction);
}
export const getLogedInUserName=()=>{
    return sessionStorage.getItem("LogedInUserName")

}
export const logOut =()=>{
    sessionStorage.removeItem("LogedInUserName")
}
