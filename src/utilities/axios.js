import axios from "axios";

export const getCart = async (id) => {
  try {
    const response = await axios({ url: `/api/carts/${id}` });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const logIn = async (username, password) => {
  try {
    const response = await axios({
      url: "/api/auth/login",
      method: "POST",
      data: { username, password },
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const getCartItems = async (cartId) => {
  try {
    const response = await axios({ url: `/api/cart-items/${cartId}` });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const addToCartItems = async (cart, id, quantity) => {
  try {
    const response = await axios({
      url: "/api/cart-items",
      method: "POST",
      data: {
        cart_id: cart.cart_id,
        product_id: id,
        quantity: quantity,
      },
    });
    return response.data.cart_id;
  } catch (err) {
    throw err.response.data;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios({ url: `/api/products/${id}` });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const addToOrder = async (user_id, total, status) => {
  try {
    const response = await axios({
      url: `/api/order`,
      method: "POST",
      data: { total, status, user_id },
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
