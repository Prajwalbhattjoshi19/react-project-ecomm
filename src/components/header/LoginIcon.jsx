const LoginIcon=(props)=>{
        {console.log("LoginIcon userName=",props.userName)}
        if(props.userName===""||props.userName===undefined||props.userName===null){
          return (<h1 className="outterLogin">Login</h1>);
        }
        else{

          return(<h1>Logout</h1>) ;
        } 
      
}
export default LoginIcon;