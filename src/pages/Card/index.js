import { Header } from "../../component/Header";
import { Card } from "../../component/Card";
import { useNavigate } from "react-router-dom";
import { useCard } from "../../context/card.context";

export const Cardpage = () => {
  const { card } = useCard();
  const navigate=useNavigate();
  return (
    <div>
      <Header></Header> <main className="mt-20">
      <div className="flex flex-wrap gap-3 ml-56">
  {card?.length > 0 ? (
    card.map((product) => <Card key={product._id} product={product} />)
  ) : (<div>
    <h1>There is no item in wishlist</h1>
    <button onClick={()=>navigate("/")} className="border drop-shadow bg-cyan-200 mt-6"> click add to wishlist</button>
    </div>
  )}
</div>
</main>
    </div>
  );
};
