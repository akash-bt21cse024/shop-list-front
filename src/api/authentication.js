
import  axios  from "axios"
const api="https://shop-list-2.onrender.com"
const sinupurl= api+ "/api/auth/signup";
const loginurl= api+"/api/auth/login";


export const signupfxn = async (user) => {
    try {
        console.log(user)
      const data = await axios.post(sinupurl, user);
      console.log(data.data);
     return data;
    } catch (err) {
      console.log("error occured", err);
    }
  }
  export const loginfxn = async (user) => {
    try {
        console.log(user)
      const {
        data: { data },
      } = await axios.post(loginurl, user);
      localStorage.setItem("token",data.token);
      sessionStorage.setItem("token",data.token);
      
     return data;
    } catch (err) {
      console.log("error occured", err);
    }
  }

  