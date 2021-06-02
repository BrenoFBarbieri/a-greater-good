import {
  Container,
  ContainerImg,
  ContainerInfo,
  ContainerName,
  ContainerRef,
  Content,
  Button,
} from "./styles.js";
export default function Card() {
  const img1 =
    "https://www.childfundbrasil.org.br/blog/wp-content/uploads/2017/08/20264946_1485752918149009_6654822184429452139_n.jpg";

  const name = "Fulano da Silva";

  const msg = `Meu nome é Fulano Da Silva, moro no interior de SP e estou passando
    necessidades devido ao covid, perdi meu emprego e tenho 5 filhas para
    criar, não estou pedindo nem dinheiro, apenas uma cesta basica já
    seria o suficiente para salvar minha familia.`;

  return (
    <Container>
      <ContainerImg img={img1} />
      <ContainerName>{name}</ContainerName>
      <Content>
        <ContainerInfo>"{msg}"</ContainerInfo>
        <ContainerRef>By - {name}</ContainerRef>
        <Button>Click aquí para fazer uma doação</Button>
      </Content>
    </Container>
  );
}
