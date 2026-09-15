import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/MovieSlice'

const Movies = () => {
    const movies = useSelector((state)=> state.movies.movies)
    const dispatch = useDispatch(state=>state.movies.movies)
  return (
    <div>
      {movies.length > 0 && movies.map((m)=>(
        <div key={m.id}>
            <h3>{m.title}</h3>
            <button onClick={()=>{
                dispatch(remove(m.id))
            }}>Del</button>
        </div>
      ))}
    </div>
  )
}

export default Movies
