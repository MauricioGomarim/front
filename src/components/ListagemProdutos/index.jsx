import { Container } from "./styles";
import foto from "../../assets/brand.jpeg";
import { Button } from "../../components/Button";

export function ListagemProdutos() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th style={{ width: "100px" }}>Imagem</th>
            <th style={{ width: "100px" }}>Código</th>
            <th>Nome</th>
            <th style={{ width: "150px" }}>Preço</th>
            <th style={{ width: "100px" }}>Tamanho</th>
            <th style={{ width: "150px" }}>Quantidade</th>
            <th style={{ width: "150px" }}>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <img src={foto} />
              </div>
            </td>
            <td>00010</td>
            <td>Blusa vermelha</td>
            <td>50R$</td>
            <td>G</td>
            <td>20</td>
            <td>
              <Button title="Editar" style={{ fontSize: "15px" }} />
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <img src={foto} />
              </div>
            </td>
            <td>00010</td>
            <td>Blusa vermelha</td>
            <td>50R$</td>
            <td>G</td>
            <td>20</td>
            <td>
              <Button title="Editar" style={{ fontSize: "15px" }} />
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <img src={foto} />
              </div>
            </td>
            <td>00010</td>
            <td>Blusa vermelha</td>
            <td>50R$</td>
            <td>G</td>
            <td>20</td>
            <td>
              <Button title="Editar" style={{ fontSize: "15px" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
