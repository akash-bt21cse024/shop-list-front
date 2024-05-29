import { Header } from "../../component/Header";
import { Card } from "../../component/Card";

import { useCard } from "../../context/card.context";

export const Cardpage = () => {
  const { card } = useCard();

  return (
    <div>
      <Header></Header>
      <div className="flex flex-wrap gap-3 ml-56">
  {card?.length > 0 ? (
    card.map((product) => <Card key={product._id} product={product} />)
  ) : (
    <h1>There is no item in wishlist</h1>
  )}
</div>

    </div>
  );
};
