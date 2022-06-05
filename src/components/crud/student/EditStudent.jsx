// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../../../services/estudante";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // axios
    //   .get(`http://localhost:3002/estudantes/retrieve/${params.id}`)
    //   .then((response) => {
    //     const { name, course, ira } = response.data;

    //     setName(name);
    //     setCourse(course);
    //     setIra(ira);
    //   });

    StudentService.searchStudent((student) => {
      setName(student.name);
      setCourse(student.course);
      setIra(student.ira);
    }, params.id);
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updateStudent = { name, course, ira };
    // axios
    //   .put(
    //     `http://localhost:3002/estudantes/update/${params.id}`,
    //     updateStudent
    //   )
    //   .then((response) => {
    //     alert("Estudante atualizado com sucesso!");
    //     navigate("/listStudent");
    //   });

    StudentService.updateStudent(
      () => {
        alert("Estudante atualizado com sucesso!");
        navigate("/listStudent");
      },
      params.id,
      updateStudent
    );
  };

  return (
    <div>
      <h2>Editar estudante</h2>
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
            value="Editar Estudante"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
