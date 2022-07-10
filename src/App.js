/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import About from "./components/About";
import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";
import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";
import { LoginRoutes, PrivateRoutes } from "./routes";
import { useAuth } from "./context/AuthenticationContext";
import { TailSpin } from "react-loader-spinner";

// import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";

export default function App() {
  const [loading, setLoading] = useState(false);
  const { signed, handleLogout } = useAuth();

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
                Login
              </Link>
            </li>
            <li className="navitem">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
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
                  <Link to="/createStudent" className="dropdown-item">
                    Create Student
                  </Link>
                  {/* <a className="dropdown-item" href="/createStudent">
                    Criar estudante
                  </a> */}
                </li>
                <li>
                  <Link className="dropdown-item" to="/listStudent">
                    Listar estudantes
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
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
                  <Link className="dropdown-item" to="/createProfessor">
                    Criar professor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/listProfessor">
                    Listar professores
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {signed && (
          <div style={{ color: "#fff" }}>
            Olá,{" "}
            {JSON.parse(sessionStorage.getItem("@AuthFirebase:user")).email}
            {loading ? (
              <TailSpin color="#00BFFF" height={50} width={50} />
            ) : (
              <button
                style={{ marginLeft: 20, marginRight: 20 }}
                className="btn btn-danger"
                onClick={() => {
                  setLoading(true);
                  handleLogout();
                }}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<LoginRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route path="/about" element={<PrivateRoutes />}>
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/createStudent" element={<PrivateRoutes />}>
          <Route path="/createStudent" element={<CreateStudent />} />
        </Route>

        <Route path="/listStudent" element={<PrivateRoutes />}>
          <Route path="/listStudent" element={<ListStudent />} />
        </Route>

        <Route path="/editStudent/:id" element={<PrivateRoutes />}>
          <Route path="/editStudent/:id" element={<EditStudent />} />
        </Route>

        <Route path="/createProfessor" element={<PrivateRoutes />}>
          <Route path="/createProfessor" element={<CreateProfessor />} />
        </Route>

        <Route path="/listProfessor" element={<PrivateRoutes />}>
          <Route path="/listProfessor" element={<ListProfessor />} />
        </Route>

        <Route path="/editProfessor/:id" element={<PrivateRoutes />}>
          <Route path="/editProfessor/:id" element={<EditProfessor />} />
        </Route>
      </Routes>
    </div>
  );
}
