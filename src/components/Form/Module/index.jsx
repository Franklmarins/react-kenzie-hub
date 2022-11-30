import React from "react";

const SelectModule = ({ errors, register }) => {
  return (
    <label>
      Selecionar módulo
      <select {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      {errors.course_module?.message && (
        <span>{errors.course_module.message}</span>
      )}
    </label>
  );
};

export default SelectModule;
