import React, { useState } from "react";
//import ReactDOM from "react-dom";

import "../css/style.css";

const fakeUser = {
  username: "a",
  password: "a",
};
const LoginCard = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleInput = (e) => {
    setUsernameInput(e.target.value);
    // Acá debes manejar el estado del input username
  };

  const handleInputPass = (e) => {
    setPassInput(e.target.value);
    // Acá debes manejar el estado del input password
  };

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      usernameInput === fakeUser.username &&
      passInput === fakeUser.password
    ) {
      setTimeout(() => {
        setIsLoading(false);
        setLoginSuccess(true);
        setLoginError(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setLoginSuccess(false);
        setLoginError(true);
      }, 2000);
      console.log("nada");
    }
  };
  let aleatorio = Math.ceil(Math.random() * 10);
  const logout = (e) => {
    // Acá debes escribir los pasos necesarios para poder
    //realizar el logout de la cuenta.
    e.preventDefault();
    setIsLoading(true);
    if (aleatorio > 2) {
      setTimeout(() => {
        setIsLoading(false);
        setLoginSuccess(false);
        setLogoutSuccess(false);
        setUsernameInput("");
        setPassInput("");
      }, 3000);
    } else {
      console.log("NO CERRO SESION");
      setTimeout(() => {
        setIsLoading(false);
        setLogoutSuccess(true);
        //setLoginError(true);
      }, 3000);
    }
  };

  return (
    <div className="flex-container centered">
      <div className="card ">
        <form className="form">
          <div className="inputContainer">
            <input
              autoComplete="off"
              onChange={handleInput}
              className={loginError ? "error-input" : ""}
              placeholder="username"
              name="username"
              type="text"
              value={usernameInput}
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="password"
              className={loginError ? "error-input" : ""}
              name="password"
              type="password"
              onChange={handleInputPass}
              value={passInput}
            />
          </div>
          {!loginSuccess ? (
            <button className="btn" onClick={login}>
              {isLoading ? "Cargando..." : "Login"}
            </button>
          ) : (
            <button className="btn" onClick={logout}>
              {/* Cerrar sesión */}
              {isLoading ? "Aguarda un instante..." : "Cerrar sesión"}
            </button>
          )}
          {loginError && (
            <span className="error-message">
              Alguno de los datos ingresados es incorrecto.
            </span>
          )}
          {loginSuccess && !logoutSuccess && (
            <span className="success-message">Login Exitoso!</span>
          )}
          {logoutSuccess && (
            <span className="error-message">No se pudo cerrar sesion</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
