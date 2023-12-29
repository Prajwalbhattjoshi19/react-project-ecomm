
const Log=(props)={  
     if(props.isLogin===true){
       
    <div>
        
    <form id="login" onSubmit={()=>{LogInFunction()}}>
       <label>
        UserName:
        <input id="loginusername"></input>
       </label>
       <label>
        Password:
        <input id="password" type="password"></input>
       </label>
       <label>
        <button type="submit"></button>
       </label>
    </form>
    </div>
}