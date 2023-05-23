import React from 'react'
import YearList from '../YearList'
import ProjectList from '../ProjectList'
import {X} from 'react-bootstrap-icons'

const MobileArchive = ({ postType, posts, closeMethod }) => {
    
    
  return (
     <>
           <div className='archive-results-container-mobile' id='archiveResultsMobile'>

               <button className='close-mobile-nav' onClick={closeMethod}>
              <X />
                </button>
              

            {(postType == 'year') ? <YearList /> : <ProjectList project={posts} postType={postType} />}
            
            
        

          </div>
          <div className='bg-blur' id='bgBlur'></div></>
           
  )
}

export default MobileArchive