import { Container } from "./styles";
import foto from "../../../assets/brand.jpeg";
import { Button } from "../../../components/Button";
import { usePage } from "../../../hook/pages";
import { api } from "../../../services/api";

import { useEffect, useState } from "react";

export function ListagemCategoria() {
  const { page, setPage } = usePage();
  const [categories, setCategories] = useState([""]);
  function handleSetPage() {
    setPage("Editar");
    return;
  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get(`/category`);
      setCategories(response.data);
    }
    fetchCategories();
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
          {categories.map((categorie) => (
            <tr>
              <td>{categorie.title}</td>
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
