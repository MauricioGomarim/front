import { Container, Form, Foto } from "./styles";
import { InputField } from "../InputField";
import { Button } from "../Button";
import foto from "../../assets/brand.jpeg";

export function PageCadastroProd() {
  return (
    <Container>
      <Foto>
        <label htmlFor="avatar">
          Foto produto
          <img src={foto} />
          <input id="avatar" type="file" />
        </label>
      </Foto>
      <Form>
        <div className="row1">
          <InputField placeholder="teste" title="Name" />
          <div className="selectField">
            <h1>Categoria</h1>
            <select name="select">
              <option disabled selected>
                Selecione...
              </option>
              <option value="Refeição">Refeição</option>
              <option value="Bebida">Bebida</option>
              <option value="Sobremesa">Sobremesa</option>
            </select>
          </div>
          <div className="selectField">
            <h1>Marca</h1>
            <select name="select">
              <option disabled selected>
                Selecione...
              </option>
              <option value="Refeição">Refeição</option>
              <option value="Bebida">Bebida</option>
              <option value="Sobremesa">Sobremesa</option>
            </select>
          </div>
        </div>
        <div className="row2">
          <InputField placeholder="teste" title="Descrição" />
        </div>

        <div className="row3">
          <InputField placeholder="teste" title="Tamanho" />
          <InputField placeholder="teste" title="Qtd" />
          <InputField placeholder="teste" title="Preço por unidade" />
        </div>
      </Form>

      <div className="row4">
        <Button title="Cadastrar" />
      </div>
    </Container>
  );
}
