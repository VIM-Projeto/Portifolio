import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {
  AiFillGithub
} from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            O projeto <span className="purple">Visually Impaired Map (VIM) </span>
            é uma iniciativa dedicada a auxiliar pessoas com <span className="purple"> deficiência visual</span> a chegarem a locais específicos. Por meio de um aplicativo para smartphones, os usuários podem indicar o <span className="purple">destino desejado</span> por comando de voz.
            <br />
            <br />
            Utilizando o alto-falante do dispositivo, o aplicativo fornecerá instruções verbais para o usuário, indicando quando seguir em frente, virar à esquerda, virar à direita ou voltar, conforme necessário.
            <br />
            <br />
            Com toda essa iniciativa, nosso objetivo é:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Melhorar a qualidade de vida de deficientes visuais
            </li>
            <li className="about-activity">
              <ImPointRight /> Inclusão para pessoas cegas
            </li>
            <li className="about-activity">
              <ImPointRight /> Aumentar a acessibilidade em ambientes urbanos
            </li>
            <li className="about-activity">
              <ImPointRight /> Incentivar a autonomia
            </li>
          </ul>
          <h1>COLABORADORES</h1>
          <ul>
            <li>
              Kauê <a href="https://github.com/KaueFernandes01" style={{ color: "white" }}target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            </li>
            <li>
              Victor <a href="https://github.com/vtoorz" style={{ color: "white" }}target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            </li>
            <li>
              Leone <a href="https://github.com/LeoneGB" style={{ color: "white" }}target="_blank"rel="noopener noreferrer"><AiFillGithub /></a>
            </li>
            <li>
              Antony <a href="https://github.com/antonygxavier" style={{ color: "white" }}target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            </li>
            <li>
              Wendell <a href="https://github.com/WendellD3v/" style={{ color: "Gold" }}target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            </li>
            <li>
              Thiago <a href="https://github.com/thvct" style={{ color: "white" }}target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
