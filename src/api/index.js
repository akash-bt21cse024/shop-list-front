import axios from "axios";

const productUrl = "https://shop-list-1-r908.onrender.com/api/products";
export const getallproduct = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(productUrl);

    return data;
  } catch (err) {
    console.log("error occured", err);
  }
};

const wishlistUrl = "https://shop-list-1-r908.onrender.com/api/wishlist";
export const getallwishlist = async (userid) => {
  try {
    
   
    const  {data : {data}} = await axios.get(`${wishlistUrl}/${userid}`
      
    );
    
    
    return data;
  } catch (err) {
    console.log("error occured", err);
  }
};

export const postwishlist = async (obj) => {
  try {
    await axios.post(wishlistUrl, {userid:obj.userid,product:obj.product});
    
  } catch (err) {
    console.log("error occured", err);
  }
};
export const deletewishlist = async ({userid,productid}) => {
  try {
    
     await axios.delete(`${wishlistUrl}/${userid}+${productid}`);
  } catch (err) {
    console.log("error occured", err);
  }
};

const cardUrl = "https://shop-list-1-r908.onrender.com/api/card";

export const getallcard = async (userid) => {
  try {
    console.log("usercard---",{userid})
   
    const  {data : {data}} = await axios.get(`${cardUrl}/${userid}`
      
    );
    
    console.log("dar--",data);

    return data;
  } catch (err) {
    console.log("error occured", err);
  }
};

export const postcard = async ({userid,product}) => {
  console.log("user--",userid,"product--",product)
  try {
    await axios.post(cardUrl, {userid,product});
    
  } catch (err) {
    console.log("error occured", err);
  }
};
export const deletecard = async ({userid,productid}) => {
  try {
    
    await axios.delete(`${cardUrl}/${userid}+${productid}`);
 } catch (err) {
   console.log("error occured", err);
 }
};
