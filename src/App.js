import "./App.css";
import LandingPage from "./pages/LandingPage";
import PublicHome from "./components/public/PublicHome";
import Home from "./components/private/Home";
import EmployeeRegister from "./components/private/EmployeeRegister";
import UserRoles from "./components/private/UserRoles";
import Layout from "./components/public/Layout";
import { Login } from "./components/public/Login";
import { Register } from "./components/public/Register";
import RequireAuth from "./components/private/RequireAuth";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}

        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<PublicHome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* protected routes  */}
        <Route element={<RequireAuth/>}>
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
