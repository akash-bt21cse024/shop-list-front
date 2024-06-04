import { Header } from "../../component/Header";
import { Card } from "../../component/Card";
import { useNavigate } from "react-router-dom";
import { useCard } from "../../context/card.context";
import { useState, useEffect } from "react";

export const Cardpage = () => {
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(1);
  const { card, cartlist } = useCard();
  const navigate = useNavigate();

  useEffect(() => {
    let flag = 0;
    let amt = 0;
    for (let item in cartlist) {
      flag += cartlist[item];
      amt += Number(item) * cartlist[item];
    }
    setAmount(amt);
    setCount(flag);
  }, [cartlist]);

  return (
    <div>
      <Header />
      <main className="mt-20 flex">
        
          {card?.length > 0 ? (
            <div className="flex">
            <div className="flex flex-col flex-wrap gap-3 ml-12">
              {card.map((product) => (
                <Card key={product._id} product={product} />
              ))}
              </div>
              <div className="w-[40rem] font-bold text-xl border bg-cyan-50 flex flex-col fixed items-center drop-shadow-lg right-8">
                <h1>Number of items - {count}</h1>
                <h1>Deleviry charges-- 100</h1>
                <h1>Total amount - {amount * 84  +100}</h1>
                <button
              className=" hover:opacity-50  px-3 my-2 w-[10rem] h-[3rem]  border-slate-800 rounded-md bg-amber-600 border "

            >
              Buy
            </button>
              </div>
              </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center justify-center border bg-cyan-50 drop-shadow-2xl w-1/2 h-[32rem]">
                <div className="flex flex-col h-[16rem] w-1/2 border drop-shadow-2xl bg-cyan-100 items-center">
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
       
      </main>
    </div>
  );
};
