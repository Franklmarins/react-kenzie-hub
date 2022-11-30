import React from "react";
import { StyledInput } from "../../Input";

const InputEmail = ({ errors, register }) => {
  return (
    <label>
      Email
      <StyledInput
        type="text"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      {errors.email?.message && <span>{errors.email.message}</span>}
    </label>
  );
};

export default InputEmail;
