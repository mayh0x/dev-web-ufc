import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { professor } from "./data.js";

const EditProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const params = useParams();

  useEffect(() => {
    const teacher = professor[params.id];
    setName(teacher.name);
    setUniversity(teacher.university);
    setDegree(teacher.degree);
  }, [params.id]);

  const handleSubmit = (event) => {
    alert(`Nome: ${name} \nUniversidade: ${university}\nTitulação: ${degree}`);
  };

  return (
    <div>
      <h2>Editar professor</h2>
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
            value="Editar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessor;
