import React from 'react'
import { X } from 'react-bootstrap-icons'

const MobileArtistBio = ({project, closeMethod}) => {
    return (
      <>
      <div className='mobile-artist' id='mobileArtist'>
           <button className='close-mobile-nav' onClick={closeMethod}>
              <X />
                </button>
          <p className='artist-bio' dangerouslySetInnerHTML={{ __html: project.acf.artist_bio}}></p>
        <br/>
          <p className='artist-name'>{project.acf.artist}</p>
          
      </div>
            <div className='bg-blur' id='bgBlur'></div>
            </>
  )
}

export default MobileArtistBio