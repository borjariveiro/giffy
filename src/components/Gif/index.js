import React from 'react'
import './Gif.css'
import Fav from 'components/Fav'
import { Link } from 'wouter'

function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <div className='Gif-buttons'>
        <Fav id={id} />
      </div>
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
