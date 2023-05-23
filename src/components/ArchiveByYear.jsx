import React from 'react'
import axios from 'axios'
import IndividualPost from './IndividualPost';
const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const ArchiveByYear = () => {

     let posts = [];

     const mappedPosts = posts.map((post, index) => {
            return (
                <IndividualPost post={post} key= {index} />
           )
               
            // 
    })

    const YearPosts = ({ yearNumber }) => {
    
        const getPosts = (yearNumber) => {
        
            const endpoint = `${baseURL}/project?projectyear=${yearNumber}&_embed`

            axios.get(`${endpoint}`)
                .then((res) => {
                    posts = res.data;
                    console.log(res.data);
                
                })
                .catch((err) => {
                    console.error(err)
                })
            
            
        }
        
        getPosts(yearNumber)

        
        

        return (
            <>
                {posts != [] && mappedPosts}
                
            </>
            
        )
         
    }

    
    

  return (
      <div className='archive-content'>
          
          <div className='year-header'>
              2010
          </div>
          <YearPosts yearNumber={5}/>

    </div>
  )
}

export default ArchiveByYear