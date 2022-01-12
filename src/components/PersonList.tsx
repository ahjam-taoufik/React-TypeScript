import React from 'react'

type PersonListProps ={
   persons:{    
           first:string
           last:string
           age : number
      
   }[]

}


function PersonList(props:PersonListProps) {
    return (
        <div>
            {
            props.persons.map(person=>{
                return(

                    <h4 key={person.first}>{person.first} {person.last}</h4>  
                )

            })}
        </div>
    )
}

export default PersonList
