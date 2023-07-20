import { Container, Form, Foto, Content } from "./styles";
import { InputField } from "../../../components/InputField";
import { Button } from "../../../components/Button";
import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { ButtonAddProd } from "../../../components/ButtonAddProd";

import { api } from "../../../services/api"

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import foto from "../../../assets/brand.jpeg";
import { usePage } from "../../../hook/pages";

export function PageEditarProd() {
  const { page, setPage } = usePage();
  const { id } = useParams();

  const [data, setData] = useState("");


  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    async function buscarDadosPrato() {
      const response = await api.get(`/products/${id}`);
      setData(response.data);

      const { title, category, brand, description, size, amount, price, image } =
        response.data;

      setTitle(title);
      setCategory(category);
      setBrand(brand);
      setDescription(description);
      setSize(size);
      setAmount(amount);
      setPrice(price);
      setImage(image);
      setPrice(price);
    }
    buscarDadosPrato();


    async function fetchCategorys() {
      const responseBrand = await api.get(`/brand`);
      setBrands(responseBrand.data);

      const responseCategory = await api.get(`/category`);
      setCategories(responseCategory.data);
    }
    fetchCategorys();
  }, []);

  return (
    <Container>
      <Brand />
      <Header />
      <Menu page={page} setPage={setPage} />
      <Content>
        <h1
          style={{
            paddingLeft: "50px",
            marginTop: "20px",
            color: "black",
            fontSize: "30px",
          }}
        >
          Editar produto
        </h1>
        <div className="container-form">
          <Foto>
            <label htmlFor="avatar">
              Foto produto
              <img src={foto} />
              <input id="avatar" type="file" />
            </label>
          </Foto>
          <div className="form-button">
            <Form>
              <div className="row1">
                <InputField placeholder="teste" title="Name" value={title} />
                <div className="selectField">
                  <h1>Categoria</h1>
                  <select name="select" value={category}>
                    <option disabled>
                      Selecione...
                    </option>
                    {
                      categories.map((categorie) => (
                        <option value={categorie.title}>{categorie.title}</option>
                      ))
                    }
       
                  </select>
                </div>
                <div className="selectField">
                  <h1>Marca</h1>
                  <select name="select" value={brand}>
                    <option disabled selected>
                      Selecione...
                    </option>
                    {
                      brands.map((brand) => (
                        <option value={brand.title}>{brand.title}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="row2">
                <InputField placeholder="teste" title="Descrição" value={description}/>
              </div>

              <div className="row3">
                <InputField placeholder="teste" title="Tamanho" value={size} />
                <InputField placeholder="teste" title="Qtd" value={amount}/>
                <InputField placeholder="teste" title="Preço por unidade" value={price} />
              </div>
            </Form>

            <div className="row4">
              <Button title="Excluir" />
              <Button title="Confirmar" />
            </div>
          </div>
        </div>
      </Content>

      <ButtonAddProd />
    </Container>
  );
}
