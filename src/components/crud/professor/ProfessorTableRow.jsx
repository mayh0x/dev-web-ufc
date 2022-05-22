import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const ProfessorTableRow = (props) => {
  const { _id, name, university, degree } = props.professor;

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td>
        <Link to={`/editProfessor/${_id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            axios.delete(`http://localhost:3002/professores/delete/${_id}`);
            alert("Professor apagado com sucesso!");
            window.location.reload();
          }}
        >
          Apagar
        </button>
      </td>
    </tr>
  );
};

export default ProfessorTableRow;
