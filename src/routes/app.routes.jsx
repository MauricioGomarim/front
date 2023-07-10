import { Routes, Route } from 'react-router-dom';

import { AddProd } from '../pages/AddProd'
import { Home } from '../pages/Home'

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addprod" element={<AddProd />} />
        </Routes>
    )
}
