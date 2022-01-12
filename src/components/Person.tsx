import React from 'react'

type PersonType={
    name:{
        first:string
        last:string
        age:number
    }
}


function Person(props:PersonType) {
    return (
        <div>  
           <h3>your first name :  {props.name.first}</h3>   
           <h3> your last name  :  {props.name.last}</h3>  
           <h3>your age name   : {props.name.age} years ago</h3>  
        </div>
    )
}

export default Person
