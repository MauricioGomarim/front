import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { ButtonAddProd } from "../../../components/ButtonAddProd";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";

import { ContentForm, Container } from "./styles";
import foto from "../../../assets/brand.jpeg";
import { Button } from "../../../components/Button";
import { usePage } from "../../../hook/pages";
import { api } from "../../../services/api";

import { useEffect, useState } from "react";

export function ListagemCategoria() {
  const { page, setPage } = usePage();
  const [brands, setBrands] = useState([""]);
  function handleSetPage() {
    setPage("Editar");
    return;
  }

  useEffect(() => {
    async function fetchBrands() {
      const response = await api.get(`/brand?title=`);
      setBrands(response.data);
    }
    fetchBrands();
  }, []);

  return (
    <Container>
      <Brand />
      <Menu />
      <Header />
      <ContentForm>
        <table>
          <thead>
            <tr>
              <th style={{ width: "100px" }}>Categorias</th>
              <th style={{ width: "100px" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr>
                <td>{brand.title}</td>
                <td>
                  <Button
                    title="Editar"
                    style={{ fontSize: "10px" }}
                    onClick={handleSetPage}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentForm>

      <ButtonAddProd />
      <DesenvolvidoPor />
    </Container>
  );
}
