// import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerLogo,
  ContainerOptions,
  Content,
} from "./styles.js";

export default function Header(props) {
  const { setIdScreen } = props;

  const handleOptionsClick = (id) => {
    setIdScreen(id);
  };

  return (
    <Container>
      <Content>
        <ContainerLogo onClick={() => handleOptionsClick(0)}>
          My app
        </ContainerLogo>

        <ContainerOptions>
          <span onClick={() => handleOptionsClick(0)}>Início</span>
          <span onClick={() => handleOptionsClick(1)}>Sobre</span>
        </ContainerOptions>
      </Content>
    </Container>
  );
}
