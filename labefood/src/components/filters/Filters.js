import React from "react";

export const FiltersForSeach = (props) => {
  const onChangeName =(event) =>{
    props.setInputSearch(event.target.value);
  };
  
    return (
        <input
        type={"text"}
        placeholder="Restaurante"
        value={props.inputSearch}
        onChange={onChangeName}
      />
        
    )

}