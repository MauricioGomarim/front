import {Container} from "./styles"


export function InputField({title , ...rest}){
    return(
        <Container >
            <h1>{title}</h1>
            <input {...rest}/>
        </Container>
    )
}