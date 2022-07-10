// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import ProfessorService from "../../../services/professor";
import { Toaster, toast } from "react-hot-toast";

const ProfessorTableRow = (props) => {
  const { _id, name, university, degree } = props.professor;

  const showToast = (name) =>
    toast.success("Professor " + name + " deletado com sucesso");

  return (
    <>
      <Toaster />
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
              // axios.delete(`http://localhost:3002/professores/delete/${_id}`);
              ProfessorService.deleteProfessor(() => {
                showToast(name);
              }, _id);
            }}
          >
            Apagar
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProfessorTableRow;
