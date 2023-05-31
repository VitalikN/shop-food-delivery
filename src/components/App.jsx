import { Navigate, Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import ShopPage from '../pages/ShopPage';
import { useEffect, useState } from 'react';
import { fetchShops } from 'service/api';
import ShoppingCartPage from 'pages/ShoppingCartPage/ShoppingCartPage';

export const App = () => {
  const [shops, setShops] = useState([]);
  const [order, setOrder] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [loading, setLoading] = useState([]);
  const [countOrder, setCountOrder] = useState([]);

  useEffect(() => {
    const products = async () => {
      try {
        const shops = await fetchShops();
        setShops(shops);
      } catch (error) {
        console.log(error);
      }
    };
    products();
  }, []);

  const handleIncrement = id => {
    const res = (countOrder.length > 0 ? countOrder : order).map(product => {
      if (product._id === id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
    setCountOrder(res);
  };

  const handleDecrement = id => {
    const res = (countOrder.length > 0 ? countOrder : order).map(product => {
      if (product._id === id) {
        return { ...product, count: product.count - 1 };
      }
      return product;
    });
    setCountOrder(res);
  };

  const handleAdd = productId => {
    const [addProduct] = shops.filter(({ _id }) => _id === productId);
    const updateProduct = { ...addProduct, count: 1 };

    shops.filter(({ _id }) => _id === productId)
      ? // handleIncrement(productId);
        setCountOrder(
          prev => [...prev, updateProduct],
          handleIncrement(productId)
        )
      : setOrder(prev => [...prev, updateProduct]);
  };
  console.log(order);
  console.log(countOrder);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<ShopPage shops={shops} handleAdd={handleAdd} />}
          />
          <Route
            path="/cart"
            element={
              <ShoppingCartPage
                order={order}
                countOrder={countOrder}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
