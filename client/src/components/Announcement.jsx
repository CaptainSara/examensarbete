import React from 'react'
import { useQuery, gql } from '@apollo/client'
//import { Link } from 'react-router-dom'

const ANNOUNCE = gql`
query get {
  announcements {
    data {
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

export default function Announcement() {

  const {data, loading, error} = useQuery(ANNOUNCE)
  if(loading) return "Loading..."
  if(error) return "Error"

  return (
    <div className='announcement'>
        {data.announcements.data.map((value) => (
          <div key={value.id} className="announce-card">
            <p className='published-at'>{value.attributes.publishedAt.slice(0, 10)} {value.attributes.publishedAt.slice(11, 16)}</p>
            <h3><b>{value.attributes.title}</b></h3>
            <p>{value.attributes.message}</p>
            {/* <p>{value.attributes.message.substring(0, 200)}... <Link to={`/announcements/${value.id}`}>Read more</Link></p> */}
            <p>Published By: {value.attributes.publishedBy}</p>
          </div>
          
        ))}

      
      </div>
    
  )
}
