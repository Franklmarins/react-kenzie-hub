import React from "react";

export const InputName = ({ errors, register }) => {
  return (
    <label>
      Nome
      <input
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      {errors.name?.message && <span>{errors.name.message}</span>}
    </label>
  );
};
