import { Container } from "./style"

import {BiSearchAlt2} from "react-icons/bi"


export function Search({...rest}){
    return (
        <Container>
            <div className="content">
            <BiSearchAlt2 />
            <input placeholder="Procurar por produtos" {...rest}/>
            </div>

        </Container>
    )
}