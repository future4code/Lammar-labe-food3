import * as React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../Routes/Coordinator";
import { useForm } from "../../hooks/useForm/useForm";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export const CadastroEndereco = () => {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  });



  const cadastro = (event) => {
    event.preventDefault();

    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/address",
        form, {headers: { auth: localStorage.getItem("token") },
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
    
  };
  console.log(form);

  return (
    <div>
      <h2>Meu endereço</h2>
      <form onSubmit={cadastro}>
        <div>
<TextField
            name={"street"}
            label={"Logradouro"}
            value={form.email}
            onChange={onChange}
            placeholder="Rua/ Av."    
            type={"logradouro"}
            required
            variant="outlined"
            fullWidth
            margin="normal"        
          />
        </div>
        <div>
<TextField
            name={"number"}
            label={"Numero"}
            value={form.email}
            onChange={onChange}
            placeholder="numero"
            type={"numero"}
            required
            variant="outlined"
            fullWidth
            margin="normal"        
          />
        </div>
        <div>
<TextField
            name={"complement"}
            label={"Complemento"}
            value={form.email}
            onChange={onChange}
            placeholder="Apto./ Bloco"
            type={"complemento"}
            variant="outlined"
            fullWidth
            margin="normal"        
          />
        </div>
        <div>
<TextField
            name={"neighbourhood"}
            label={"Bairro"}
            value={form.email}
            onChange={onChange}
            placeholder="Bairro"
            type={"bairro"}
            required
            variant="outlined"
            fullWidth
            margin="normal"        
          />
        </div>
        <div>
<TextField
            name={"city"}
            label={"Cidade"}
            value={form.email}
            onChange={onChange}
            placeholder="Cidade"
            type={"cidade"}
            required
            variant="outlined"
            fullWidth
            margin="normal"        
          />
        </div>
        <div>
<TextField
            name={"state"}
            label={"Estado"}
            value={form.email}
            onChange={onChange}
            placeholder="Estado"
            type={"estado"}
            required
            variant="outlined"
            fullWidth
            margin="normal"        
          />
        </div>
        
    <Button type="submit" variant="contained" color="error">Salvar</Button>    
        
    
      </form>
<br/>
      <button
        onClick={() => {
          goToFeed(navigate);
        }}
      >
        Feed
      </button>
      <button
        onClick={() => {
          goToSignUp(navigate);
        }}
      >
        Signup
      </button>
    </div>
  );
};
