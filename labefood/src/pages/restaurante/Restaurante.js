import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../hooks/useRequestData/useRequestData";
import { goToCarrinho } from "../../rotas/Coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage/useProtected";

export const Restaurante = () => {
  const [data, setdata] = useState();
  // const [dataProducts, setDataProducts] = useState();
  const navigate = useNavigate();
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
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const DetailPrincipal =
    data &&
    data.products.map((data) => {
      if (
        data.category !== "Acompanhamento" &&
        data.category !== "Bebida" &&
        data.category !== "Sorvete"
      )
        return (
          <div key={data.id} data={data}>
            <p>{data.name}</p>
            <img src={data.photoUrl} />
            <p>{data.description}</p>
            <p>R$ {data.price.toFixed(2).replace(".", ",")}</p>
            <button>Adicionar</button>
          </div>
        );
    });

  const DetailAcompanhamento =
    data &&
    data.products.map((data) => {
      if (data.category === "Acompanhamento") {
        return (
          <div key={data.id} data={data}>
            <p>{data.name}</p>
            <img src={data.photoUrl} />
            <p>{data.description}</p>
            <p>R$ {data.price.toFixed(2).replace(".", ",")}</p>
            <button>Adicionar</button>
          </div>
        );
      }
    });
  const DetailBebida =
    data &&
    data.products.map((data) => {
      if (data.category === "Bebida") {
        return (
          <div key={data.id} data={data}>
            <p>{data.name}</p>
            <img src={data.photoUrl} />
            <p>{data.description}</p>
            <p>R$ {data.price.toFixed(2).replace(".", ",")}</p>
            <button>Adicionar</button>
          </div>
        );
      }
    });

  return (
    <div>
      <div>
        <img src={data && data.logoUrl}></img>
        <p>{data && data.name}</p>
        <p>{data && data.category}</p>
        <p>R$ {data && data.shipping.toFixed(2).replace(".", ",")}</p>
        <p>{data && data.deliveryTime} - min</p>
        <p>{data && data.address}</p>
      </div>
      <div>
        <h2>Principais</h2>
        {data && DetailPrincipal}
      </div>

      <div>
        <h2>Acompanhamentos</h2>
        {data && DetailAcompanhamento}
      </div>

      <div>
        <h2>Bebidas</h2>
        {data && DetailBebida}
      </div>
      <button
        onClick={() => {
          goToCarrinho(navigate);
        }}
      >
        Carrinho
      </button>
    </div>
  );
};
