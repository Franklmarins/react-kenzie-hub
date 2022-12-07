import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { StyledInput } from "../../Input/style";

const InputPassword = () => {
  const { register, errors } = useContext(UserContext);
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
