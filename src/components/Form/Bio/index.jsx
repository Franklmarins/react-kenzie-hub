import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { StyledInput } from "../../Input/style";

const InputBio = () => {
  const { register, errors } = useContext(UserContext);
  return (
    <label>
      Bio
      <StyledInput
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
      />
      {errors.bio?.message && <span>{errors.bio.message}</span>}
    </label>
  );
};

export default InputBio;
