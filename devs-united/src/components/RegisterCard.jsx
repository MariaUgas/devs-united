import React, { useState } from "react";
import { firestore, auth } from "../firebase";

import "../css/style.css";

const RegisterCard = () => {
  const [body, setBody] = useState({});
  const register = (e) => {
    e.preventDefault();
    const { email, password } = body;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => console.error(err.message));
  };
  const handlerRegister = (e) => {
    let newTweet = {
      ...body,
      [e.target.name]: e.target.value,
    };
    setBody(newTweet);
    console.log(body);
  };

  return (
    <div className="flex-container centered">
      <div className="card-register ">
        <form className="form" onSubmit={register}>
          <div className="inputContainer">
            <input
              autoComplete="off"
              onChange={handlerRegister}
              placeholder="Ingrese un nombre de usuario"
              name="username"
              type="text"
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Ingrese una clave"
              name="password"
              type="password"
              onChange={handlerRegister}
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Ingrese correo electronico"
              name="email"
              type="email"
              onChange={handlerRegister}
            />
          </div>
          <input type="submit" value="Registrarse" />
        </form>
      </div>
    </div>
  );
};

export default RegisterCard;
