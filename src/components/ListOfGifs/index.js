import React from "react"
import Gif from "../Gif"
import './ListOfGifs.css'

export default function ListOfGifs({ gifs }) {

  return <div className='ListOfGifs'>
    {
      gifs.map(({ id, title, url, ...restOfGif }) =>
        <Gif
          className='ListOfGifs-item'
          key={id}
          title={title}
          url={url}
          id={id}
          extraInfo={restOfGif}
        />
      )
    }
  </div>

}
