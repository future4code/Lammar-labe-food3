import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData/useRequestData';
import { goToCarrinho } from '../../rotas/Coordinator';
import {useProtectedPage} from '../../hooks/useProtectedPage/useProtected';

export const Restaurante = () => {
    const [data, setdata] = useState();
    // const [dataProducts, setDataProducts] = useState();
    const navigate = useNavigate()
    const { id } = useParams();
    useProtectedPage();
  
    useEffect(() => {
      axios
        .get(`${BASE_URL}restaurants/${id}`, {
          headers: {
            auth: localStorage.getItem("token"),
          },
        })
        .then((response) => {
            setdata(response.data.restaurant);
            // setDataProducts(response.data.restaurant.products);
            // console.log(response.data)
        })
        .catch((error) => {
          console.log("Deu erro: ", error.response);
        });
    }, []);


    const RestaurantDetail = 
    data &&
    data.products.map((data)=> {
        return(
            <div key={data.id} data={data}>
                <p>{data.name}</p>   
            </div>
        );
    });
    console.log(RestaurantDetail)

    return (
        <div>
           <div>{data && RestaurantDetail}</div>
            <button onClick={() => { goToCarrinho(navigate) }}>Carrinho</button>
        </div>
    )

}