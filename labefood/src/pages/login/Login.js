import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../rotas/Coordinator";
import axios from "axios";
import { useForm } from "../../hooks/useForm/useForm";
/* import TextField from "@mui/material/TextField"; */
import Rappi4 from "../../img/Rappi4.svg";
import { SplashScreen } from "../../components/splashScreen/SplashScreen";
import { Clique, Div } from "./Style";

export const Login = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

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
        setLoading(false);
      })
      .catch((error) => alert(error.message));
    clear();
  };

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <div>
          <img src={Rappi4} alt="logo-Rappi4" />

          <h2>Entrar</h2>

          <form onSubmit={loginStart}>
            <input
              name={"email"}
              label={"E-mail"}
              value={form.email}
              onChange={onChange}
              placeholder="E-mail"
              type={"email"}
              required
            /*   variant="outlined"
              fullWidth
              margin="normal" */
            />
            <br />
            <input
              name={"password"}
              label="Senha"
              value={form.password}
              onChange={onChange}
              placeholder="Senha"
              type="password"
              required
              pattern={"^.{6,}"}
              title={"A senha deve ter no mínimo 6 caracteres"}
            /*   variant="outlined"
              fullWidth
              margin="normal" */
            />
            <button type="submit">Entrar</button>{" "}
            <Div>
              <p>Não possui cadastro?</p>
              <Clique
                onClick={() => {
                  goToSignUp(navigate);
                }}
              >
                Clique aqui.
              </Clique>
            </Div>
          </form>
        </div>
      )}
    </div>
  );
};
