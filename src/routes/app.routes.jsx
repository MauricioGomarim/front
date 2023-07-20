import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { PageEditarProd } from '../pages/Controle-Produtos/PageEditarProd'
import { PageCadastroProd } from '../pages/Controle-Produtos/PageCadastroProd'
import { ListagemProdutos } from '../pages/Controle-Produtos/ListagemProdutos'




export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editar-prod/:id" element={<PageEditarProd />} />
            <Route path="/cadastro-prod" element={<PageCadastroProd />} />
            <Route path="/produtos" element={<ListagemProdutos />} />

        </Routes>
    )
}
