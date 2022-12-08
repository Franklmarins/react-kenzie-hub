import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  formSchemaLogin,
  formSchemaRegister,
} from "../components/Form/formSchema";
import { useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const local = useLocation();
  const navigate = useNavigate();

  const [addTech, setAddTech] = useState(false);
  const [user, setUser] = useState([]);
  const [renderDashPage, setRenderDashPage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api
        .get("profile", { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => {
          localStorage.clear();
        });
      setRenderDashPage(true);
    } else {
      navigate("/login");
      setRenderDashPage(false);
    }
  }, [addTech]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(
    local.pathname === "/login"
      ? {
          resolver: yupResolver(formSchemaLogin),
        }
      : {
          resolver: yupResolver(formSchemaRegister),
        }
  );

  const submit = (data) => {
    if (local.pathname === "/login") {
      toast.promise(
        api.post("/sessions", data).then((response) => {
          return response.data;
        }),
        {
          pending: {
            render() {
              return "Logando...";
            },
          },
          success: {
            render({ data }) {
              localStorage.clear();
              localStorage.setItem("token", data.token);
              localStorage.setItem("userID", data.user.id);
              reset();
              navigate("/dashboard");
              return `Olá ${data.user.name}, seja bem-vindo! 👌`;
            },
          },
          error: {
            render() {
              return "Email e/ou senha inválidos! 🤯";
            },
          },
        }
      );
    } else {
      toast.promise(
        api.post("users", data).then((response) => {
          return response.data;
        }),
        {
          pending: {
            render() {
              return "Cadastrando...";
            },
          },
          success: {
            render() {
              navigate("/login");
              return "Cadastro realizado com sucesso!";
            },
          },
          error: {
            render() {
              return "E-mail já existe";
            },
          },
        }
      );
    }
  };

  return (
    <UserContext.Provider
      value={{
        submit,
        errors,
        register,
        handleSubmit,
        reset,
        local,
        user,
        renderDashPage,
        addTech,
        setAddTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
