import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Store/MovieSlice'

const AddMovies = () => {
    const [m, setM] = useState("")
    const dispatch = useDispatch(state=> state.movies.movies)

    const addMovie = ()=>{
        dispatch(add({
            title: m,
            image: null 
        }))
        setM("")
    }
  return (
    <div>
      <input value={m} onChange={(e)=>setM(e.target.value)} type="text" placeholder='movies....'/>
      <button onClick={addMovie}>ADD</button>
    </div>
  )
}

export default AddMovies
