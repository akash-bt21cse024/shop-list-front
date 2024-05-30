import { useWishlist } from "../../context/wishlist.context";
import { useCard } from "../../context/card.context";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { wishlist } = useWishlist();
  const {card,token,settoken}=useCard();
  const navigate=useNavigate();
settoken(localStorage.getItem("token"));
  return (
    <header
      className="flex drop-shadow-lg h-12 items-center justify-between bg-cyan-50
      fixed top-0 left-0 w-screen z-20 border px-6 py-2"
    >
      <button onClick={()=>navigate('/')} className="font-bold text-2xl">Akash</button>
      <div className="flex gap-4 ">
        <div className="relative">
          <button onClick={()=>navigate('/wishlist')} >
            <span className="material-symbols-outlined text-2xl w-12 h=12">favorite</span>
          </button>
          {wishlist?.length>0?<div className="absolute top-0 bg-gray-900 right-0  text-white rounded-full h-4 w-5 flex items-center justify-center">
            {wishlist.length}
          </div>:""}
        </div>

        <div className="relative">
          <button onClick={()=>navigate('/card')}>
            <span className="material-symbols-outlined text-2xl h-8 w-8">
              shopping_cart
            </span>
          </button>
          {card?.length>0?<div className="absolute top-0 bg-gray-900 right-0  text-white rounded-full h-4 w-5 flex items-center justify-center">
            {card.length}
          </div>:""}
        
          
        </div>
        <div>
            <button  onClick={()=>{
              if(!token){
                navigate("/auth")
              }
              else{
                navigate("/auth");
                localStorage.clear();
                console.log("clear storage");
              }
            }}> {token?.length>0?'Logout':"Login"}</button>
          </div>
      </div>
    </header>
  );
};
