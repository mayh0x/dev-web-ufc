import React from "react";
import { useParams } from "react-router-dom";

const Page1 = () => {
  let params = useParams();

  return (
    <div>
      <h2>Page1 page</h2>
      <h2>Nome: {params.nome}</h2>
      <h2>ID: {params.id}</h2>
    </div>
  );
};

export default Page1;
