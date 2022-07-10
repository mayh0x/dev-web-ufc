// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../../../services/estudante";
import { Toaster, toast } from "react-hot-toast";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  const navigate = useNavigate();

  const showToast = () => toast.error("PREENCHA TODOS OS CAMPOS.");
  const successToast = (name) =>
    toast.success("Estudante " + name + " criado com sucesso");

  const handleSubmit = (event) => {
    event.preventDefault();

    if ((name !== "") & (course !== "") & (ira !== 0)) {
      const newStudent = { name, course, ira };
      StudentService.createStudent(newStudent, () => {
        successToast(name);
        navigate("/listStudent");
      });
    } else {
      showToast();
    }
  };
  return (
    <div>
      <Toaster />
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
