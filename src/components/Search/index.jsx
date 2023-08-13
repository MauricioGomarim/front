import { Container } from "./style"

import {BiSearchAlt2} from "react-icons/bi"


export function Search({icon,...rest}){
    return (
        <Container >
            <div className="content">
        {icon}
            
            <input placeholder="Procurar por produtos" {...rest}/>
            </div>

        </Container>
    )
}