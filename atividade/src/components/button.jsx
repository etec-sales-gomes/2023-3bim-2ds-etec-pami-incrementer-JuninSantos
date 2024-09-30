import './button.css'

export function Botao(props){
    return(
        <>
        <button className="botoes" onClick={props.onClick}>{props.text}</button>
        </>
    )
}