import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../../api/axios";
const LOGIN_URL = "/login";

//console.log(LOGIN_URL);
export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setAuth } = useContext(AuthContext);
  const userEmailRef = useRef();
  const errRef = useRef();

  const [email, setUserEmail] = useState("admin@boozenow.hu");
  const [password, setPassword] = useState("Bo0ze-nOOOw!");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  console.log(email, password);

  useEffect(() => {
    userEmailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(email, password);
      //const cfr = await axios.get("/sanctum/csrf-cookie");
      const response = await axios.post(
        LOGIN_URL,
        { email: email, password: password},
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          withCredentials: true,
        }
      );
      // await axios.get("api/user");
      console.log(response?.data);
      console.log(response);
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth(email, password, roles, accessToken);
      setUserEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrMsg("Invalid Username or Password");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else if (err.response?.status === 500) {
        setErrMsg("Internal Server Error");
      } else if (err.response?.status === 405) {
        setErrMsg("Method Not Allowed");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          ref={userEmailRef}
          autoComplete="off"
          onChange={(e) => setUserEmail(e.target.value)}
          value={email}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </section>
  );
}
