import React/* , { useState }  */ from 'react';
import logo from '../../img/Rappi4.svg'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm/useForm';
import { goToCadastroEndereco } from '../../rotas/Coordinator';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import * as Styled from './Style'
import TextField from '@mui/material/TextField';
/* import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; */

export const Signup = () => {
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "" });
    /*     const [showPassword, setShowPassword] = useState(false)
    
        const onClickShowPassword = () => {
            setShowPassword(!showPassword)
        } */

    const cadastraUsuario = (event, email, password) => {
        event.preventDefault();

        if (form.password !== form.password2) {
            alert("Senha não confere com anterior")
        } else {
            axios.post(`${BASE_URL}signup`, form)
                .then((response) => {
                    console.log(response.data);
                    alert("Conta criada com sucesso!")
                    goToCadastroEndereco(navigate)
                }).catch((e) => {
                    console.log(e.message);
                    alert("E-mail ou CPF já cadastrado!")
                })
            clear();
        }
    }

    return (
        <div>
            <img src={logo} alt="Logo Rappi4" />
            <h2>Cadastrar</h2>
            <Styled.Form onSubmit={cadastraUsuario}>

                <TextField
                    type="text"
                    label={"Nome"}
                    name="name"
                    id="name"
                    placeholder="Nome e sobrenome"
                    value={form.nome}
                    onChange={onChange}
                    pattern="^.{3,}$"
                    title="Mínimo 3 caracteres"
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    type="email"
                    label={"E-mail"}
                    name="email"
                    id="email"
                    placeholder="email@email.com"
                    value={form.email}
                    onChange={onChange}
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label={"CPF"}
                    name="cpf"
                    id="cpf"
                    placeholder="000.000.000-00"
                    value={form.cpf}
                    onChange={onChange}
                    pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}"
                    title="Digite seu CPF com 11 dígitos"
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    type="password"
                    label={"Senha"}
                    name="password"
                    id="senha"
                    placeholder="Mínimo 6 caracteres"
                    value={form.password}
                    onChange={onChange}
                    pattern="^.{6,}$"
                    title="Mínimo 6 caracteres"
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                {/*  <button
                    icon={showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    onClick={onClickShowPassword}
                ></button> */}

                <TextField
                    type="password"
                    label={"Confirmar"}
                    name="password2"
                    id="password2"
                    placeholder="Confirme a senha anterior"
                    value={form.password2}
                    onChange={onChange}
                    pattern="^.{6,}$"
                    title="Mínimo 6 caracteres"
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <button type='submit'>Criar</button>
            </Styled.Form>
        </div>
    )


}