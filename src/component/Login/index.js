import { loginfxn } from "../../api/authentication";
import { useState } from "react";
import { useCard } from "../../context/card.context";
import { useNavigate } from "react-router-dom";
export  const Login= ()=>{
 const [number,setnumber]=useState("")
 const [password,setpassword]=useState("")
const {setsignup}=useCard();
const navigate=useNavigate();
    const sign =async ()=>{
        
        const data=await loginfxn({password,number});
         console.log(data);
      }

    return(
         <div className="flex flex-col items-center ">
        {/* <form className="flex flex-col items-center "> */}
        
        <div className=" my-2  border w-1/4 drop-shadow-2xl bg-cyan-50"><label className="mx-4">password--</label><input onChange={(e)=>{setpassword(e.target.value)}} required type="password" placeholder="password"></input> </div>
        <div className=" my-2  border w-1/4 drop-shadow-2xl bg-cyan-50"><label className="mx-4">number--</label> <input onChange={(e)=>{setnumber(e.target.value)}} required placeholder="number"></input></div>
        <div className=" my-2  border w-28 text-center drop-shadow-2xl bg-cyan-200 hover:opacity-50 "> <button onClick={()=>{
          if(number.length!==10) { alert("number length is not equal to 10")}
          else{sign();
            navigate("/");
          }
        }
      } type="submit"> Login </button></div>
      <div className="my-2  border w-28 text-center drop-shadow-2xl bg-cyan-200 hover:opacity-50"><button>Login for credencial test </button></div>
       <div className=" my-2  border w-28 text-center drop-shadow-2xl bg-cyan-200 hover:opacity-50 "> <button onClick={()=>setsignup(true)}  > Create new account </button></div>
       
    {/* </form> */}
     </div>
    )
}