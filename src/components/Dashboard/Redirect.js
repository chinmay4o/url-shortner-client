import React , { useEffect }from 'react';
import {useParams} from "react-router-dom"

const Redirect = () => {
const {code} = useParams();


async function redirect1() {
    console.log(code);
    const response = await fetch(`https://url-shortner4o.herokuapp.com/${code}` , {
        method : "GET", 
    });

const data = await response.json();
console.log(data);

    if (response.status !== 200) {
        alert("Error");
      } else {
          console.log("data" + data);
          window.location.href = data.longUrl;
        alert("success");
        //   history.push("/");
      }
}

useEffect(() => {
    redirect1();
}, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            
        </div>
    )
}

export default Redirect
