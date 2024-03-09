import "./App.css";
import { Routes, Route } from "react-router-dom";

import UserRoles from "./components/private/UserRoles";

import LandingPage from "./pages/LandingPage";
import Home from "./components/private/Home";

import RequireAuth from "./components/private/RequireAuth";
import EmployeeRegister from "./components/private/EmployeeRegister";

import { Login } from "./components/public/Login";
import { Register } from "./components/public/Register";
import Layout from "./components/public/Layout";
import ProfilePage from "./components/public/pages/Profile";
import OrdersPage from "./components/public/pages/Orders";
import DrinksPage from "./components/public/pages/Drinks";
import OneDrink from "./components/public/pages/OneDrink";
import AboutUsPage from "./components/public/pages/AboutUs";
import ShoppingCartPage from "./components/public/pages/ShoppingCart";
import HomePage from "./components/public/pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="drink/:id" element={<OneDrink />} />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route path="shoppingCart" element={<ShoppingCartPage />} />
        {/*Hidden keys need here!*/}
        <Route path="register" element={<Register />} />
        <Route path="one-drink" element={<OneDrink />} />

        {/* protected routes  */}
        <Route element={<RequireAuth />}>
          <Route path="admin" element={<Home />} />
          <Route path="users/employee" element={<EmployeeRegister />} />
          <Route path="role" element={<UserRoles />} />
        </Route>

        {/*  <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/settings" element={<Settings />} /> 
      
*/}
        {/* other */}
      </Route>
    </Routes>
  );
}
