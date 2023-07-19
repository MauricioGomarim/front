import { Container } from "./styles";
import foto from "../../../assets/brand.jpeg";
import { Button } from "../../../components/Button";
import { usePage } from "../../../hook/pages";
import { api } from "../../../services/api";

import { useEffect, useState } from "react";

export function ListagemMarcas() {
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
      <table>
        <thead>
          <tr>
            <th style={{ width: "100px" }}>Marcas</th>
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
                  style={{fontSize: "10px"}}
                  onClick={handleSetPage}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
