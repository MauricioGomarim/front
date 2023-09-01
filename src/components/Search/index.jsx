import { Container } from "./style"

import {BiSearchAlt2} from "react-icons/bi"


export function Search({icon, title, chidren, ...rest}){
    return (
        <Container >
            {
                title ? (
                    <div className="text-search">
                    <h1>{title}</h1>
                </div>
                ) : (<></>)
            }
           
            <div className="content">
        {icon}
            
            <input {...rest}/>
            </div>

        </Container>
    )
}