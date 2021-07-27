import React , { useEffect }from 'react';
import {useParams} from "react-router-dom"

const Redirect = () => {
const {code} = useParams();

async function redirect() {
    console.log(code);
    const response = await fetch(`http://localhost:5002/${code}` , {
        // mode: "no-cors",
        method : "GET",    
        // credentials: "include",
        // headers: {"Content-Type": "application/json"}  
    });

    if (response.status !== 200) {
        alert("Error");
      } else {
        alert("success");
        //   history.push("/");
      }
}

useEffect(() => {
    redirect();
    // return () => {
    //     cleanup
    // }
}, []);
    return (
        <div>
            
        </div>
    )
}

export default Redirect
