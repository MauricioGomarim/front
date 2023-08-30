import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { PageEditarProd } from '../pages/Controle-Produtos/PageEditarProd'
import { PageCadastroProd } from '../pages/Controle-Produtos/PageCadastroProd'
import { ListagemProdutos } from '../pages/Controle-Produtos/ListagemProdutos'

import { PageCadastroMarca } from '../pages/Controle-Marcas/PageCadastroMarca'
import { PageEditarMarca } from '../pages/Controle-Marcas/PageEditarMarca'
import { ListagemMarcas } from '../pages/Controle-Marcas/ListagemMarcas'

import { PageCadastroCategoria } from '../pages/Controle-Categorias/PageCadastroCategoria'
import { PageEditarCategoria } from '../pages/Controle-Categorias/PageEditarCategoria'
import { ListagemCategorias } from '../pages/Controle-Categorias/ListagemCategorias'

import { PageCadastroClient } from '../pages/Controle-Client/PageCadastroClient'
import { PageEditarClient } from '../pages/Controle-Client/PageEditarClient'
import { ListagemClients } from '../pages/Controle-Client/ListagemClients'

import { SaidaPedidos } from '../pages/Controle-Saida-Produtos/SaidaPedidos'
import { PedidosFinalizados } from '../pages/Controle-Saida-Produtos/PedidosFinalizados'

import { PageCaixa } from '../pages/Controle-Caixa/PageCaixa'





export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editar-prod/:id" element={<PageEditarProd />} />

            <Route path="/cadastro-prod" element={<PageCadastroProd />} />
            <Route path="/produtos" element={<ListagemProdutos />} />

            <Route path="/cadastro-marca" element={<PageCadastroMarca />} />
            <Route path="/editar-marca/:id" element={<PageEditarMarca />} />
            <Route path="/marcas" element={<ListagemMarcas />} />

            <Route path="/editar-categoria/:id" element={<PageEditarCategoria />} />
            <Route path="/cadastro-categoria" element={<PageCadastroCategoria />} />
            <Route path="/categorias" element={<ListagemCategorias />} />

            <Route path="/caixa" element={<PageCaixa />} />

            <Route path="/clientes" element={<ListagemClients />} />
            <Route path="/editar-client/:id" element={<PageEditarClient />} />

            <Route path="/saida-produtos" element={<SaidaPedidos />} />
            <Route path="/pedidos-finalizados" element={<PedidosFinalizados />} />





        </Routes>
    )
}
