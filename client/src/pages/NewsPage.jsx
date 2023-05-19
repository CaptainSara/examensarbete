import React from 'react'
import { useQuery, gql } from '@apollo/client'
//import Header from "../components/Header";
//import { useParams } from 'react-router-dom';

const ANNOUN = gql`
query get {
  announcements {
    data  {
      id,
      attributes {
				title, 
        message,
        publishedBy,
        publishedAt
        
      }
    }
  }
}`



export default function NewsPage() {
  //const {id} = useParams()
  const {loading, error, data} = useQuery(ANNOUN)
  if(loading) return "Loading..."
  if(error) return "Error"

  //const { id } = data.announcements.data.attribute;
console.log(data)

  return (

    <div className='announcement'>
      <p>{data.announcements.data.id}</p>
      
    </div>
    
    
  )
}


