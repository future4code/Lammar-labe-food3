import { goToRestaurante } from "../../rotas/Coordinator";
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'
import { FiltersForSeach } from '../../components/filters/Filters'
import { useNavigate } from 'react-router-dom'

export const Feed = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [category, setCategory] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BASE_URL}restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(filterRestaurants);
        setdata(res.data.restaurants);
        setisLoading(false);
      })
      .catch((err) => {
        if (err.response.data.message === "Não autorizado") {
          navigate('/signup');
        } else if (
          err.response.data.message === "Usuário não possui endereço cadastrado"
        ) {
            navigate("/cadastro-endereco");
        }
      });
  }, [navigate, inputSearch]);

  const filterRestaurants =
    data &&
    data.filter((item) => {
      if (inputSearch !== "") {
        return item.name.toLowerCase().includes(inputSearch.toLowerCase());
      } else if (category !== "") {
        return category === item.category;
      }
       else {
        return item;
      }
    });

  const listRestaurant =
    filterRestaurants &&
    filterRestaurants.map((loja) => {
      return (
        <div key={loja.id} loja={loja}>
           <img src={loja.logoUrl}/>
          <p>
            {loja.name}
          </p>
          <p>Tempo de espera:  {loja.deliveryTime} min.</p>
          <p>Frete: {loja.shipping}</p>
          
        </div>
      );
    });

  return (
    <div>
      <FiltersForSeach
        data={data}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
      <div>
        {isLoading && "loading..."}
        {!isLoading && data && listRestaurant}
        {!isLoading && !data && erro}
      </div>
    </div>
  );
};
