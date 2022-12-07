import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Main from "../../components/Main";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const Dashboard = () => {
  const { renderDashPage } = useContext(UserContext);

  if (renderDashPage) {
    return (
      <>
        <Nav />
        <Header />
        <Main />
      </>
    );
  }
};
