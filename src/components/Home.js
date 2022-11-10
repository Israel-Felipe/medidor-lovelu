import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="LOVELU"></img>
      <Botoes>
        {/*         <h1>
          Olá! Este aplicativo foi feito para te ajudar a descobrir o aro ideal
          para o seu dedo.
        </h1> */}
        <Link to={"/Calibragem"}>
          <button>Medir com um anel</button>
        </Link>

        <Link to={"/InstrucaoSemAnel"}>
          <Botao2>Medir com um barbante</Botao2>
        </Link>
      </Botoes>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 15vh;
  left: 10vw;
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;

  @media (min-width: 1500px) {
    flex-direction: inherit;
  }

  img {
    width: 60vw;
    max-width: 500px;

    @media (min-width: 1500px) {
      max-width: 600px;
    }
  }
`;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  @media (min-width: 1500px) {
    height: 100%;
    width: 100%;
  }

  button {
    width: 60vw;
    height: auto;
    padding: 20px;
    background-color: rgba(114, 115, 118);
    color: #ffffff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    @media (min-width: 1500px) {
      margin: 0 5%;
      width: 90%;
      height: 200px;
      font-size: 40px;
    }
  }
`;

const Botao2 = styled.button`
  /* background-color: rgba(238, 202, 196) !important; rosa */
  color: #ffffff;
`;
