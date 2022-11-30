import React from "react";

const InputBio = ({ errors, register }) => {
  return (
    <label>
      Bio
      <input type="text" placeholder="Fale sobre você" {...register("bio")} />
      {errors.bio?.message && <span>{errors.bio.message}</span>}
    </label>
  );
};

export default InputBio;
