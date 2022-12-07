import React, { useContext } from "react";
import { StyledSelect } from "../../Select/style";
import { UserContext } from "../../../contexts/userContext";

const SelectModule = () => {
  const { register, errors } = useContext(UserContext);
  return (
    <label>
      Selecionar módulo
      <StyledSelect {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </StyledSelect>
      {errors.course_module?.message && (
        <span>{errors.course_module.message}</span>
      )}
    </label>
  );
};

export default SelectModule;
