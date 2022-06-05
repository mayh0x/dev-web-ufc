// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfessorService from "../../../services/professor";

const EditProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // axios
    //   .get(`http://localhost:3002/professores/retrieve/${params.id}`)
    //   .then((response) => {
    //     const { name, university, degree } = response.data;

    //     setName(name);
    //     setUniversity(university);
    //     setDegree(degree);
    //   });

    ProfessorService.searchProfessor((professor) => {
      setName(professor.name);
      setUniversity(professor.university);
      setDegree(professor.degree);
    }, params.id);
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updateProfessor = { name, university, degree };
    // axios
    //   .put(
    //     `http://localhost:3002/professores/update/${params.id}`,
    //     updateProfessor
    //   )
    //   .then((response) => {
    //     alert("Professor atualizado com sucesso!");
    //     navigate("/listProfessor");
    //   });

    ProfessorService.updateProfessor(
      () => {
        alert("Professor atualizado com sucesso!");
        navigate("/listProfessor");
      },
      params.id,
      updateProfessor
    );
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
