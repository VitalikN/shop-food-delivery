import axios from "axios";

axios.defaults.baseURL = "https://food-delivery-g9zn.onrender.com/api/";
export const fetchShops = async () => {
  const { data } = await axios.get(`/products`);
  return data;
};

// export const fetchShopsOrders = async () => {
//   const { data } = await axios.get(`/orders`);
//   return data;
// };

// export const addShopsOrders = async () => {
//   const { data } = await axios.post(`/orders`);
//   return data;
// };
