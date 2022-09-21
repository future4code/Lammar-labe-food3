import React from 'react'
import axios from 'axios'
import { useRequestData } from '../../hooks/useRequestData/useRequestData'
import { BASE_URL } from '../../constants/constants'
import { Filters } from '../../components/filters/Filters'
import { useState } from 'react'

export const Busca = ({ handleClick }) => {
const [filterByName, setFilterByName] = useState("")

const [data] = useRequestData(
    `${BASE_URL}/restaurants}`);

    return (
            <div>
            <Filters
            filterByName={filterByName}
            setFilterByName={setFilterByName}/>
            <div>
            {data.filter(produto => {
        return produto.restaurants.name.toLowerCase().includes(filterByName)
      }).map(produto => {
        return <div key={produto.id}
         name={produto.restaurants.name}
         handleClick={handleClick}/>
})}     </div>
        </div>
    )

}