import styled from "styled-components";



export default function Chute(props) {
    return (
        <Container>
            <Texto>Já sei a palavra!</Texto>
            <TextoInput data-identifier="type-guess" placeholder="Digite a palavra" value={props.Chute}onChange={(event) => props.advinhado(event.target.value)}></TextoInput>
            <ButtonChute data-identifier="guess-button" onClick={props.Tentar}>Chutar</ButtonChute>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 40px;
`
const Texto = styled.p`
    font-size: 20px;
    font-weight: 200;
    color: black;
    margin: 0px;
    margin-right: 10px;
`
const TextoInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #39739D;
`
const ButtonChute = styled.button`
    width: 80px;
    height: 35px;
    color: #39739D;
    border-radius: 5px;	
    background-color: #E1ECF4;
    border: 1px solid #39739D;
    margin-left: 10px;
`