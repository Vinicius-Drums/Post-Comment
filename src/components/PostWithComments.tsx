// Importando o React e outros módulos necessários
import React, { useState } from "react";

// Definindo tipos para os comentários
type Comment = {
  id: number;
  text: string;
};

// Definindo o estado do componente
type PostWithCommentsState = {
  comments: Comment[];
};

// Importando a imagem usando o caminho relativo
import postImage from "../imagens/Virada23-24.jpeg";

// Definindo o componente funcional React
const PostWithComments: React.FC = () => {
  // Inicializando o estado
  const [state, setState] = useState<PostWithCommentsState>({
    comments: [],
  });

  // Função para adicionar um novo comentário
  const addComment = (text: string) => {
    const newComment: Comment = {
      id: state.comments.length + 1,
      text,
    };

    setState((prevState) => ({
      comments: [...prevState.comments, newComment],
    }));
  };

  // Renderização do componente
  return (
    <div className="PostWithComments">
      <h1>Réveillon 23/24</h1>

      {/* Usando a variável importada diretamente */}
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

      <ul>
        {state.comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const commentText = e.currentTarget.comment.value;
          addComment(commentText);
          e.currentTarget.comment.value = "";
        }}
      >
        <label htmlFor="comment">Novo Comentário:</label>

        {/* Adicionando a classe "textarea" ao elemento <textarea> */}
        <textarea className="textarea" id="comment" name="comment" />

        <button type="submit">Adicionar Comentário</button>
      </form>
    </div>
  );
};

// Exportando o componente
export default PostWithComments;
