import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToSignUp } from '../../routes/Coordinator';
import axios from "axios";
import { useForm } from '../../hooks/useForm/useForm';
import TextField from '@mui/material/TextField';
import Rappi4 from "../../img/Rappi4.svg"

export const Login = () => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ email: "", password: "" });

    const loginStart = (event) => {
        event.preventDefault();
        axios
          .post(
            "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/login",
            form
          )
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            navigate("/feed");
          })
          .catch((error) =>  alert(error.message));
        clear();
      };


    return (
        <div>
            <img src={Rappi4} alt="logo-Rappi4"/>
            <h2>Login</h2>
           
            <form onSubmit={loginStart}>
           
            <TextField
            name={"email"}
            label={"E-mail"}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            type={"email"}
            required
            variant="outlined"
            fullWidth
            margin="normal"
        
          />

            <br />
            <TextField
            name={"password"}
            label="Senha"
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            type="password"
            required
            pattern={"^.{6,}"}
            title={"A senha deve ter no mínimo 6 caracteres"}
            variant="outlined"
            fullWidth
            margin="normal"
          />
            <button type="submit">Entrar</button>{" "}
            <button onClick={() => {goToSignUp(navigate)}}>Cadastrar</button>
            </form>
        </div>


  );


}