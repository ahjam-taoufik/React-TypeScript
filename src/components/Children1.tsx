type childProps={

 children:string
}




const Children1 = (props:childProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Children1
