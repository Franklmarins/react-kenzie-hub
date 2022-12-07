import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { StyledInput } from "../../Input/style";

const InputContact = () => {
  const { register, errors } = useContext(UserContext);

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
