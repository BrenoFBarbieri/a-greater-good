import {
  Container,
  ContainerLogo,
  ContainerOptions,
  Content,
} from "./styles.js";

export default function Header() {
  return (
    <Container>
      <Content>
        <ContainerLogo>My app</ContainerLogo>
        <ContainerOptions>
          <a href="#">Início</a>
          <a href="#about">Sobre</a>
        </ContainerOptions>
      </Content>
    </Container>
  );
}
