import { Header } from "../../component/Header";
import {Wishlist} from "../../component/Wishlist";

import { useWishlist } from "../../context/wishlist.context";

export const Wishlistpage = () => {


  const{wishlist}=useWishlist();

  return (
    <div>
      <Header></Header>
      <div className="flex flex-wrap gap-3  ml-56">
        {wishlist?.length > 0 ? (
          wishlist.map((product) => (
            <Wishlist key={product._id} product={product} />
          ))
        ) : 
          <></>
        }
      </div>
    </div>
  );
};
