import React from 'react'
import IndividualPost from './IndividualPost'

const ViewProjects = ({ posts }) => {
    

    const AllPosts = () => {

        const mappedPosts = posts.map((post, index) => {
            return (
                <IndividualPost post={post} key= {index} />
           )
               
            // 
    })

        return (
            <>
                {mappedPosts}
                
            </>
            
        )
    }
    

  return (
     <div className='archive-content'>
          <AllPosts />
          
            </div>
  )
}

export default ViewProjects