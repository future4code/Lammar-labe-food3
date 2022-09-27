import React, { useState } from 'react';
import logo from '../../img/Rappi4.svg'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm/useForm';
import { goToCadastroEndereco } from '../../rotas/Coordinator';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import * as Styled from './Style'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
    Input,
    Button
} from '@chakra-ui/react'

import { FaEye, FaEyeSlash } from 'react-icons/fa';


export const Signup = () => {
    const navigate = useNavigate()

    const [
        form,
        onChange,
        clear,
        isNameValid,
        isEmailValid,
        isCpfValid,
        isPasswordValid,
        isPassword2Valid
    ] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false)
    const handleClickPassword = () => setShowPassword(!showPassword)
    const [showPassword2, setShowPassword2] = useState(false)
    const handleClickPassword2 = () => setShowPassword2(!showPassword2)

    const cadastraUsuario = (event) => {
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
        <Styled.Container>
            <img src={logo} alt="Logo Rappi4" />
            <Styled.ContainerTitle>
                <h2>Cadastrar</h2>
            </Styled.ContainerTitle>

            <Styled.Form onSubmit={cadastraUsuario}>
                <FormControl isRequired isInvalid={!isNameValid}>
                    <div>
                        <FormLabel as="label">Nome</FormLabel>
                    </div>
                    <Input
                        type='text'
                        name="name"
                        placeholder="Nome e sobrenome"
                        value={form.nome}
                        onChange={onChange}
                    />
                    {!isNameValid ? (
                        <FormErrorMessage as="p">
                            Nome inválido! Precisa ter nome sobremone.
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <FormControl isRequired isInvalid={!isEmailValid}>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                        name="email"
                        placeholder="email@email.com"
                        value={form.email}
                        onChange={onChange}
                    />
                    {!isEmailValid ? (
                        <FormErrorMessage as="p">
                            E-mail inválido! Por favor digite um e-mail válido.
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <FormControl isRequired isInvalid={!isCpfValid}>
                    <FormLabel>CPF</FormLabel>
                    <Input
                        type='text'
                        name="cpf"
                        placeholder="000.000.000-00"
                        value={form.cpf}
                        onChange={onChange}
                    />
                    {!isCpfValid ? (
                        <FormErrorMessage as="p">
                            CPF inválido! Dígite seu CPF com 11 dígitos.
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <FormControl isRequired isInvalid={!isPasswordValid}>
                    <FormLabel>Senha</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            name="password"
                            placeholder="Mínimo 6 caracteres"
                            value={form.password}
                            onChange={onChange}
                            pr='4.5rem'
                            type={showPassword ? 'text' : 'password'}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClickPassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {!isPasswordValid ? (
                        <FormErrorMessage as="p">
                            Senha inválida! Mínimo 6 caracteres.
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <FormControl isRequired isInvalid={!isPassword2Valid}>
                    <FormLabel>Confirma</FormLabel>
                    <InputGroup size='md'>
                        <Input as="input"
                            name="password2"
                            placeholder="Confirme a senha anterior"
                            value={form.password2}
                            onChange={onChange}
                            pr='4.5rem'
                            type={showPassword2 ? 'text' : 'password'}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClickPassword2}>
                                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {!isPassword2Valid ? (
                        <FormErrorMessage as="p">
                            Deve ser a mesma que a anterior.
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <button type='submit'>Criar</button>
            </Styled.Form>
        </Styled.Container>
    )


}