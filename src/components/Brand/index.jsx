import {Container } from "./styles"
import brandVictor from "../../assets/brand.jpeg"
import { Link } from "react-router-dom";

export function Brand({...rest}){
    return (
        <Container {...rest}>
            <a>
            <img src={brandVictor} alt="" />
            </a>
            
        </Container>
    )
}