import React from 'react'
import axios from 'axios'
import { useRequestData } from '../../hooks/useRequestData/useRequestData'
import { BASE_URL } from '../../constants/constants'
import { FiltersForSeach } from '../../components/filters/Filters'
import { useState } from 'react'

export const Busca = () => {
const [inputFilterByName, setInputFilterByName] = useState("")

const [data] = useRequestData(
    `${BASE_URL}restaurants}`);
    console.log(data)

    // const filterRestaurants =
    // data &&
    // data.filter((item) => {
    //   if (inputFilterByName !== "") {
    //     return item.name.toLowerCase().includes(inputFilterByName.toLowerCase());
    //   // } else if (category !== "") {
    //   //   return category === item.category;
    //   // } else {
    //     return item;
    //   }
    // });

    return (
        <div>
           
        </div>
    )

}