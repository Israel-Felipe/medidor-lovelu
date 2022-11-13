import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

export default function Home() {
  return (
    <Main>
      <Container>
        <img src={logo} alt="LOVELU"></img>
        <Botoes>
          <Link to={"/instrucao-calibragem"}>
            <button>Medir com um anel</button>
          </Link>

          <Link to={"/instrucao-sem-anel"}>
            <Botao2>Medir com um barbante</Botao2>
          </Link>
        </Botoes>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 80vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (min-width: 1500px) {
    flex-direction: inherit;
    height: 900px;
  }

  img {
    width: auto;
    max-height: 200px;

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
