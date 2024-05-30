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
import { Authpage } from "./pages/Auth";
import { ProtectedRoute } from "./context/ProtectedRoute";

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
      <Route path="/wishlist" element={<ProtectedRoute><Wishlistpage></Wishlistpage></ProtectedRoute>}></Route>
      <Route path="/card" element={<ProtectedRoute><Cardpage></Cardpage></ProtectedRoute>}></Route>
      <Route path="/product" element={<Productpage></Productpage>}></Route>
      <Route path="/auth" element={<Authpage></Authpage>}></Route>

    </Routes>
  );
}

export default App;
