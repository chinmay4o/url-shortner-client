import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [info, setInfo] = useState({
    email: "",
    message: "",
  });

    // react toastify
    const notify = () => {
      toast("message sent");
    };
    const notify1 = (err) => {
      toast(err);
    };

  async function sendMail(e) {
    e.preventDefault();
    const response = await fetch("https://url-shortner4o.herokuapp.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });

    if (response.status !== 200) {
     return notify1("Error sending message, Please try sending again");
    } else {
     return notify();
    }
  }

  return (
    <div className="parent">
    <ToastContainer />
      <div className="container shadow p-5 form1">
        <h2 className="mb-4">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
              />
              <label htmlFor="exampleInputEmail1"
              style={{"color" : "#000" }}
              >Email</label>
            </div>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">message</label>
            <div class="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "150px" }}
                onChange={(e) => {
                  console.log(info);
                  setInfo({ ...info, message: e.target.value });
                }}
              ></textarea>
              <label htmlFor="floatingTextarea2" 
               style={{"color" : "#000" }}
              >Your Message</label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn1"
            onClick={sendMail}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
