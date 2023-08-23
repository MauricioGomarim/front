import { Container } from "./styles";
import { RiArrowDownSLine, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { usePage } from "../../hook/pages";
import { Link } from "react-router-dom";

export function Menu({ page, setPage, ...rest }) {
  const { active, setActive } = usePage("");

  return (
    <Container {...rest}>
      <div>
        <div
          className="title-accordion"
          onClick={() =>
            active == "produtos" ? setActive("") : setActive("produtos")
          }
        >
          <h1>Controle produtos</h1>
          <span>
            {active === "produtos" ? (
              <span>
                <RiCloseFill />
              </span>
            ) : (
              <span>
                <RiArrowDownSLine />
              </span>
            )}
          </span>
        </div>
        <div
          className={
            (active === "produtos" ? "show" : " ") + " accordionContent"
          }
        >
          <ul>
            <li
              className={page === "cadastroProduto" ? "Active" : " "}
              onClick={() => setPage("cadastroProduto")}
            >
              <Link to="/cadastro-prod">Cadastrar produto</Link>
            </li>
            <li
              className={page === "VerProd" ? "Active" : " "}
              onClick={() => setPage("VerProd")}
            >
              <Link to="/produtos">Listagem produtos</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div
          className="title-accordion"
          onClick={() =>
            active == "marcas" ? setActive("") : setActive("marcas")
          }
        >
          <h1>Marcas</h1>
          <span>
            {active === "marcas" ? (
              <span>
                <RiCloseFill />
              </span>
            ) : (
              <span>
                <RiArrowDownSLine />
              </span>
            )}
          </span>
        </div>
        <div
          className={(active === "marcas" ? "show" : " ") + " accordionContent"}
        >
          <ul>
            <li
              className={page === "cadastroMarca" ? "Active" : " "}
              onClick={() => setPage("cadastroMarca")}
            >
              <Link to="/cadastro-marca">Cadastrar marca</Link>
            </li>
            <li
              className={page === "VerMarca" ? "Active" : " "}
              onClick={() => setPage("VerMarca")}
            >
              <Link to="/marcas">Listagem marcas</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div
          className="title-accordion"
          onClick={() =>
            active == "categoria" ? setActive("") : setActive("categoria")
          }
        >
          <h1>Categoria</h1>
          <span>
            {active === "categoria" ? (
              <span>
                <RiCloseFill />
              </span>
            ) : (
              <span>
                <RiArrowDownSLine />
              </span>
            )}
          </span>
        </div>
        <div
          className={
            (active === "categoria" ? "show" : " ") + " accordionContent"
          }
        >
          <ul>
            <li
              className={page === "cadastroCategoria" ? "Active" : " "}
              onClick={() => setPage("cadastroCategoria")}
            >
              <Link to="/cadastro-categoria">Cadastrar categoria</Link>
            </li>
            <li
              className={page === "VerCategoria" ? "Active" : " "}
              onClick={() => setPage("VerCategoria")}
            >
              <Link to="/categorias">Listagem categorias</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div
          className="title-accordion"
          onClick={() =>
            active == "clientes" ? setActive("") : setActive("clientes")
          }
        >
          <h1>Controle Clientes</h1>
          <span>
            {active === "clientes" ? (
              <span>
                <RiCloseFill />
              </span>
            ) : (
              <span>
                <RiArrowDownSLine />
              </span>
            )}
          </span>
        </div>
        <div
          className={
            (active === "clientes" ? "show" : " ") + " accordionContent"
          }
        >
          <ul>
            <li
              className={page === "cadastroCategoria" ? "Active" : " "}
              onClick={() => setPage("cadastroCategoria")}
            >
              <Link to="/cadastro-categoria">Cadastrar cliente</Link>
            </li>
            <li
              className={page === "VerCategoria" ? "Active" : " "}
              onClick={() => setPage("VerCategoria")}
            >
              <Link to="/clientes">Listagem clientes</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
