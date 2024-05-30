import { Homepage } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
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
  const { setwishlist, wishlistreducer } = useWishlist();

  const getWishlistData = async () => {
    const data = await wishfilter(wishlistreducer.product, wishlistreducer.type);
    setwishlist(data);
  };

  useEffect(() => {
    getWishlistData();
  }, [wishlistreducer]);

  const { setcard, cardreducer } = useCard();

  const getCardData = async () => {
    const data = await cardfilter(cardreducer.product, cardreducer.type);
    setcard(data);
  };

  useEffect(() => {
    getCardData();
  }, [cardreducer]);

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
