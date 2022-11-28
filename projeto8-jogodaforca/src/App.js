import Palavras from "./Components/Palavras";
import Letras from "./Components/Letras";
import styled from "styled-components";
import Chute from "./Components/Chute";
import {useState} from "react";

import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';



export default function App(){
    const [letrasUsadas, letrasUsadasDef] = useState([]);
    const [escolherLetra, escolherLetraDef] = useState([]);
    const [forca, DeForca] = useState(0);
    const [palavraEscondida, palavraEscondidaDef] = useState([]);
    const [advinhar, advinhado] = useState("");
    const [nada, nadaDef] = useState("");

    console.log(advinhar);

    function StartGame(){
        letrasUsadasDef([]);
        DeForca(0);
        advinhado("");
        const letrasortida = Math.floor(Math.random() * Palavras.length);
        escolherLetraDef(Palavras[letrasortida].split(""));
        nadaDef(Palavras[letrasortida].normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
        palavraEscondidaDef(Array(Palavras[letrasortida].length).fill("_"));
    }
    
    function Clicar(letra){
        console.log(letra)
        if (palavraEscondida.includes("_")){
            if (forca < 6) {
                const mostrarPalavra = [...palavraEscondida];
                const novaletra = letrasUsadas.includes(letra) ? letrasUsadas : [...letrasUsadas, letra];
                letrasUsadasDef(novaletra);
                console.log(novaletra);

                if (nada.includes(letra)){
                    for(let i = 0; i < nadaDef.length; i++){
                        if(nadaDef[i] === letra){
                            mostrarPalavra[i] = escolherLetra[i];
                        }
                    }
                    palavraEscondidaDef(mostrarPalavra)
                }
                else if (!escolherLetraDef.includes(letra)){DeForca(forca +1); console.log("FORCA", forca)}
            }
        }
    }
    function Tentar(){
        if (advinhar === ""){
            alert('Escreva algo!');
        } else if (advinhar === nadaDef){;
        palavraEscondidaDef([...escolherLetra]);
        advinhado("");
        } else {
            DeForca(6);
            palavraEscondidaDef([...escolherLetra]);
            advinhado("");
        }
    }

    function EscolherForca(){
        if (forca === 0) {
            return <img src={forca0} data-identifier="game-image" alt="forca0" />
          }
          else if (forca === 1) {
            return <img src={forca1} data-identifier="game-image" alt="forca1" />
          }
          else if (forca === 2) {
            return <img src={forca2} data-identifier="game-image" alt="forca2" />
          }
          else if (forca === 3) {
            return <img src={forca3} data-identifier="game-image" alt="forca3" />
          }
          else if (forca === 4) {
            return <img src={forca4} data-identifier="game-image" alt="forca4" />
          }
          else if (forca === 5) {
            return <img src={forca5} data-identifier="game-image" alt="forca5" />
          }
          else if (forca === 6) {
            return <img src={forca6} data-identifier="game-image" alt="forca6" />
          }
          else {
            return <img src={forca6} data-identifier="game-image" alt="forca6" />
         }
    }
    function CorParaTexto() {
        if (forca > 5) {
          return "red";
        } else if (forca < 6 && palavraEscondida.includes("_")) {
          return "blue";
        } else if (forca < 6 && !palavraEscondida.includes("_")) {
          return "green";
        }
    }
    const forcas = EscolherForca();
    const cortexto = CorParaTexto();

    return(
        <div>
            <Box>
                <Top>
                    <Forca>{forcas}</Forca>
                    <GameDiv>
                        <Bottom onClick={StartGame} forca={forca} data-identifier="escolher-Letra">{(forca < 6) ? "Escolher Palavra" : "Reiniciar Jogo"}</Bottom>
                        <Sort data-identifier="word" forca={forca} style={{ color:`${cortexto}`}}>{(forca < 6) ? palavraEscondida : escolherLetra}</Sort>
                    </GameDiv>
                </Top>
                <Letras clicar={Clicar} letrasUsadas={letrasUsadas}/>
                <Chute escreverEscolha={advinhado} tryanswer={Tentar} advinhar={advinhar}/>
            </Box>
        </div>
    );
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Forca = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 300px;
   
    img{
        width: 400px;
        height: 100%;
    }`
const GameDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  const Bottom = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #39739D;
  margin: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #39739D;
  background-color: #E1ECF4;
`
const Sort = styled.h1`
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-top: 100px;`