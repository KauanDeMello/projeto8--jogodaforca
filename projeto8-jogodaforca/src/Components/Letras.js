import styled from "styled-components";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras(props){
    
    return(
        <Container>
        <RenderLetras>
            {alfabeto.map((letra, j) => {
                return(
                    <ButtonLetra onClick={(()=> props.Clicar(letra, j))} data-identifier='letras' isClicar={props.letrasUsadas.includes(letra)} key={j} disabled={props.letrasUsadas.includes(letra)}>{letra}</ButtonLetra>
                )
            })}
        </RenderLetras>
    </Container>
    )
}

const Container = styled.div`
    height: 100px;
    width: 760px;
    display: flex;
    justify-content: center;
    align-items: center;
  
`
const RenderLetras = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;    
    align-items: center;
    flex-wrap: wrap;
`
const ButtonLetra = styled.button`
    font-size: 20PX;
    font-weight: 600;
    height: 50px;
    weight:50px;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 5px;
    border: ${props => props.isClicar ? "1px solid #798595" : "1px solid #39739D"};
    background-color: ${(props) => props.isClicar === true ? "#9FAAB5" : "#E1ECF4"};
    cursor: ${(props) => props.isClicar === true ? "default" : "pointer"};
    &:hover {
        background-color: ${(props) => props.isClicar === true ? "#9FAAB5" : "#D0E5F4"};
      }
    margin: 5px;
`