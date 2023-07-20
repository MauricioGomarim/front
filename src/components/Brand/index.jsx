import {Container } from "./styles"
import brandVictor from "../../assets/brand.jpeg"
import { Link } from "react-router-dom";

export function Brand({...rest}){
    return (
        <Container {...rest}>
            <Link to="/">
            <img src={brandVictor} alt="" />
            </Link>
            
        </Container>
    )
}