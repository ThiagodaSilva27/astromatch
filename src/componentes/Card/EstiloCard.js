import styled from 'styled-components'

export const CardTotal = styled.div`
    width:25rem;
    height: 30rem;
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

export const TamanhoImagem = styled.img `
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
    position:absolute;
    right: 40rem;
    top: 33.75rem;

    @media(max-width: 411px){
        right:7rem;
        top: 35rem;
    }

    @media(min-width: 1500px){
        left:45rem;
        top:33rem;
    }

    @media(min-width: 1520px){
        left:45rem;
        top:33rem;
    }
`

export const BotaoReprovar = styled.button`
    border: none;
    position:absolute;
    right: 47rem;
    top: 33.75rem;

    @media(max-width: 411px){
        right:17rem;
        top:35rem;
    }

    @media(min-width: 1500px){
        left:40rem;
        top:33rem;
    }

    @media(min-width: 1520px){
        left:35rem;
        top:33rem;
    }

    @media(min-width: 1920px){
        left:35rem;
        top:33rem;
    }
`

export const ComCoracao = styled.img`
    position:absolute;
    width:5rem;
    height:5rem;
    border-radius: 3.125rem;
    left:0.01rem;
    background-color: rgba(15,17,17,0);

    border: 1px solid #00FF80;

    &:active{
        border: none;
    }

    @media(max-width: 411px){
        right:200px;
        width:4rem;
        height:4rem;
    }
`

export const Rejeitar = styled.img`
    position:absolute;
    width:5rem;
    height:5rem;
    border-radius: 3.125rem;
    right:1rem;
    background-color: rgba(15,17,17,0);
    border: 1px solid #FF0040;

    &:active{
        border: none;
    }

    @media(max-width: 411px){
        right:1rem;
        width:4rem;
        height:4rem;
    }
`

export const Mensagem = styled.p`
    margin-top: 12.5rem;
`