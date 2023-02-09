import React from "react";

import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer
      style={{
        border: "2px solid white",
        padding: "32px 8px",
        borderRadius: "8px",
        margin: "8px 0",
      }}
    >
      <img src={repo.avatar_url} alt="" srcset="" width={50} />
      <h3 style={{ fontSize: "2rem" }}>{repo.login}</h3>

      <a
        href={repo.html_url}
        rel="noreferrer"
        target="_blank"
        className="a-repositorio"
      >
        Ver repositório
      </a>
      <br />
      <a href="#" rel="noreferrer" className="remover" onClick={handleRemove}>
        Remover
      </a>
    </ItemContainer>
  );
}

export default ItemRepo;
