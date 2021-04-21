import styled from 'styled-components'

export const CardTotal = styled.div`
    margin-top: 25px;
    width:25rem;
    height: 35rem;
    padding-bottom:3.125rem;
    border: 1px solid gray;
    border-radius: 3.125rem;
    text-align: left;

    @media(max-width: 411px){
        width:26rem;
        height: 10rem;
        border: none;
    }
`

export const TamanhoImagem = styled.img`
  width:25rem;
  height:20rem;
  border-radius: 3.125rem;
  border-bottom: 5px solid #BDBDBD;
  z-index: 0;   

  @media(max-width: 411px){
        width:20rem;
        margin-left: 10%;
        border: none;
        border-radius:0;
    }
`  

export const Descricao = styled.p`
    padding: 20px;

    @media(max-width: 411px){
        padding: 0 50px;
    }
`

export const BotaoAprovar = styled.button`
    border: none;
    margin-left: 40%;
`

export const BotaoReprovar = styled.button`
    border: none;
    margin-left: 10%;
`

export const ContainerBotao = styled.div`
    display: flex;
    flex-direction: row;
`

export const ComCoracao = styled.img`
    width:5rem;
    height:5rem;
    border-radius: 3.125rem;
    background-color: rgba(15,17,17,0);
    border: 1px solid #00FF80;
    &:active{
        border: none;
    }
`

export const Rejeitar = styled.img`
    width:5rem;
    height:5rem;
    border-radius: 3.125rem;
    background-color: rgba(15,17,17,0);
    border: 1px solid #FF0040;
    &:active{
        border: none;
    }
`

export const Mensagem = styled.p`
    margin-top: 12.5rem;
`