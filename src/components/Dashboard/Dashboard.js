import React, { useState, useEffect } from "react";
import "./dashboard.css";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dash from "../images/dash.svg";


const Dashboard = ({ setUserData, userData, data1, setData1 }) => {
  const history = useHistory();
  const [longUrl, setLongUrl] = useState("");
  const [show, setShow] = useState("none");
  //toastify
  const notify = () => toast("Yay! link shortned");

  //authenticating user
  async function authenticate1() {
    const response = await fetch(
      "https://url-shortner4o.herokuapp.com/dashboard",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      }
    );

    if (response.status === 200) {
      const user = await response.json();
      console.log(user);
      //  notify1();
    } else {
      history.push("/login");
    }
  }

  //on submit handler creating url short link
  async function urlShortner(e) {
    e.preventDefault();
    const response = await fetch(
      "https://url-shortner4o.herokuapp.com/shorten",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl }),
      }
    );

    const data = await response.json();
    console.log(data);
    setData1(data);
    console.log(data1);
    if (response.status !== 200) {
      return alert("Error");
    }
    setShow("block");
    updateUserProfile(data);
    notify();
  }

  // patch request to update user profile
  async function updateUserProfile(dd) {
    const response = await fetch(
      "https://url-shortner4o.herokuapp.com/updates",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: userData._id,
          shortUrl: dd.shortUrl,
          longUrl: dd.longUrl,
        }),
      }
    );

    if (response.status === 200) {
      const da = await response.json();
      console.log(da);
      // notify();
    }
  }

  useEffect(() => {
    authenticate1();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="dashboard-parent">
      <div className="dashboard">
        <div className="dashboard-div1">
        <h2 className="mb-5">Shorten your URL</h2>
        <form className="dashboard-form">
          <div>
            <label for="exampleInputEmail1" className="form-label">
              Paste your URL
            </label>
            <input
              type="text"
              className="form-control input-bor"
              placeholder="put your URl here"
              id="exampleInputEmail1"
              onChange={(e) => setLongUrl(e.target.value)}
            />
          </div>
           {/* providing data to screen shortuurl  */}
          <div className="resultUrl" style={{ display: show }}>
            <p>{data1 ? data1.shortUrl : "chinmay"}</p>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn1"
            onClick={urlShortner}
          >
            shorten
          </button>
          <ToastContainer />
        </form>
        </div>

        <div className="dashboard-div2">
          <img src={dash} alt="hero" className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
