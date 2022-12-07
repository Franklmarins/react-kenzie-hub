import React from "react";
import { useContext } from "react";
import { TechContext } from "../../contexts/techContext";
import ModalForm from "./ModalForm";
import { StyledModal } from "./style";

const Modal = ({ typeModal }) => {
  const { removeModal } = useContext(TechContext);
  return (
    <>
      {typeModal === "add" ? (
        <StyledModal>
          <div>
            <div>
              <h3>Cadastrar Tecnologia</h3>
              <button onClick={removeModal} type="button">
                X
              </button>
            </div>
            <ModalForm typeModal="add" />
          </div>
        </StyledModal>
      ) : (
        <StyledModal>
          <div>
            <div>
              <h3>Tecnologia Detalhes</h3>
              <button onClick={removeModal} type="button">
                X
              </button>
            </div>
            <ModalForm typeModal="edit" />
          </div>
        </StyledModal>
      )}
    </>
  );
};

export default Modal;
