import React from 'react'
type reactNode ={
   children:React.ReactNode
}



const ReactNode = (props:reactNode) => {
    return (
        <div>
             {props.children}
        </div>
    )
}

export default ReactNode
