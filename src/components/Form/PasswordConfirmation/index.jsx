import React from "react";
import { StyledInput } from "../../Input/style";

const InputPassConfirmation = ({ errors, register }) => {
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
