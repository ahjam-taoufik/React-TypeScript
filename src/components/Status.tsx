import React from 'react'

type StatusProps={
    status:'loading'|'success'|'error'
}

const Status = (props:StatusProps) => {
   let message;
   if (props.status==='loading') {
        message='Loading...'
   } else if (props.status==='success') {
    message='Fetching data successfuly'
   }else if (props.status==='error') {
       message='some thing went wrong'
   }

    return (
        <div>
             {message}
        </div>
    )
}

export default Status
