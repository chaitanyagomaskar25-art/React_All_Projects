import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../assets/home-banner-background.png'
import { FiArrowRight } from 'react-icons/fi'
import BannerImage from '../assets/home-banner-image.png'




const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">Your Favourite Food Delivered Hot & Fresh</h1>
            <p className="primary-text">Enjoy the convenience of having your favourite meals delivered right to your doorstep, hot and fresh every time.</p>
            <button className="secondary-button">
                Order Now <FiArrowRight />
            </button>
        </div>
        <div className="home-image-container">
            <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
