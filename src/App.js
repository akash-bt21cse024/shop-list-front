import { Homepage } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Wishlistpage } from "./pages/Wishlist";
import { useWishlist } from "./context/wishlist.context";
import { wishfilter } from "./utils/wishlist.helper";
import { useEffect, useCallback } from "react";
import { cardfilter } from "./utils/card.helper";
import { useCard } from "./context/card.context";
import { Cardpage } from "./pages/Card";
import { Productpage } from "./pages/Product";
import { Authpage } from "./pages/Auth";
import { ProtectedRoute } from "./context/ProtectedRoute";

function App() {
  const { setwishlist, wishlistreducer } = useWishlist();
  const { setcard, cardreducer,userid } = useCard();

  const getWishlistData = useCallback(async () => {
    const data = await wishfilter (wishlistreducer.product, wishlistreducer.type,userid);
    setwishlist(data);
  }, [wishlistreducer.product, wishlistreducer.type,userid, setwishlist]);

  useEffect(() => {
    getWishlistData();
  }, [getWishlistData]);
 
  const getCardData = useCallback(async () => {
    const data = await cardfilter(cardreducer.product, cardreducer.type,userid);
    setcard(data);
  }, [cardreducer.product, cardreducer.type, setcard,userid]);

  useEffect(() => {
    getCardData();
  }, [getCardData]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/wishlist" element={<ProtectedRoute><Wishlistpage /></ProtectedRoute>} />
      <Route path="/card" element={<ProtectedRoute><Cardpage /></ProtectedRoute>} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/auth" element={<Authpage />} />
    </Routes>
  );
}

export default App;


