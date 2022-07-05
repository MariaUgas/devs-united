import React, { useState } from "react";
import { firestore, auth } from "../firebase";

import "../css/style.css";

const Login = () => {
  /*
  user: mu@gmail.com
  password: 123456
  */
  const [body, setBody] = useState({});
  const login = (e) => {
    e.preventDefault();
    const { email, password } = body;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => console.error(err.message));
  };
  const handlerLogin = (e) => {
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
        <form className="form" onSubmit={login}>
          <div className="inputContainer">
            <input
              autoComplete="off"
              onChange={handlerLogin}
              placeholder="Ingrese un nombre de usuario"
              name="email"
              type="text"
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Ingrese una clave"
              name="password"
              type="password"
              onChange={handlerLogin}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
