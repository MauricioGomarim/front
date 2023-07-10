import { Container } from "./styles";
import imgPlaceholder from "../../assets/download.jpg";

export function Header() {
  return (
    <Container>
      <img src={imgPlaceholder} />
      <div>
        <p>Bem vindo</p>
        <h1>Victor Costa</h1>
      </div>
    </Container>
  );
}
