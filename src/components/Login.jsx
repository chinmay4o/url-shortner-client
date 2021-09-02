import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useHistory();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  // react toastify
  const notify = () => {
    toast("login successfull");
  };
  const notify1 = (err) => {
    toast(err);
  };

  async function userLogin(e) {
    e.preventDefault();
    const response = await fetch("https://url-shortner4o.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
      // mode: "cors",
      credentials: "include",
    });

    if (response.status !== 200) {
      notify1("invalid details");
    } else {
      notify();
      history.push("/dashboard");
    }
  }

  return (
    <div className="parent">
      <ToastContainer />
      <div className="container shadow form1">
        <h2 className="mb-5">Login Here</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn1"
            onClick={userLogin}
          >
            Login
          </button>
        </form>
        <div style={{ display: "flex" }}>
          <p className="link1">
            {" "}
            <Link to="/reset">Forgot Password ?</Link>
          </p>
          <p className="link1">
            {" "}
            <Link to="/register">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
