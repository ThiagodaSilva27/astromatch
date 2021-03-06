import styled from 'styled-components'

export const Titulo = styled.div`
    color: #58ACFA;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-family: 'Reggae One', cursive;
    font-size: 25px;
    text-align: center;
    margin-top:10px;
    margin-bottom: 10px;
`

export const TrocaTela = styled.button`
    border: 3px dashed #D8D8D8;
    position: absolute;
    right:200px;
    top:200px;
    width:150px;
    &:hover{
        box-shadow: 5px 2px 20px red;
    }

    @media(max-width: 415px){
        right:50px;
        top:60px;
        width:120px;
        padding: 5px;
    }
`

export const TamanhoMatchs = styled.img`
    width:140px;

    @media(max-width: 500px){
        display:none
    }
`

export const Limpar = styled.button`
    position: absolute;
    right:180px;
    top:100px;
    padding: 10px;
    background-color: #CEECF5;
    border: none;
    border-radius: 50px;
    color:black;

    &:hover{
        box-shadow: 5px 2px 20px #01DFD7;
    }

    @media(max-width: 500px){
        display: none;
    }
`

export const LimparMobile = styled.button`
    position: absolute;
    left: 50px;
    top: 60px;
    border: none;

    @media(min-width: 500px){
        display: none;
    }
`
export const TamanhoVassoura = styled.img`
    width: 30px;
`

export const Principal = styled.div`
    margin-top: 50px;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    @media(min-width: 500px){
        margin-top: 80px;
    }
`