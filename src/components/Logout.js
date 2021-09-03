import React from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  const history = useHistory();

  // react toastify
  const notify = () => {
    toast("logout successful");
  };
  const notify1 = (err) => {
    toast(err);
  };

  async function logoutUser(e) {
    e.preventDefault();
    const response = await fetch(
      "https://url-shortner4o.herokuapp.com/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      }
    );

    console.log("chinmay");

    if (response.status !== 200) {
      return notify1("OOPS unable to logout");
    } else {
      notify();
      return history.push("/login");
    }
  }

  return (
    <div className="ms-3">
      <ToastContainer />
      <button className="btn btn-primary" onClick={(e) => logoutUser(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
