import React from "react";
import logo from "../assets/logo.svg";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <img alt="Tindev" src={logo} />
        <input placeholder="Digite seu usuário no github" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
