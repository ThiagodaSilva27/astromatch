import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constantes/requisicoes'
import {Principal} from '../../styledApp'
import {CardTotal, 
        TamanhoImagem, 
        BotaoAprovar, 
        BotaoReprovar, 
        Mensagem,
        Descricao,
        ComCoracao,
        Rejeitar
} from './EstiloCard'
import CircularProgress from '@material-ui/core/CircularProgress'
import ImgCoracao from '../../img/coracao.png'
import ImgRejeitar from '../../img/reprovar.jpg'

function Card() {
    let [idM, setIdM] = useState([])
    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState("")
    let [descricao, setDescricao] = useState("")
    let [foto, setFoto] = useState("")
    let [loading, setLoading] = useState(false)

    const personalidades = () => {
        axios.get(`${BASE_URL}person`)
        .then((resposta)=>{
            setIdM(resposta.data.profile.id)
            setFoto(resposta.data.profile.photo)
            setNome(resposta.data.profile.name)
            setIdade(resposta.data.profile.age)
            setDescricao(resposta.data.profile.bio)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    useEffect(() => {
        personalidades()
    },[])

    const aprovar = (idAtual) => {
        
        setIdM(idAtual)

        const body = {
            id: idAtual,
            choice: true 
        }
        axios.post(`${BASE_URL}choose-person`, body)
        .then((resposta)=>{
            console.logo(resposta.data)
        })
        .catch((erro) => {
            console.log(erro)
        })

        personalidades()
    }

    const reprovar = (idAtual) => {
        setIdM(idAtual)
        const body = {
            id: idAtual,
            choice: false
        }
        axios.post(`${BASE_URL}choose-person`, body)
        .then((resposta)=>{
            console.logo(resposta.data)
        })
        .catch((erro) => {
            console.log(erro)
        })

       
        personalidades()
    }


  return (
    <Principal>
        {nome ?
        <CardTotal>
            <TamanhoImagem src={foto} alt="foto"/>
            <p>{nome}</p>
            <p>Idade: {idade}</p>
            <Descricao>Descrição: {descricao}</Descricao> 
        </CardTotal>:
         
         <CardTotal>
             <Mensagem>
             A lista gerada para você acabou, veja ao lado as personalidades que deram match. Ou atualize
             </Mensagem>
        </CardTotal>}

        <BotaoReprovar onClick={() => {reprovar(idM)}}>
            {loading ? <CircularProgress size={50} color="action" /> : <Rejeitar src={ImgRejeitar} alt="reprovar"/>}
        </BotaoReprovar>

        <div>
        <BotaoAprovar onClick={() => {aprovar(idM)}}>
            {loading ? <CircularProgress size={50} /> : <ComCoracao  src={ImgCoracao} alt="coração"/>}
        </BotaoAprovar>
        </div>
        
    </Principal>
  );
}

export default Card;
