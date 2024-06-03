import { useNavigate } from "react-router-dom";
import { useCard } from "../../context/card.context";
import { useWishlist } from "../../context/wishlist.context";


export const Product = (product) => {
  
  product = product.product;
  const navigate = useNavigate();
  

  const array = product.images;
  const oldprice = (price, discount) => {
    return Number(
      ((Number(price) * 100) / (100 - Number(discount))) * 84
    ).toFixed(2);
  };
  const { setcardreducer, card, token } = useCard();
  const { setwishlistreducer, wishlist } = useWishlist();
  
  const findProductInWishlist = (wishlist, productId) =>
  {
     const flag=wishlist?.length>0?wishlist.some((prod) => prod._id === productId):false;
    return flag;
   }
  const isInWishlist = findProductInWishlist(wishlist, product._id);

  const findProductInCard = (card, productId) =>
    card?.some((prod) => prod._id === productId)
  const isInCard = findProductInCard(card, product._id);

  const apikey = "rzp_test_uuQeQyfPlAHtk0";
  const loadScript = (source) => {
      return new Promise((resolver) => {
        const script = document.createElement("script");
        script.src = source;
        script.onload = () => resolver(true);
        script.onerror = () => resolver(false);
        document.body.appendChild(script);
      });
    };
  
    const payment =async () => {
     
  
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


  return (
    <div className="mt-16 flex flex-row gap-4">
      <div className="flex flex-wrap gap-3 w-1/2 bg-cyan-50 ">
        {array?.length > 0 ? (
          array.map((url) => {
            return <img className="h-60 w-56" src={url} alt="imag"></img>;
          })
        ) : (
          <></>
        )}{" "}
      </div>
      <div>
        <div className="right flex flex-col items-center  border w-[40rem] bg-cyan-50 drop-shadow-md ">
          <div className="brand border  flex my-2 items-center font-bold text-xl flex-col  drop-shadow-2xl">
            {" "}
            <p>{product.brand}</p>{" "}
          </div>
          <div className="title  flex  items-center my-2 text-xl flex-col  ">
            {" "}
            <p>{product.title}</p>{" "}
          </div>
          <div className="description   flex  text-xl items-center  flex-col ">
            {" "}
            <p>{product.description}</p>
          </div>
          <div className="my-2">
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
          
            <button
              onClick={() => {
                setwishlistreducer({ type: "post", payload: product });
              }}
              disabled={isInWishlist}
              className={`text-stone-50  px-3 my-2 w-[10rem] h-[3rem] border-slate-800 rounded-md bg-amber-600 border ${
                isInWishlist ? "opacity-50" : "hover:opacity-50"
              }`}
            >
              {isInWishlist ? "Added in wishlist" : "Add to Wishlist"}
            </button>
          
          
            <button
              onClick={() => {
                setcardreducer({ type: "post", payload: product });
              }}
              disabled={isInCard}
              className={`text-stone-50  px-3 my-2 w-[10rem] h-[3rem]  border-slate-800 rounded-md bg-amber-600 border ${
                isInCard ? "opacity-50" : "hover:opacity-50"
              }`}
            >
              {isInCard ? "Addedd in card" : " Add to card"}
            </button>
          
          
            <button
              className="font-bold text-xl hover:opacity-50  px-3 my-2 w-[10rem] h-[3rem]  border-slate-800 rounded-md bg-amber-600 border "
              onClick={()=> {token?.length>0?payment()
            :navigate("/auth")
          console.log("payemenet button--")}}
            >
              Buy
            </button>
          
        </div>
      </div>
    </div>
  );
};
