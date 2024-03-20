// Importando o React e o ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importando o componente App e o estilo CSS global
import App from "./App.tsx";
import "./index.css";

// Renderizando o componente App dentro do elemento com o id 'root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
