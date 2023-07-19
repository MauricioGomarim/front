import {Container} from "./styles"

export function Button({title, colorButton, colorFont,  ...rest}){
    return(
        <Container>
            <button {...rest} style={{backgroundColor: colorButton, color:colorFont}}>
               {title}
            </button>
        </Container>
    )
}