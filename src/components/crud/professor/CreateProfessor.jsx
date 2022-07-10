// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfessorService from "../../../services/professor";
import { Toaster, toast } from "react-hot-toast";

const CreateProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const navigate = useNavigate();

  const showToast = () => toast.error("PREENCHA TODOS OS CAMPOS.");
  const successToast = (name) =>
    toast.success("Professor " + name + " criado com sucesso");

  const handleSubmit = (event) => {
    event.preventDefault();

    if ((name !== "") & (university !== "") & (degree !== "")) {
      const newProfessor = { name, university, degree };
      ProfessorService.createProfessor(newProfessor, () => {
        successToast(name);
        navigate("/listProfessor");
      });
    } else {
      showToast();
    }
  };

  return (
    <div>
      <Toaster />
      <h2>Criar professor</h2>
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
          <label>Universidade</label>
          <input
            type="text"
            className="form-control"
            value={university ?? ""}
            name="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Titulação</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? ""}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Criar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProfessor;
