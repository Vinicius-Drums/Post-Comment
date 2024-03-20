// Importando o React e o componente PostWithComments
import React from "react";
import PostWithComments from "./components/PostWithComments";

// Importando o estilo CSS associado ao aplicativo
import "./App.css";

// Definindo o componente funcional App
const App: React.FC = () => {
  return (
    <div>
      {/* Renderizando o componente PostWithComments */}
      <PostWithComments />
    </div>
  );
};

// Exportando o componente App
export default App;
