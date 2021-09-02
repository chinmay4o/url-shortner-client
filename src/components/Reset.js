import React, { useState } from "react";
import {Link} from "react-router-dom";

const Reset = () => {
  const [email, setEmail] = useState("");

  async function resetLink(e) {
    e.preventDefault();
    const response = await fetch("https://url-shortner4o.herokuapp.com/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });


    if (response.status !== 200) {
        alert("Error");
      } else {
        alert("success");
        // history.push("/");
      }    
  }

  return (
    <div className="parent">
      <div className="container shadow p-5 form1">
        <h2 className="mb-5">Enter Your Mail Here</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn1"
            onClick={resetLink}
          >
            Send Me Reset Link
          </button>
        </form>

        <p
        className="link1"
        >
          {" "}
          <Link to="/login"> Already have an account ?</Link>
        </p>
      </div>
    </div>
  );
};

export default Reset;
