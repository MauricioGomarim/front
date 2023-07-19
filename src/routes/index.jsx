import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.rotes';


import { useAuth } from "../hook/auth";

export function Routes(){

    const { user } = useAuth();

    return(
        <BrowserRouter> 
            { user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}