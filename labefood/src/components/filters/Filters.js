import React from "react";

export const Filters = (nameFilter,setNameFilter) => {
    return (
        <input
        placeholder="Pesquisar"
        value={nameFilter}
        onChange={(ev) => {setNameFilter(ev.target.value)}}
      />
        
    )

}