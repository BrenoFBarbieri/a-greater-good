import {
  Container,
  ContainerImg,
  ContainerInfo,
  ContainerName,
  ContainerRef,
  Content,
  Button,
} from "./styles.js";
export default function Card(props) {
  const { name, msg, setLgShow } = props;
  const img1 =
    "https://www.childfundbrasil.org.br/blog/wp-content/uploads/2017/08/20264946_1485752918149009_6654822184429452139_n.jpg";

  return (
    <Container>
      <ContainerImg img={img1} />
      <Content>
        <ContainerInfo>"{msg}"</ContainerInfo>
        <ContainerRef>By - {name}</ContainerRef>
        <Button onClick={() => setLgShow(true)}>
          Click aquí para fazer uma doação
        </Button>
      </Content>
    </Container>
  );
}
