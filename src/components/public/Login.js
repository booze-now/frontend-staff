import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";

import axios from "../../api/axios";
const LOGIN_URL = "/login";

//console.log(LOGIN_URL);
export function Login() {
  const { setAuth } = useContext(AuthContext);
  const userEmailRef = useRef();
  const errRef = useRef();

  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
        
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth(email, password, roles, accessToken);
      setUserEmail("");
      setPassword("");
      setSuccess(true);
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
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
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
              {/*put router link here*/}
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
