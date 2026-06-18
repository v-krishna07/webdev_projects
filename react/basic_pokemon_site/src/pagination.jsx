import React from 'react'

export default function Pagination({Next,Prev}) {
  return (
    <div>
      {Prev && <button onClick={Prev}>Previous</button>}  
      {Next && <button onClick={Next}>Next</button>}
    </div>
  )
}
