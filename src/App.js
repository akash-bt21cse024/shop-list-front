import { Homepage } from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import { Wishlistpage } from "./pages/Wishlist";
import { useWishlist } from "./context/wishlist.context";
import { wishfilter } from "./utils/wishlist.helper";
import { useEffect } from "react";
import { cardfilter } from "./utils/card.helper";
import { useCard } from "./context/card.context";
import { Cardpage } from "./pages/Card";
import { Productpage } from "./pages/Product";
function App() {
  const {setwishlist,wishlistreducer}=useWishlist();
  const gtdata =async ()=>{
    const data = await wishfilter(wishlistreducer.product,wishlistreducer.type);
    setwishlist(data);
  }
  useEffect(()=>{
    gtdata();
  },[wishlistreducer])

  const {setcard,cardreducer}=useCard();
  const getdata =async ()=>{
    const data = await cardfilter(cardreducer.product,cardreducer.type);
    setcard(data);
  }
  useEffect(()=>{
    getdata();
  },[cardreducer])

  return (
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/wishlist" element={<Wishlistpage></Wishlistpage>}></Route>
      <Route path="/card" element={<Cardpage></Cardpage>}></Route>
      <Route path="/product" element={<Productpage></Productpage>}></Route>
    </Routes>
  );
}

export default App;
