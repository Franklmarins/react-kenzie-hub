import React from "react";
import { StyledInput } from "../../Input/style";

const InputContact = ({ errors, register }) => {
  return (
    <label>
      Contato
      <StyledInput
        type="text"
        placeholder="Digite o seu telefone"
        {...register("contact")}
      />
      {errors.contact?.message && <span>{errors.contact.message}</span>}
    </label>
  );
};

export default InputContact;
