import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCarrinho } from '../../Routes/Coordinator';

export const Restaurante = () => {
    const navigate = useNavigate()

    return (
        <div>
            <>Restaurante</>
            <button onClick={() => {goToCarrinho(navigate)}}>Carrinho</button>
        </div>
    )

}