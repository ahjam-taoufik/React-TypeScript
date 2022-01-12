

type GreepType={
    name:string,
    messageCount:number
    isLogged:boolean
}

function Greet(props:GreepType) {
    return (
        <div>
            {props.isLogged? <h2> Hello {props.name} you have {props.messageCount} Messages </h2>:'Hello Guest'}
             
        </div>
    )
}

export default Greet
