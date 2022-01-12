

type GreepType={
    name:string
}

function Greet(props:GreepType) {
    return (
        <div>
              <h2> Hello {props.name} </h2>
        </div>
    )
}

export default Greet
