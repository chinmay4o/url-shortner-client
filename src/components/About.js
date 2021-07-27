import React , { useState , useEffect}from "react";
import {useHistory} from "react-router-dom";

const About = () => {
const [userData , setUserData] = useState({});
const history = useHistory();

async function auth1 () {
    try {
        const res = await fetch('http://localhost:5002/about', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);
        setUserData({...data});

        if (res.status !== 200) {
            const error = new Error(res.error);
            throw error;
        }

    } catch (err) {
        console.log(err);
        history.push('/login');
    }
}

useEffect(() => {
    auth1();
} , [])


  return (
    <div className="parent p-3">
      <div
        className="container p-5 shadow-lg"
        style={{
          height: "500px",
          display: "grid",
          "justify-items": "center",
          background: "#212529",
          color: "#fff",
        }}
      >
        <h2>Welcome to about page</h2>
        {userData ?  <h2>{userData.email}</h2> : <h2> Loading...</h2> }
      </div>
    </div>
  );
};

export default About;
