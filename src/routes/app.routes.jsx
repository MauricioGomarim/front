import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { PageEditarProd } from '../pages/Controle-Produtos/PageEditarProd'
import { PageCadastroProd } from '../pages/Controle-Produtos/PageCadastroProd'
import { ListagemProdutos } from '../pages/Controle-Produtos/ListagemProdutos'

import { PageCadastroMarca } from '../pages/Controle-Marcas/PageCadastroMarca'
import { ListagemMarcas } from '../pages/Controle-Marcas/ListagemMarcas'

import { PageCadastroCategoria } from '../pages/Controle-Categorias/PageCadastroCategoria'
import { ListagemCategoria } from '../pages/Controle-Categorias/ListagemCategorias'




export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editar-prod/:id" element={<PageEditarProd />} />

            <Route path="/cadastro-prod" element={<PageCadastroProd />} />
            <Route path="/produtos" element={<ListagemProdutos />} />

            <Route path="/cadastro-marca" element={<PageCadastroMarca />} />
            <Route path="/marcas" element={<ListagemMarcas />} />

            <Route path="/cadastro-categoria" element={<PageCadastroCategoria />} />
            <Route path="/categorias" element={<ListagemCategoria />} />



        </Routes>
    )
}
