import React from 'react'
import { useQuery, gql } from '@apollo/client'

const FOOTER = gql`
query get {
  footers {
   data {
     id,
     attributes {
       text
       
     }
   }
 }
}`

export default function Footer() {

  const {data, loading, error} = useQuery(FOOTER)
  if(loading) return "Loading..."
  if(error) return "Error"

  return (
    <div className="footer">
      <div className="footer-quotes">
      {data.footers.data.map((value) => (
          <div key={value.id} >
            <p>{value.attributes.text}</p>
          </div>
          
        ))}
      </div>
    </div>
  )
}


