import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./about.css";
import { useSelector, useDispatch } from "react-redux";
import { rootUser1 } from "../../actions/index.js";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer , toast} from "react-toastify";

const About = ({ userData, setUserData, data1 }) => {
    ///notify user
    function notify() {
        return toast("user Authenticated");
    }
  // const [userData , setUserData] = useState({});
  const history = useHistory();
  //redux mystate
  const rootUser = useSelector((state) => state.changeUser);
  const dispatch = useDispatch();
  async function auth1() {
    try {
      const res = await fetch("http://localhost:5002/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData({ ...data });
      dispatch(rootUser1(data));
      console.log(userData);
      console.log(data1);


      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }else{
        notify();
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  }

  //print user url_shortner
  function printUserUrls(ele, index) {
    return (
       
      <div key={index} className="div3 mt-2">
       Long Url = <span className="linkColour">{ele.longUrl}</span>
        <br />
       Short Url = <span className="linkColour">{ele.shorten}</span>
      </div>
    );
  }

  useEffect(() => {
    auth1();
  }, []);

  return (
    <div className="shadow-lg about-parent m-3 p-5">
     <ToastContainer />
      {/* <h2>Welcome {userData ? userData.email : <h2> Loading...</h2> }</h2> */}
      {console.log(rootUser)}
      <h2>Welcome {rootUser ? rootUser.name : <h2> Loading...</h2>}</h2>
      <div className="row">
        <div className="col-12 col-md-6 div1">
        <h6 className="fw-bold fs-5">Find your previous urls here</h6>
          {rootUser.myUrls ? rootUser.myUrls.map(printUserUrls) : "No URLs available"}
        </div>
        {/* <div className="col-12 col-md-6 div2"></div> */}
      </div>
    </div>
  );
};

export default About;
