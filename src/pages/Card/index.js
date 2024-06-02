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
      <div className="flex flex-wrap gap-3 ml-12">
  {card?.length > 0 ? (
    card.map((product) => <Card key={product._id} product={product} />)
  ) : (
    <div className="flex items-center justify-center w-full">
      <div className="flex  items-center justify-center border bg-cyan-50 drop-shadow-2xl w-1/2 h-[32rem]">
        <div className="flex flex-col h-[16rem] w-1/2 border drop-shadow-2xl bg-cyan-100 items-center ">
          <h1 className="my-8">---YOUR CART IS EMPTY---</h1>
          <button
            className="my-2 h-12 w-[12rem] rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50"
            onClick={() => navigate("/")}
          >
            Click to add in cart
          </button>
        </div>
      </div>
    </div>
  )}
</div>
</main>
    </div>
  );
};
