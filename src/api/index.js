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
export const getallwishlist = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(wishlistUrl);

    return data;
  } catch (err) {
    console.log("error occured", err);
  }
};

export const postwishlist = async (wishlist) => {
  try {
    await axios.post(wishlistUrl, wishlist);
    
  } catch (err) {
    console.log("error occured", err);
  }
};
export const deletewishlist = async (product) => {
  try {
     await axios.delete(wishlistUrl + "/" + product.id);
  } catch (err) {
    console.log("error occured", err);
  }
};

const cardUrl = "https://shop-list-1-r908.onrender.com/api/card";

export const getallcard = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(cardUrl);

    return data;
  } catch (err) {
    console.log("error occured", err);
  }
};

export const postcard = async (wishlist) => {
  try {
     await axios.post(cardUrl, wishlist);
  } catch (err) {
    console.log("error occured", err);
  }
};
export const deletecard = async (product) => {
  try {
     await axios.delete(cardUrl + "/" + product.id);
  } catch (err) {
    console.log("error occured", err);
  }
};
