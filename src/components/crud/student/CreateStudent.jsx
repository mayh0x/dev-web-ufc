// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../../../services/estudante";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const createStudent = { name, course, ira };
    // axios
    //   .post(`http://localhost:3002/estudantes/register`, createStudent)
    //   .then((response) => {
    //     alert("Estudante criado com sucesso!");
    //     navigate("/listStudent");
    //   });

    StudentService.createStudent(createStudent, () => {
      alert("Estudante criado com sucesso!");
      navigate("/listStudent");
    });
  };

  return (
    <div>
      <h2>Criar estudante</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Curso</label>
          <input
            type="text"
            className="form-control"
            value={course ?? ""}
            name="course"
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            type="text"
            className="form-control"
            value={ira ?? 0}
            name="ira"
            onChange={(event) => setIra(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Criar Estudante"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateStudent;
