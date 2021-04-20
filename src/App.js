import React, {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from './constantes/requisicoes'
import Card from './componentes/Card/Card'
import Aprovados from './componentes/Aprovados/Aprovados'
import GlobalEstilo from './Global/GlobalEstilo'
import {Titulo, TrocaTela, Limpar, TamanhoMatchs, LimparMobile, TamanhoVassoura} from './styledApp'
import deadpool from './img/deadpoolAbracados.png'
import vassoura from'./img/limpar_branco.png'
import "./index.css";

function App() {
  const [troca, setTroca] = useState(true)

  const trocarTela = () => {
    setTroca(!troca)
  }

  const limpar = () => {
    axios.put(`${BASE_URL}clear`)
        .then((resposta)=>{
           alert("Realizado Limpeza")
        })
        .catch((erro) => {
            console.log(erro)
        })
  }
  
  return (
    <div>
      <GlobalEstilo/>
      <div> 
        <Titulo>Astromatch</Titulo>
        <TrocaTela onClick={trocarTela}><TamanhoMatchs src={deadpool} alt="Matchs"/>
        {troca ? "Veja quem também gostou de você" : "Voltar"}
        </TrocaTela>
        <Limpar onClick={limpar}>Limpar swipes e matches</Limpar>
        <LimparMobile onClick={limpar}><TamanhoVassoura src={vassoura}/></LimparMobile>
      </div>

      {troca ? <Card/> : <Aprovados/>}

    </div>
  )
}

export default App;
