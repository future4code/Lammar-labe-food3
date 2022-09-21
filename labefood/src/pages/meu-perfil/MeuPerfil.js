import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToEditarCadastro } from '../../rotas/Coordinator';
import { goToEditarEndereco } from '../../rotas/Coordinator';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import { useEffect, useState } from 'react';

export const MeuPerfil = () => {
    const navigate = useNavigate()

    const [informacoes, setInformacoes] = useState([]);

    useEffect (() => {
        listaInformacoes()
        .then(infos => {
            setInformacoes(infos);
        })
        .catch((e) => {
            console.log(e)
        })

    }, [])

    const listaInformacoes = async () => {
        const {infos} = await axios.get(`${BASE_URL}profile`,
        {
            headers: {
                Authorization: localStorage.getItem("token")                
            }
        }    
           
        );
        return infos
    }

    return (
        <div>
            <h2>Meu Perfil</h2>
            {informacoes.slice(0,20).map((informacao, i) => JSON.stringify(informacao)) }
            <button onClick={() => {goToEditarCadastro(navigate)}}> Editar Cadastro </button>
            <button onClick={() => {goToEditarEndereco(navigate)}}> Editar Endereço </button>
        </div>
    )


}
