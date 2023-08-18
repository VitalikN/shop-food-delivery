import axios from 'axios';

axios.defaults.baseURL = 'https://food-delivery-g9zn.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3003/api';

export const fetchShops = async () => {
  const { data } = await axios.get(`/products`);
  return data;
};

export const fetchHistoryOrders = async () => {
  const { data } = await axios.get(`/orders`);
  return data;
};

export const addShopsOrders = async dataOrder => {
  const { data } = await axios.post(`/orders`, dataOrder);
  return data;
};

// import axios from 'axios';
