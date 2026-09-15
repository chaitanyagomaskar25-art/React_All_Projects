
import axios from 'axios'
import './App.css'
import React, { useState } from 'react';
const App = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        setData(response.data);
        
    }
  return (
    <div className="container">
  <button className="btn" onClick={getData}>Get Data</button>

  <div className="grid">
    {data.map((item) => (
      <div key={item.id} className="card">
        <img src={item.download_url} alt={item.author} />
        <div className="card-content">
          <h2>{item.author}</h2>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default App

