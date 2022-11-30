import React from "react";

const InputContact = ({ errors, register }) => {
  return (
    <label>
      Contato
      <input
        type="text"
        placeholder="Digite o seu telefone"
        {...register("contact")}
      />
      {errors.contact?.message && <span>{errors.contact.message}</span>}
    </label>
  );
};

export default InputContact;
