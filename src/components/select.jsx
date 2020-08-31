import React from "react";

export default (props) => {
  return (
    <select
      className="selectConversor"
      id="moedaA"
      value={props.moeda_nome}
      onChange={(e) => {
        props.mudarNomeMoedaA(e.target.value);
      }}
    >
      <option select="true" value={props.moeda_nome}>
        {props.moeda_nome}
      </option>
      <option value="ALL">Albanian Lek</option>
      <option value="XCD">East Caribbean Dollar</option>
      <option value="EUR">Euro</option>
      <option value="BBD">Barbadian Dollar</option>
    </select>
  );
};
