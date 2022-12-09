import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Main from "../../components/Main";
import { useContext } from "react";
import Modal from "../../components/Modal";
import { TechContext } from "../../contexts/techContext";

export const Dashboard = () => {
  const { showModal, typeModal } = useContext(TechContext);

  return (
    <>
      {showModal ? <Modal typeModal={typeModal} /> : null}
      <Nav />
      <Header />
      <Main />
    </>
  );
};
