import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCadastroEndereco } from '../../Routes/Coordinator';

export const Signup = () => {
    const navigate = useNavigate()

    return (
        <div>
            <>signup</>
            <button onClick={() => {goToCadastroEndereco(navigate)}}>Cadastrar Endereço</button>

        </div>
    )


}