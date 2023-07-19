import { Container } from "./styles";
import { RiArrowDownSLine, RiCloseFill } from "react-icons/ri";
import { useState } from "react"
import { usePage } from "../../hook/pages"

export function Menu({ page ,setPage, ...rest }) {

  const {active , setActive} = usePage("")

  return (
    <Container {...rest}>
      <div>
      <div className="title-accordion" onClick={() => setActive("Cadastrar produtos")}>
        <h1>Controle produtos</h1>
        <span>
          {active === "Cadastrar produtos" ? (
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
      <div className={(active === "Cadastrar produtos" ? "show" : " ") + " accordionContent"}>
        <ul>
          <li className={(page === "cadastroProduto" ? "Active" : " ")} onClick={() => setPage("cadastroProduto")}>Cadastrar produto</li>
          <li className={(page === "VerProd" ? "Active" : " ")}  onClick={() => setPage("VerProd")}>Ver produtos</li>
        </ul>
      </div>
      </div>

      <div>
      <div className="title-accordion" onClick={() => setActive("Controle de caixa")}>
        <h1>Marcas</h1>
        <span>
          {active === "Controle de caixa" ? (
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
      <div className={(active === "Controle de caixa" ? "show" : " ") + " accordionContent"}>
        <ul>
          <li className={(page === "cadastroMarca" ? "Active" : " ")} onClick={() => setPage("cadastroMarca")}>Cadastrar marca</li>
          <li className={(page === "VerMarca" ? "Active" : " ")}  onClick={() => setPage("VerMarca")}>Ver marcas</li>
        </ul>
      </div>
      </div>

    </Container>
  );
}
