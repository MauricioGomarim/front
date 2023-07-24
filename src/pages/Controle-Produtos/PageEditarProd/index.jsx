import { Container, Form, Foto, Content } from "./styles";
import { InputField } from "../../../components/InputField";
import { Button } from "../../../components/Button";
import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { ButtonAddProd } from "../../../components/ButtonAddProd";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";

import { api } from "../../../services/api";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import foto from "../../../assets/placeholder-img.jpg";
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


   const urlFormated =  avatar ? `${api.defaults.baseURL}/files/${avatar}` : foto;

  async function handleCadastrar() {

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("size", size);
    formData.append("amount", amount);
    formData.append("price", price);
    formData.append("image", image);

    await api
      .put(`/products/${id}`, formData)
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao editar o produto!");
        }
      })
      .then(alert("Produto editado com sucesso!"));

    navigate("/");
    return;
  }


  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setImage(file);

    const fileName = URL.createObjectURL(file);
    setAvatar(fileName);
  }

  useEffect(() => {
    async function buscarDadosProduto() {
      const response = await api.get(`/products/${id}`);
      setData(response.data);

      const {
        title,
        category,
        brand,
        description,
        size,
        amount,
        price,
        image,
      } = response.data;


      setTitle(title);
      setCategory(category);
      setBrand(brand);
      setDescription(description);
      setSize(size);
      setAmount(amount);
      setPrice(price);

      if(image){
        setAvatar(image);
      }

      setPrice(price);
    }
    buscarDadosProduto();

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
              <img src={urlFormated} />
              <input id="avatar" type="file" name="image" accept="image/*" onChange={handleChangeAvatar} />
            </label>
          </Foto>
          <div className="form-button">
            <Form>
              <div className="row1">
                <InputField
                  placeholder="teste"
                  title="Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="selectField">
                  <h1>Categoria</h1>
                  <select
                    name="select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option disabled>Selecione...</option>
                    {categories.map((categorie) => (
                      <option value={categorie.title}>{categorie.title}</option>
                    ))}
                  </select>
                </div>
                <div className="selectField">
                  <h1>Marca</h1>
                  <select
                    name="select"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option disabled selected>
                      Selecione...
                    </option>
                    {brands.map((brand) => (
                      <option value={brand.title}>{brand.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row2">
                <InputField
                  placeholder="teste"
                  title="Descrição"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="row3">
                <InputField
                  placeholder="teste"
                  title="Tamanho"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
                <InputField
                  placeholder="teste"
                  title="Qtd"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <InputField
                  placeholder="teste"
                  title="Preço por unidade"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </Form>

            <div className="row4">
              <Button title="Excluir" />
              <Button title="Confirmar" onClick={handleCadastrar} />
            </div>
          </div>
        </div>
      </Content>

      <ButtonAddProd />
      <DesenvolvidoPor />
    </Container>
  );
}
