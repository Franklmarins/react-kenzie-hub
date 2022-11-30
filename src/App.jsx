import { RountesMain as Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
