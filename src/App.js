import React , { useState }from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import About from "./components/About/About";
import Reset from "./components/Reset";
import ResetMain from "./components/ResetMain";
import Dashboard from "./components/Dashboard/Dashboard";
import Redirect from "./components/Dashboard/Redirect";
import {
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [userData , setUserData] = useState({});
  const [data1, setData1] = useState({});
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About userData={userData} setUserData={setUserData} data1={data1}/>
        </Route>
        <Route path="/reset">
          <Reset />
        </Route>
        <Route path="/resetmain/:token">
          <ResetMain />
        </Route>
        <Route path="/dashboard">
          <Dashboard userData={userData} setUserData={setUserData} setData1={setData1} data1={data1}/>
        </Route>
        <Route path="/:code">
          <Redirect />
        </Route>
        <Route path="/*">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
