import React, { useCallback } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import { useAuth } from "../context/AuthenticationContext";

const Login = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const showToast = () => toast.error("PREENCHA TODOS OS CAMPOS.");

      if ((email !== "") & (senha !== "")) {
        setLoading(true);
        login();
      } else {
        showToast();
      }

      async function login() {
        await signIn(email, senha);
        setLoading(false);
        console.log(email, senha);
      }
      login();
    },
    [email, senha, signIn]
  );

  return (
    <div className="content">
      <main style={{ width: "30%", margin: 100 }}>
        <div>
          <Toaster />
        </div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Login: </label>
            <input
              type="text"
              className="form-control"
              value={email == null || email === undefined ? "" : email}
              name="login"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Senha: </label>
            <input
              type="password"
              className="form-control"
              value={senha ?? ""}
              name="senha"
              onChange={(event) => {
                setSenha(event.target.value);
              }}
            />
          </div>

          <div className="form-group" style={{ paddingTop: 20 }}>
            {loading ? (
              <TailSpin color="#00BFFF" height={50} width={50} />
            ) : (
              <input type="submit" value="Submit" className="btn btn-primary" />
            )}
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
