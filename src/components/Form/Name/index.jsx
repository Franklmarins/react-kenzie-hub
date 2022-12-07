import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { StyledInput } from "../../Input/style";

const InputName = () => {
  const { register, errors } = useContext(UserContext);
  return (
    <label>
      Nome
      <StyledInput
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      {errors.name?.message && <span>{errors.name.message}</span>}
    </label>
  );
};

export default InputName;
