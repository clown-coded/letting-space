import React from 'react'
import { X } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Posts = ({posts, postType}) => {
  
        
        const mappedPosts = posts.map((post, index) => {
            let endpoint = `/project/${post.id}`;
            

            if (postType == 'essays'){
                
                 endpoint = `/project/${post.acf.project_number}`
                
            } 

            return (
               


                <> <Link to={`${endpoint}`}>
                <div key={post.slug + '-' + index} className='archive-result' >
            <p className='project-name'>{post.title.rendered}</p>
            <p className='artist-name'>{post.acf.artist}</p>

                    </div>
                </Link></>
               
            )
        })
    
    
    
    return (
            
        <>
          
            
            {mappedPosts}
        </>
        )
    }

export default Posts