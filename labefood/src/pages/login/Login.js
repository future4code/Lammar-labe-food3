import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToSignUp } from '../../routes/Coordinator';
import axios from "axios";
import { useForm } from '../../hooks/useForm/useForm';

export const Login = () => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const loginStart = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/login",
        form
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/feed");
      })
      .catch((response) => navigate("/signup"));
    clear();
  };


  return (
    <div>
      <h1>Rappi4</h1>
      <h2>Login</h2>
      <form onSubmit={loginStart}>
        <label htmlFor="email"> Email: </label>
        <input
          name="email"
          id="email"
          placeholder="admin@email.com"
          value={form.email}
          onChange={onChange}
          type="email"
          required
        />
        <br />
        <label htmlFor="password"> Password: </label>
        <input
          name="password"
          id="password"
          placeholder="********"
          value={form.password}
          onChange={onChange}
          pattern="^.{6,}$"
          type="password"
          title="your password must be 6 characters"
          required
        />
        <button type="submit">Entrar</button>{" "}
        <button onClick={() => { goToSignUp(navigate) }}>Cadastrar</button>
      </form>
    </div>

  );


}