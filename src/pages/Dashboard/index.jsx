import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Main from "../../components/Main";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import Modal from "../../components/Modal";
import { TechContext } from "../../contexts/techContext";

export const Dashboard = () => {
  const { renderDashPage } = useContext(UserContext);
  const { showModal, typeModal } = useContext(TechContext);

  if (renderDashPage) {
    return (
      <>
        {showModal ? <Modal typeModal={typeModal} /> : null}
        <Nav />
        <Header />
        <Main />
      </>
    );
  }
};
