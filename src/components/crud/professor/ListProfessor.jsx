import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfessorTableRow from "./ProfessorTableRow";

const ListProfessor = () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/professores/list")
      .then((response) => setProfessors(response.data));
  }, []);

  function generateTable() {
    if (!professors) return;
    return professors.map((professors, i) => {
      return <ProfessorTableRow professor={professors} key={i} />;
    });
  }

  return (
    <div>
      <h2>Listar Professores</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Universidade</th>
          <th>Titulação</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListProfessor;
