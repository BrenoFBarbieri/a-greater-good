import { Container, Info, Img, Ref, Content, Button } from "./styles.js";
export default function Card(props) {
  const { obj, setModal, setObjRef } = props;

  const handleButton = () => {
    setObjRef(obj);
    setModal(true);
  };

  return (
    <Container>
      <Img src={obj.img} alt={obj.name + obj.msg} />
      <Content>
        <Ref>
          <b>{obj.name}</b>
        </Ref>
        <Info>"{obj.msg}"</Info>
        <Button onClick={() => handleButton()}>Quero Doar</Button>
      </Content>
    </Container>
  );
}
