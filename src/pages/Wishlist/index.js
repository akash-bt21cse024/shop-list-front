import { Header } from "../../component/Header";
import {Wishlist} from "../../component/Wishlist";

import { useWishlist } from "../../context/wishlist.context";
import { useNavigate } from "react-router-dom";
export const Wishlistpage = () => {

 const navigate=useNavigate()
  const{wishlist}=useWishlist();

  return (
    <div>
      <Header></Header><main className="mt-16">
      <div className="flex flex-wrap gap-3 ml-56 ">
        {wishlist?.length > 0 ? (
          wishlist.map((product) => (
            <Wishlist key={product._id} product={product} />
          ))
        ) : 
        <div className="flex flex-col items-center "><div><p className="">wishlist is empty</p></div>
        <button className="my-6 border drop-shadow-xl w-32 bg-cyan-200" onClick={()=>navigate("/")}>click add to wishlist</button></div>
        }
      </div>
      
      </main>
    </div>
  );
};
