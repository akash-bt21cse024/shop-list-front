import { useNavigate } from "react-router-dom";
import { useCard } from "../../context/card.context";
import { useWishlist } from "../../context/wishlist.context";

export const Product = (product) => {
  const apikey = "rzp_test_uuQeQyfPlAHtk0";
  product = product.product;
  const navigate = useNavigate();
  const loadScript = (source) => {
    return new Promise((resolver) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolver(true);
      script.onerror = () => resolver(false);
      document.body.appendChild(script);
    });
  };

  const payment = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      console.log({ message: "Razorpay sdk failed to load" });
    }
    const option = {
      key: apikey,
      amount: Number(product.price) * 8400,
      currancy: "INR",
      name: "Shoping by Akash",
      email: "bt21cse24@nituk.ac.in",
      contact: "8650489580",
      description: "thanku for shoping",

      handler: ({ payment_id }) => {
        setwishlistreducer({ type: "delete", payload: product });
        setcardreducer({ type: "delete", payload: product });
        navigate("/");
      },

      prefill: {
        name: "Akash Kumar",
        email: "akash@gmail.com",
        contact: "8650489580",
      },
    };
    const paymentObjct = new window.Razorpay(option);
    paymentObjct.open();
  };

  const array = product.images;
  const oldprice = (price, discount) => {
    return Number(
      ((Number(price) * 100) / (100 - Number(discount))) * 84
    ).toFixed(2);
  };
  const { setcardreducer, card, setproduct } = useCard();
  const { setwishlistreducer, wishlist } = useWishlist();
  const findProductInWishlist = (wishlist, productId) =>
    wishlist.some((prod) => prod._id === productId);
  const isInWishlist = findProductInWishlist(wishlist, product._id);

  const findProductInCard = (card, productId) =>
    card.some((prod) => prod._id === productId);
  const isInCard = findProductInCard(card, product._id);

  return (
    <div className="mt-16 flex flex-row">
      <div className="flex flex-wrap gap-3 w-1/2 ">
        {array?.length > 0 ? (
          array.map((url) => {
            return <img className="h-56 w-42" src={url} alt="imag"></img>;
          })
        ) : (
          <></>
        )}{" "}
      </div>
      <div>
        <div className="right flex flex-col items-center fixed border w-auto  bg-cyan-50   drop-shadow-2xl">
          <div className="brand border  flex my-.5 items-center font-bold text-xl flex-col p-3 drop-shadow-2xl">
            {" "}
            <p>{product.brand}</p>{" "}
          </div>
          <div className="title  flex  items-center my-.5 text-xl flex-col p-3 ">
            {" "}
            <p>{product.title}</p>{" "}
          </div>
          <div className="description   flex  text-xl items-center my-.5 flex-col p-3 ">
            {" "}
            <p>{product.description}</p>
          </div>
          <div className="my-.5">
            <div className="flex gap-2 items-end items-center  ">
              <p className="font-bold text-xl mx-3">
                Rs.{Number(product.price) * 84}
              </p>
              <p className="line-through text-gray-700 mx-3">
                {oldprice(product.price, product.discountPercentage)}
              </p>
              <span className="text-xl text-orange-500 text-gray-700 mx-3">
                ({product.discountPercentage} % <b>OFF</b>)
              </span>
            </div>
          </div>
          <div className="flex items-center my-2  flex-col">
            <div className="reting flex    items-center   ">
              <span className="text-xl text-gray-70 0 font-bold">
                {`Rating--    ${product.rating}`}
              </span>
              <span className="material-symbols-outlined text-orange-400">
                star
              </span>
            </div>
          </div>
          <div className="border w-1/2 flex my-.5 items-center  flex-col p-3 ">
            <button
              onClick={() => {
                setwishlistreducer({ type: "post", payload: product });
              }}
              disabled={isInWishlist}
              className={`text-stone-50  px-3 py-1 w-1/2 border-slate-800 rounded-md bg-amber-600 border ${
                isInWishlist ? "opacity-50" : "hover:opacity-50"
              }`}
            >
              {isInWishlist ? "Added in wishlist" : "Add to Wishlist"}
            </button>
          </div>
          <div className="border w-1/2 flex my-.5 items-center  flex-col p-3 drop-shadow-2xl">
            <button
              onClick={() => {
                setcardreducer({ type: "post", payload: product });
              }}
              disabled={isInCard}
              className={`text-stone-50  px-3 py-1 w-1/2 border-slate-800 rounded-md bg-amber-600 border ${
                isInCard ? "opacity-50" : "hover:opacity-50"
              }`}
            >
              {isInCard ? "Addedd in card" : " Add to card"}
            </button>
          </div>
          <div className="buy border w-1/2 flex  items-center flex-col p-3 my-.5 drop-shadow-2xl  ">
            {" "}
            <button
              className="font-bold text-xl hover:opacity-50  px-3 py-1 w-1/2 border-slate-800 rounded-md bg-amber-600 border "
              onClick={payment}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
