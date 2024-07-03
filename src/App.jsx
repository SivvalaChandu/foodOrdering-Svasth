import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from "./components/Signup";

function App() {
  const showsign = useSelector((store) => store.sign.sign);
  return (
    <>
      {showsign && <SignUp />}
      <Header />
      <Outlet />
    </>
  );
}

export default App;
