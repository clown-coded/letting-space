import React from 'react'
import video from '../../public/assets/art_installation__market_testament_(long) (240p).mp4'

const Home = () => {
  return (
    <>
    <div className='home-content'>
      <div className='video-container'>
      <video width='100%' autoPlay loop muted>
      <source src={video} type="video/mp4"/>
      </video>
      </div>
   

      <div className='home-bottom'/>
      <h1 className='tagline'>LIBERATING SPACES FOR ART AND COMMUNITY SINCE 2010</h1>
      
      </div>
    </>
  )
}

export default Home