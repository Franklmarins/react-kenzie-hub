import React from "react";
import { useContext } from "react";
import { TechContext } from "../../../contexts/techContext";
import Button from "../../Button";
import { StyledInput } from "../../Input/style";
import { StyledSelect } from "../../Select/style";
import { StyledModalForm } from "./style";

const ModalForm = ({ typeModal }) => {
  const { register, handleSubmit, submitTech, deleteTech, updateTech } =
    useContext(TechContext);

  const id = localStorage.getItem("techId");

  return (
    <>
      {typeModal === "add" ? (
        <StyledModalForm onSubmit={handleSubmit(submitTech)}>
          <label>
            Nome
            <StyledInput
              type="text"
              placeholder="Digite a tecnologia"
              {...register("title")}
            />
          </label>
          <label>
            Selecionar status
            <StyledSelect {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </StyledSelect>
          </label>
          <Button
            type="submit"
            name="Cadastrar Tecnologia"
            buttonStyle="primary-solid"
          ></Button>
        </StyledModalForm>
      ) : (
        <StyledModalForm
          onSubmit={handleSubmit((event) =>
            updateTech(id, { status: event.status })
          )}
        >
          <label>
            Nome do projeto
            <StyledInput
              disabled={true}
              type="text"
              placeholder="Digite a tecnologia"
              {...register("title")}
            />
          </label>
          <label>
            Status
            <StyledSelect {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </StyledSelect>
          </label>
          <div>
            <Button
              type="submit"
              name="Salvar alterações"
              buttonStyle="primary-solid"
            />
            <Button
              onClick={() => deleteTech(id)}
              type="button"
              name="Excluir"
              buttonStyle="grey-solid-2"
            />
          </div>
        </StyledModalForm>
      )}
    </>
  );
};

export default ModalForm;
