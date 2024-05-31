import { useState } from "react"
import { signupfxn } from "../../api/authentication"
import { useCard } from "../../context/card.context"
    export const SignUp =()=>{

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [number,setnumber]=useState("")
  const {setsignup}=useCard();
  const sign =async ()=>{
    
    const data=await signupfxn({name,email,password,number});
  console.log(data);
  }

        return(
         <div className="flex items-center justify-center">
            <div className="flex flex-col items-center border bg-cyan-50 drop-shadow-2xl w-1/2 h-[32rem] ">
              <h1 className="my-12 ">----Create new account----</h1>
            <form className="flex flex-col border drop-shadow-2xl bg-cyan-100  justify-center  ">
              <div className=" my-2 border  drop-shadow-2xl bg-cyan-100 "><label className="mx-4">name--</label> <input onChange={(e)=>{console.log(e.target.value);
                setname(e.target.value)}} required placeholder="Name"></input> </div>
              <div className=" my-2  border drop-shadow-2xl bg-cyan-100" ><label className="mx-4">email--</label> <input onChange={(e)=>{setemail(e.target.value)}} required placeholder="email"></input></div>
              <div className=" my-2  border  drop-shadow-2xl bg-cyan-100"><label className="mx-4">password--</label><input onChange={(e)=>{setpassword(e.target.value)}} required type="password" placeholder="password"></input> </div>
              <div className=" my-2  border  drop-shadow-2xl bg-cyan-100"><label className="mx-4">number--</label> <input onChange={(e)=>{setnumber(e.target.value)}} required placeholder="number"></input></div>
              <div className=" flex justify-center "> <button className="my-2 h-8 w-20 rounded-lg border  text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50" onClick={()=>{ 
                if(number.length!==10) { alert("number length is not equal to 10")}
                else{sign();
                    setsignup(false);
                }
               
              }
            } type="submit"> submit </button></div>
          </form>
          </div>
          </div> 
            
           )
      }
