import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { formSchemaModal } from "../components/Modal/ModalForm/formSchemaModal";
import { api } from "../services/api";
import { UserContext } from "./userContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { addTech, setAddTech } = useContext(UserContext);
  const [typeModal, setTypeModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(formSchemaModal) });

  const submitTech = (data) => {
    toast.promise(
      api
        .post("/users/techs", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          return response.data;
        }),
      {
        pending: {
          render() {
            return "Adicionando...";
          },
        },
        success: {
          render() {
            reset();
            setAddTech(!addTech);
            setShowModal(false);
            return "Tecnologia adicionada!";
          },
        },
        error: {
          render() {
            return "Você já tem uma tecnologia com esse nome, edite ela!";
          },
        },
      }
    );
  };

  const updateTech = (id, data) => {
    toast.promise(
      api
        .put(`/users/techs/${id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          return response;
        }),
      {
        pending: {
          render() {
            return "Atualizando...";
          },
        },
        success: {
          render() {
            reset();
            setAddTech(!addTech);
            setShowModal(false);
            return "Tecnologia atualizada!";
          },
        },
        error: {
          render() {
            return "Não foi possível atualizar!";
          },
        },
      }
    );
  };

  const deleteTech = (id) => {
    toast.promise(
      api
        .delete(`/users/techs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          return response.data;
        }),
      {
        pending: {
          render() {
            return "Excluindo...";
          },
        },
        success: {
          render() {
            setAddTech(!addTech);
            setShowModal(false);
            return "Tecnologia excluida!";
          },
        },
        error: {
          render() {
            return "Não foi possível excluir.";
          },
        },
      }
    );
  };

  const addModal = ({ target }) => {
    if (target.innerText === "+") {
      reset();
      setTypeModal("add");
    } else {
      setTypeModal("edit");
    }
    setShowModal(true);
  };
  const removeModal = () => {
    setShowModal(false);
  };

  return (
    <TechContext.Provider
      value={{
        addModal,
        removeModal,
        showModal,
        register,
        handleSubmit,
        errors,
        submitTech,
        setTypeModal,
        typeModal,
        setValue,
        deleteTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
