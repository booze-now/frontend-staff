import "./App.css";
import Admin from "./components/private/Admin";
import EmployeeRegister from "./components/private/EmployeeRegister";
import Items from "./components/private/Items";
import UserRoles from "./components/private/UserRoles";
import Layout from "./components/public/Layout";
import { Login } from "./components/public/Login";
import { Register } from "./components/public/Register";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* protected routes  */}
        <Route path="/" element={<Admin />} />
        <Route path="/items" element={<Items />} />
        <Route path="/employee" element={<EmployeeRegister />} />
        <Route path="/role" element={<UserRoles />} />

        {/*  <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/settings" element={<Settings />} /> 
      
*/}
        {/* other */}
      </Route>
    </Routes>
  );
}
