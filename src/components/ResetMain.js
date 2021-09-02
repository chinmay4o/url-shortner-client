import React, { useState } from "react";
import {useHistory , useParams} from "react-router-dom";

const ResetMain = () => {
const {token} = useParams();
    const [info, setInfo] = useState({
        password: "",
        cpassword: "",
        resetToken : ""
    })
  async function resetPass(e) {
      e.preventDefault();
      info.resetToken = token;
   const response = await fetch("https://url-shortner4o.herokuapp.com/resetmain" , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info)
   });

   if(response.status !== 200){
       alert("failure")
   } else {
       alert("success");
   }
  }

  return (
    <div className="parent">
      <div className="container shadow p-5 form1">
        <h2 className="mb-5">Reset Your Password</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setInfo({ ...info, cpassword: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn1"
            onClick={resetPass}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetMain;
