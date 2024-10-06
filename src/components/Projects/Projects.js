import React from "react";
import { Container, Row, } from "react-bootstrap";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Vídeo para <strong className="purple">ilustração </strong>
        </h1>
        <p style={{ color: "white" }}>
          Exemplo de como seria a acessibilidade para uma pessoa com deficiência visual:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <iframe width="260" height="515" src="https://www.youtube.com/embed/y5KMXSdeBoQ?si=rTf2FHF3fUuyikoz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
