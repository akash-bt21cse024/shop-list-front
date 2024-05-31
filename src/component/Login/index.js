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

    return( <div className=" flex  justify-center items-center ">
        <div className="flex  items-center flex-col   drop-shadow-2xl w-1/2 h-[32rem] border  bg-cyan-50 ">
          <h1 className="my-12 ">-------LOGIN PAGE------</h1>
        <form className="flex flex-col w-1/2 items-center h-[16rem]  drop-shadow-2xl border bg-cyan-100 "> 
        
        <div className=" my-2  border  drop-shadow-2xl bg-cyan-100"><label className="mx-4">password--</label><input onChange={(e)=>{setpassword(e.target.value)}} required type="password" placeholder="password"></input> </div>
        <div className=" my-2  border  drop-shadow-2xl bg-cyan-100"><label className="mx-4">number--</label> <input onChange={(e)=>{setnumber(e.target.value)}} required placeholder="number"></input></div>
        <div className="  "> <button className="my-2 h-8 w-56 rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50" onClick={()=>{
          if(number.length!==10) { alert("number length is not equal to 10")}
          else{sign();
            navigate("/");
          }
        }
      } type="submit"> Login </button></div>
      <div className=""><button className="my-2 h-8 w-56 rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50">Login for credencial test </button></div>
       <div className="  "> <button className=" my-2 h-8 w-56 rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50" onClick={()=>setsignup(true)}  > Create new account </button></div>
       
     </form> 
     </div> 
     </div>
    )
}