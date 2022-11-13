import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import arraste from "../imgs/arraste.png";

export default function Calibragem() {
  const { tamCartao, setTamCartao } = useContext(UserContext);
  return (
    <Container>
      <Cartao largura={`${tamCartao}px`}></Cartao>

      <Botoes>
        <img src={arraste}></img>
        <input
          type="range"
          name="tamanho"
          min="100"
          max="350"
          step="1"
          value={tamCartao}
          onChange={(e) => setTamCartao(e.target.value)}
        />
        <Link to={"/medicao-com-anel"}>
          <button>Pronto, já calibrei!</button>
        </Link>
        <Link to={"/instrucao-calibragem"}>
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
    align-items: flex-start;
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

const Cartao = styled.div`
  margin-top: 10%;
  width: 90vw;
  height: ${(props) => props.largura};
  border-top: 5px solid rgba(114, 115, 118);
  border-bottom: 5px solid rgba(114, 115, 118);
  background-color: rgba(255, 255, 255, 0.5);
`;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2vh;

  input {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 20px;
    background: rgba(238, 202, 196);
    outline: none;
    width: 60vw;
    height: 10px;
    margin: 10px 20px;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgba(114, 115, 118);
    cursor: pointer;
  }

  input::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgba(114, 115, 118);
    cursor: pointer;
  }

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

  img {
    width: 150px;
    margin-left: -50vw;
    margin-bottom: -40px;
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
