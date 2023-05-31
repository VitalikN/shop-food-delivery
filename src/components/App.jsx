import { Navigate, Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import ShopPage from '../pages/ShopPage';
import { useEffect, useState } from 'react';
import { fetchShops } from 'service/api';
import ShoppingCartPage from 'pages/ShoppingCartPage/ShoppingCartPage';

export const App = () => {
  const [shops, setShops] = useState([]);

  const [countOrder, setCountOrder] = useState(
    JSON.parse(localStorage.getItem('countOrder')) || []
  );
  useEffect(() => {
    localStorage.setItem('countOrder', JSON.stringify(countOrder));
  }, [countOrder]);

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
    const res = countOrder.map(product => {
      if (product._id === id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
    setCountOrder(res);
  };

  const handleDecrement = id => {
    const res = countOrder.map(product => {
      if (product._id === id) {
        if (product.count === 1) {
          return product;
        }
        return { ...product, count: product.count - 1 };
      }
      return product;
    });
    setCountOrder(res);
  };

  const handleAdd = productId => {
    const [addProduct] = shops.filter(({ _id }) => _id === productId);
    const updateProduct = { ...addProduct, count: 1 };
    setCountOrder(prev => [...prev, updateProduct]);
  };
  const isDisabled = id => {
    return countOrder.some(({ _id }) => _id === id);
  };
  const deleteProduct = id => {
    const productDelete = countOrder.filter(({ _id }) => _id !== id);
    setCountOrder(productDelete);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <ShopPage
                shops={shops}
                handleAdd={handleAdd}
                isDisabled={isDisabled}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCartPage
                countOrder={countOrder}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                deleteProduct={deleteProduct}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
