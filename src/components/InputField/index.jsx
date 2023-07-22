import {Container} from "./styles"


export function InputField({title, widthField, ...rest}){
    return(
        <Container style={widthField}  >
            <h1>{title}</h1>
            <input {...rest}/>
        </Container>
    )
}