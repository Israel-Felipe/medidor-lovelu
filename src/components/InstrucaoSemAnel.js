import styled from "styled-components";
import { Link } from "react-router-dom";

import gif from "../imgs/medir-com-barbante.gif";

export default function Calibragem() {
  return (
    <Container>
      <ImgGif>
        <img src={gif} alt="instrucao" />
      </ImgGif>

      <Instrucoes>
        <h2>Instrução:</h2>
        <h3> 1 - Enrole um fio em seu dedo.</h3>
        <h3> 2 - Marque o ponto onde se encontraram.</h3>
        <h3>3 - Com uma régua, meça a distância entre as marcações.</h3>
      </Instrucoes>

      <Botoes>
        <Link to={"/medicao-sem-anel"}>
          <button>Próximo passo</button>
        </Link>
        <Link to={"/"}>
          <Voltar>Voltar</Voltar>
        </Link>
      </Botoes>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 2.5vh;
  left: 5vw;
  width: 90vw;
  height: 95vh;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (min-width: 1300px) {
    flex-direction: initial;
    justify-content: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-weight: bold;
    line-height: 40px;
    font-size: 20px;

    @media (min-width: 1300px) {
      font-size: 70px;
      line-height: 150px;
    }
  }

  h3 {
    line-height: 22px;
    font-size: 16px;

    @media (min-width: 1300px) {
      font-size: 40px;
      line-height: 60px;
    }
  }
`;

const ImgGif = styled.div`
  width: 80vw;
  height: auto;
  margin: 3vh 0;

  img {
    border-radius: 10px;
    max-height: 100%;
    max-width: 100%;
    max-width: 500px;

    @media (min-width: 1300px) {
      max-width: 600px;
      margin: 5% 0 20% 12%;
    }
  }
`;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 2vh;

  button {
    width: 80vw;
    height: auto;
    margin: 20px;
    padding: 20px;
    background-color: rgba(114, 115, 118);
    color: #ffffff;
    border-radius: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    cursor: pointer;
  }
`;

const Voltar = styled.div`
  display: flex;
  align-items: center;
  color: rgba(114, 115, 118, 0.9);
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 3vh;
`;

const Instrucoes = styled.div`
  width: 80vw;
  text-align: left;
  color: rgba(114, 115, 118);

  @media (min-width: 1300px) {
    margin: 5% 5% 20% 0;
  }
`;
