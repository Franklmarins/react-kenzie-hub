import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { StyledInput } from "../../Input/style";

const InputPassConfirmation = () => {
  const { register, errors } = useContext(UserContext);
  return (
    <label>
      Confirmar senha
      <StyledInput
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("passwordConfirmation")}
      />
      {errors.passwordConfirmation?.message && (
        <span>{errors.passwordConfirmation.message}</span>
      )}
    </label>
  );
};

export default InputPassConfirmation;
