import React from "react";

const InputPassConfirmation = ({ errors, register }) => {
  return (
    <label>
      Confirmar senha
      <input
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
