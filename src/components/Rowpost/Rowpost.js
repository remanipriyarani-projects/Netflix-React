import React, {useState,useEffect} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../constants/constants'
import YouTube from 'react-youtube'
function Rowpost(props) {
  const[movies,setMovies]=useState([]);
  const[urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    }).catch((err)=>{
      alert('Network Error',err);
    })
  },[]);
  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie = (id)=>{
      console.log("id==",id);
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
        }else{
          console.log("array is empty")
        }
      })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
       <div className='posters'>
    {movies.map(obj =>{
    return(<img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>)
    }
   )}
        </div>
       {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
   
  )
   
}

export default Rowpost
