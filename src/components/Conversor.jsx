import React, { useState, useEffect } from "react";
import "./Conversor.css";
import Axios from "axios";
import Titulo from "./titulo";
import Select from "./select";
export default (props) => {
  const [moeda_a_valor, setMoeda_a] = useState(0);
  const [moeda_b_valor, setMoeda_b] = useState(0);
  const [moeda_b_nome, setMoeda_b_nome] = useState("Selecione");
  const [moeda_a_nome, setMoeda_a_nome] = useState("Selecione");

  useEffect(() => {
    converter();
  }, [moeda_a_valor, moeda_b_nome, moeda_a_nome]);

  function converter() {
    if (moeda_a_valor != 0) {
      let conversor = moeda_a_nome + "_" + moeda_b_nome;

      if (moeda_a_nome === "Selecione") {
        alert("selecione a moeda A");
        return;
      }

      if (moeda_b_nome === "Selecione") {
        alert("selecione a moeda B");
        return;
      }

      const url = `https://free.currconv.com/api/v7/convert?q=${conversor}&compact=ultra&apiKey=6d824694834dedab71df`;

      Axios.get(url)
        .then(function (response) {
          var valor = moeda_a_valor * response.data[conversor];
          var valorFormatado = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          setMoeda_b(valorFormatado);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function mudarNomeMoedaA(valor) {
    setMoeda_a_nome(valor);
  }

  function mudarNomeMoedaB(valor) {
    setMoeda_b_nome(valor);
  }

  return (
    <div className="conversor">
      <Titulo moeda_a_nome={moeda_a_nome} moeda_b_nome={moeda_b_nome}></Titulo>
      <label>
        moeoda A:
        <Select
          moeda_nome={moeda_a_nome}
          mudarNomeMoedaA={mudarNomeMoedaA}
        ></Select>
      </label>
      <label>
        moeoda B:
        <Select
          moeda_nome={moeda_b_nome}
          mudarNomeMoedaA={mudarNomeMoedaB}
        ></Select>
      </label>
      <label>
        Valor:
        <input
          className="selectConversor"
          type="number"
          onChange={(e) => {
            setMoeda_a(+e.target.value);
          }}
        />
      </label>
      <h2>Valor Convertido {moeda_b_valor}</h2>
    </div>
  );
};
