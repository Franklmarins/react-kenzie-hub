import React from "react";
import Logo from "./../../assets/Logo.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <img src={Logo} alt="Kenzie hub kenzie" />
      <Link to="/login">Login</Link>
      <Link to="/register">Registrar</Link>
    </div>
  );
};
