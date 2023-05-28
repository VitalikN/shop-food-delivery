import { Navigate, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import ShopPage from "../pages/ShopPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
