import React from 'react';
import { Tooltip } from 'react-tippy';


export default function Apod(props) {


  console.log(props.item)
  if (props.item.media_type === "image"){
  return (
    <article id={props.item.date} className='apod-article'>
      <Tooltip title={props.item.date} position='left-start' theme='dark' animation='perspective'>
        <h1 className='apod-header'>{props.item.title}</h1>
      </Tooltip>
      <Tooltip title={props.item.copyright} position='top-start' theme='light' animation='perspective'>
        <img className='apod-img' src={props.item.url} alt={props.item.title} />
      </Tooltip>
        <p className='apod-explanation'>{props.item.explanation}</p>
    </article>
  )
} else if (props.item.media_type === "video"){
  return (<article id={props.item.date} className='apod-article'>
  <Tooltip title={props.item.date} position='left-start' theme='light' animation='perspective'>
    <h1 className='apod-header'>{props.item.title}</h1>
  </Tooltip>
  <Tooltip title={props.item.copyright} position='top-start' theme='light' animation='perspective'>
    <iframe
        className='apod-stream'
        src={props.item.url}
        width="640" 
        height="360"
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen
        title={props.item.title}
      />{" "}
  </Tooltip>  
  <p className='apod-explanation'>{props.item.explanation}</p>
</article>)
}}


/* 
<li className='list-group-item'>
        {props.item.title}<span className='float-end'>{addStars(props.item.rating)}<button className='btn btn-sm btn-danger mx-3' onClick={() => props.deleteMovie(props.item.id)}>X</button></span>
    </li>

     {
        "date": "2022-05-23",
        "explanation": "This picture of Andromeda shows not only where stars are now, but where stars will soon be. Of course, the big, beautiful Andromeda Galaxy, M31, is a spiral galaxy -- and a mere 2.5 million light-years away.  Both space-based and ground-based observatories have been here combined to produce this intriguing composite image of Andromeda, at wavelengths both inside and outside normally visible light. The visible light shows where M31's stars are now -- as highlighted in white and blue hues and imaged by the Hubble, Subaru, and Mayall telescopes.  The infrared light shows where M31's future stars will soon form -- as highlighted in orange hues and imaged by NASA's Spitzer Space Telescope.  The infrared light tracks enormous lanes of dust, warmed by stars, sweeping along Andromeda's spiral arms.  This dust is a tracer of the galaxy's vast interstellar gas -- the raw material for future star formation.  These new stars will likely form over the next hundred million years, surely well before Andromeda merges with our Milky Way Galaxy in about 5 billion years.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/M31_HubbleSpitzerGendler_2000.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "The Once and Future Stars of Andromeda",
        "url": "https://apod.nasa.gov/apod/image/2205/M31_HubbleSpitzerGendler_960.jpg"
      }
*/