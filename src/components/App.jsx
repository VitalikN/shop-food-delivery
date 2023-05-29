import { Navigate, Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import ShopPage from '../pages/ShopPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import { useEffect, useState } from 'react';
import { fetchShops } from 'service/api';

export const App = () => {
  const [shops, setShops] = useState([]);
  const [order, setOrder] = useState();

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

  const handleAdd = productId => {
    const [addProduct] = shops.filter(({ _id }) => _id === productId);
    const updateProduct = { ...addProduct, count: 1 };

    setOrder(updateProduct);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<ShopPage shops={shops} handleAdd={handleAdd} />}
          />
          <Route path="/cart" element={<ShoppingCartPage order={order} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
