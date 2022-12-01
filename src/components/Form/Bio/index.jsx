import React from "react";
import { StyledInput } from "../../Input/style";

const InputBio = ({ errors, register }) => {
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
