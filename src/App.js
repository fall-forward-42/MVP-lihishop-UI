import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";
import UsersList from "./features/users/UsersList";
import UserSingle from "./features/users/UserSingle";
import ProductsList from "./features/products/ProductsList";
import CategoriesList from "./features/categories/CategoriesList";
import CartDetails from "./features/carts/CartDetails";
import OrderHistory from "./features/orders/OrderHistory";
import HeaderBar from "./components/HeaderBar";

function App() {
  const containerStyles = {
    width: "100%",
    maxWidth: "100%",
    padding: "0 20px", // Optional padding
    margin: "0 auto", // Optional center alignment
  };
  return (
    <div style={containerStyles}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
              <Route path="welcome" element={<Welcome />} />
              <Route path="single" element={<UserSingle />} />
              <Route path="userslist" element={<UsersList />} />
              <Route path="categories" element={<CategoriesList />} />
              <Route path="products" element={<ProductsList />} />
              <Route path="cart" element={<CartDetails />} />
              <Route path="orders" element={<OrderHistory />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
