import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToEditarCadastro } from '../../rotas/Coordinator';
import { goToEditarEndereco } from '../../rotas/Coordinator';


export const MeuPerfil = () => {
    const navigate = useNavigate()

    return (
        <div>
            <>Meu Perfil</>
            <button onClick={() => {goToEditarCadastro(navigate)}}> Editar Cadastro </button>
            <button onClick={() => {goToEditarEndereco(navigate)}}> Editar Endereço </button>
        </div>
    )


}

