import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLayout,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUZINDO </span> O VIM
            </h1>
            <p className="home-about-body">
            Olá, somos o VIM, seja bem vindo, nosso app ajuda deficientes visuais a se locomoverem de um jeito mas independente e seguro. 
              <br />
              <br />Nosso app utiliza de tecnologias avançadas de geolocalização e assistente de voz para guiar você em suas rotas diárias, oferecendo instruções precisas e em tempo real.
              <br />
              <br />Com nosso app, você pode explorar o mundo com mais confiança e autonomia!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>DISPONÍVEL EM:</h1>
            <p>
              Visite nossos <span className="purple">links </span>abaixo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VIM-Projeto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/visually_impaired_map?igsh=dTRzN3B5dHA5ZnVr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://visuallyimpairedmap.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillLayout />
                </a>
                </li>
                <li className="social-icons">
                <a
                  href="https://www.behance.net/visuallimpaire"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillLayout />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
