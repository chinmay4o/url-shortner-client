import React, { useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [longUrl, setLongUrl] = useState("");

  async function urlShortner(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5002/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl }),
    });

    if (response.status !== 200) {
      alert("Error");
    } else {
        
      alert("success");
      //   history.push("/");
    }
  }
  return (
    <div className="dashboard">
      {/* <div className="parent"> */}
        <div className="container shadow form1">
          <h2 className="mb-5">shorten your URL</h2>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                paste your url
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => setLongUrl(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn1"
              onClick={urlShortner}
            >
              shorten
            </button>
          </form>
          <div style={{ display: "flex" }}>
            <p className="link1">
              {" "}
              <Link to="/register">Don't have an account ? </Link>
            </p>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Dashboard;
