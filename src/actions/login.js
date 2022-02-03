import axios from "axios";
let result;
export const login=async (e)=>{
    const data={username:e.target[0].value,password:e.target[1].value}
 
  /*   const data = { email, password }; */
  await  axios
    .post("http://localhost:3001/api/Login", data, { withCredentials: true })
    .then(await function (response)  {
  
      if(response.data.result==="Network Error"){
          result="Network Error"
      }
      else {
           result =response.data.result
      }
    /* if(!!response.data.loggedIn && !!response.data.admin){ navigate( "/20ScMp21admin11" , { state:{loggedIn:response.data.loggedIn}} )}
   else if(!!response.data.loggedIn && ! !!response.data.admin){ window.location.href = "https://www.scmp-lb.com/webmail";}

  else{return(alert("Username or Password is not valid!")) */
  
})
  .catch((error)=>{
      result="Network Error"
  });
  return result
}