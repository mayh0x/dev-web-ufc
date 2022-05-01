/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./components/About";
import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";
import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";
// import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";

export default function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/createStudent">
                    Criar estudante
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/listStudent">
                    Listar estudantes
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/createProfessor">
                    Criar professor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/listProfessor">
                    Listar professores
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createStudent" element={<CreateStudent />} />
        <Route path="/listStudent" element={<ListStudent />} />
        <Route path="/editStudent/:id" element={<EditStudent />} />
        <Route path="/createProfessor" element={<CreateProfessor />} />
        <Route path="/listProfessor" element={<ListProfessor />} />
        <Route path="/editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}
