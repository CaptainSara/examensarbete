import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'

const INFOLINKS = gql`
query get {
  infoLinks {
    data {
      id,
      attributes {
				title,
        href,
      }
    }
  }
}`

function SideBar() {

  const {data, loading, error} = useQuery(INFOLINKS)
  if(loading) return "Loading..."
  if(error) return "Error"

  return (
    <div className="sidebar">
      <h3 className='sidebar-title'>General Links</h3>
      <div>
        {data.infoLinks.data.map((value) => (
          <div key={value.id} className="section">
            <Link to={value.attributes.href} className="info-link">{value.attributes.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
