import React from "react";
import { StyledInput } from "../../Input/style";

const InputPassword = ({ errors, register }) => {
  return (
    <label>
      Senha
      <StyledInput
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      {errors.password?.message && <span>{errors.password.message}</span>}
    </label>
  );
};

export default InputPassword;
