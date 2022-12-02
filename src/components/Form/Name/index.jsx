import React from "react";
import { StyledInput } from "../../Input/style";

const InputName = ({ errors, register }) => {
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
