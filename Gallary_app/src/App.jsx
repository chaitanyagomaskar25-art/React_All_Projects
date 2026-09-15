import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`);

      setImages(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className='container'>
      <header className="header">
        <h1>Visual Muse</h1>
        <p>Curated photography from across the globe</p>
      </header>

      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid-layout">
          {images.map((item) => (
            <div className="card" key={item.id}>
              <a href={item.url} target='_blank' rel="noreferrer">
                <div className="image-wrapper">
                  <img src={item.download_url} alt={item.author} loading="lazy" />
                </div>
                <div className="card-info">
                  <small>Photographer</small>
                  <h2>{item.author}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button 
          disabled={index === 1} 
          onClick={() => setIndex(prev => prev - 1)}
          className="btn"
        >
          &larr; Previous
        </button>
        <span className="page-number">Page {index}</span>
        <button 
        disabled={index === 30}
          onClick={() => setIndex(prev => prev + 1)}
          className="btn"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default App;