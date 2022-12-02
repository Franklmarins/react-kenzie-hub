import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Main from "../../components/Main";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [renderPage, setRenderPage] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      setRenderPage(false);
      navigate("/login");
    } else {
      setRenderPage(true);
    }
  }, []);

  if (renderPage) {
    return (
      <>
        <Nav />
        <Header />
        <Main />
      </>
    );
  }
};
