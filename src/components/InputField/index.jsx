import {Container} from "./styles"
import { IMaskInput } from "react-imask";

export function InputField({title, widthField, mask, placeholder, ...rest}){
    return(
        <Container style={widthField}  >
            <h1>{title}</h1>
            <IMaskInput mask={mask} placeholder={placeholder} {...rest} />
        </Container>
    )
}