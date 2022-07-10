// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import StudentService from "../../../services/estudante";
import { Toaster, toast } from "react-hot-toast";

const StudentTableRow = (props) => {
  const { _id, name, course, ira } = props.student;

  const showToast = (name) =>
    toast.success("Estudante " + name + " apagado com sucesso");

  return (
    <>
      <Toaster />
      <tr>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{course}</td>
        <td>{ira}</td>
        <td>
          <Link to={`/editStudent/${_id}`} className="btn btn-warning">
            Editar
          </Link>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              // axios.delete(`http://localhost:3002/estudantes/delete/${_id}`);
              StudentService.deleteStudent(() => {
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

export default StudentTableRow;
