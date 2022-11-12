import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import cartao from "../imgs/cartao.png";

export default function Calibragem() {
  const { tamCartao, setTamCartao } = useContext(UserContext);
  return (
    <Container>
      <Instrucoes>
        <h2>Calibragem: </h2>
        <h3>
          Coloque um cartão em cima da sua tela e ajuste o tamanho da figura até
          que fique da mesma altura do seu cartão.
        </h3>
      </Instrucoes>

      <Ajuste>
        <Cartao largura={`${tamCartao}px`}>
          <img src={cartao} alt="calibragem" />
        </Cartao>
      </Ajuste>

      <Botoes>
        <input
          type="range"
          name="tamanho"
          min="250"
          max="400"
          step="1"
          value={tamCartao}
          onChange={(e) => setTamCartao(e.target.value)}
        />
        <Link to={"/MedicaoComAnel"}>
          <button>Pronto, já calibrei!</button>
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

const Instrucoes = styled.div`
  width: 80vw;
  text-align: left;
  color: rgba(114, 115, 118);
  margin: 3vh 0;

  @media (min-width: 1300px) {
    margin: 3%;
  }
`;

const Ajuste = styled.div`
  width: 90%;
  height: auto;
  max-height: 50vh;
  margin-bottom: 3vh;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Cartao = styled.div`
  width: 0vw;
  height: ${(props) => props.largura};
  border-radius: 10px;
  background-color: rgb(238, 202, 196);
  position: fixed;
  top: 25%;
  left: -10%;

  @media (min-width: 550px) {
    width: auto;
    left: 15vw;
    top: 20%;
  }

  @media (min-width: 1000px) {
    left: 25vw;
  }

  @media (min-width: 1300px) {
    width: auto;
    left: 55vw;
  }
  img {
    height: 100%;
    width: 100vw;

    @media (min-width: 550px) {
      width: auto;
    }
  }
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
`;

const Voltar = styled.div`
  display: flex;
  align-items: center;
  color: rgba(114, 115, 118, 0.9);
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 3vh;
`;
