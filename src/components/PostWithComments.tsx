// Importando o React e outros módulos necessários
import React, { useState } from "react";

// Definindo o tipo para os comentários
type Comment = {
  id: number;
  text: string;
};

// Definindo o tipo de estado para o componente
type PostWithCommentsState = {
  comments: Comment[];
};

// Importando a imagem usando o caminho relativo
import postImage from "../imagens/Virada23-24.jpeg";

// Definindo o componente funcional React
const PostWithComments: React.FC = () => {
  // Inicializando o estado do componente com um array vazio de comentários
  const [state, setState] = useState<PostWithCommentsState>({
    comments: [],
  });

  // Função para adicionar um novo comentário ao estado
  const addComment = (text: string) => {
    // Criando um novo comentário com um ID único
    const newComment: Comment = {
      id: state.comments.length + 1,
      text,
    };

    // Atualizando o estado para incluir o novo comentário
    setState((prevState) => ({
      comments: [...prevState.comments, newComment],
    }));
  };

  // Renderização do componente
  return (
    <div className="PostWithComments">
      <h1>Réveillon 23/24</h1>

      {/* Exibindo a imagem com o caminho importado */}
      <img
        src={postImage}
        alt="Post"
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          borderRadius: "8px",
        }}
      />

      <h2>Noite da virada em Garopaba-SC</h2>

      {/* Exibindo a lista de comentários */}
      <ul>
        {state.comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>

      {/* Formulário para adicionar novos comentários */}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevenindo o comportamento padrão de envio do formulário
          const commentText = e.currentTarget.comment.value; // Obtendo o texto do comentário do campo de entrada
          addComment(commentText); // Chamando a função addComment para adicionar o novo comentário
          e.currentTarget.comment.value = ""; // Limpando o campo de entrada após adicionar o comentário
        }}
      >
        <label htmlFor="comment">Novo Comentário:</label>

        {/* Campo de entrada para o novo comentário */}
        <textarea className="textarea" id="comment" name="comment" />

        {/* Botão para adicionar o comentário */}
        <button type="submit">Adicionar Comentário</button>
      </form>
    </div>
  );
};

// Exportando o componente
export default PostWithComments;
