import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { StyledInput } from "../../Input/style";

const InputEmail = () => {
  const { register, errors } = useContext(UserContext);
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
