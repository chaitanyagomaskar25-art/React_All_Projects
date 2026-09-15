import React from 'react'

const Profile = ({data, setData, errors}) => {
    const {name, email, age} = data;
    const handleDataChange = (e, item)=>{
        setData(prevData=>({...prevData, [item]: e.target.value}))
    }
  return (
    <div>
      <div>
        <label>
            Name: 
        </label>
        <input value={name} onChange={(e)=>handleDataChange(e, "name")} type="text" placeholder='Name'/>
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>
            Age: 
        </label>
        <input value={age} onChange={(e)=>handleDataChange(e, "age")} type="number" placeholder='Name'/>
        {errors.age && <span>{errors.age}</span>}

      </div>
      <div>
        <label>
            Email: 
        </label>
        <input value={email} onChange={(e)=>handleDataChange(e, "email")} type="email" placeholder='Name'/>
        {errors.email && <span>{errors.email}</span>}

      </div>
    </div>
  )
}

export default Profile
