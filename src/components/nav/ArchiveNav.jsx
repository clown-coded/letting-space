import { useEffect, useState } from 'react'
import ProjectList from '../ProjectList';
import YearList from '../YearList';
import axios from 'axios'

const baseURL = import.meta.env.VITE_WP_API_BASEURL;


const ArchiveNav = () => {
    const [postType, setPostType] = useState('all')
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const endpointProjects = `${baseURL}/project?_embed`
    const endpointEssays = `${baseURL}/essays?_embed`
    const endpointMedia = `${baseURL}/media_posts?_embed`
    

    const loadAllPosts = () => {
       axios.get(`${endpointProjects}`)
            .then((res) => {
                setPosts(res.data)
                console.log(res.data);
                setLoading(false)
            
            })
            .catch((err) => {
            console.error(err)
            })
        
    }
    const loadEssayPosts = () => {
       axios.get(`${endpointEssays}`)
            .then((res) => {
                setPosts(res.data)
                console.log(res.data);
                setLoading(false)
            
            })
            .catch((err) => {
            console.error(err)
            })
        
    }
     const loadMediaPosts = () => {
       axios.get(`${endpointMedia}`)
            .then((res) => {
                setPosts(res.data)
                console.log(res.data);
                setLoading(false)
            
            })
            .catch((err) => {
            console.error(err)
            })
        console.log('working') 
    }

    // intial load of all posts
    useEffect(() => {
      loadAllPosts()
    }, [])

    useEffect(() => {
        if (postType == 'all') {
            loadAllPosts()
        }
        if (postType == 'essays') {
            loadEssayPosts()
        }
        if (postType == 'media') {
            loadMediaPosts()
        }
    }, [postType])

    


  return (
    <div className='archive-nav'>
        {/* Filters */}
        <div className='archive-filters'>
            
            <p className='a-filter' onClick={()=> setPostType('essays')}>essays</p>
               <p className='a-filter' onClick={()=> setPostType('media')}>media</p>
               <p className='a-filter' onClick={()=> setPostType('year')}>year</p>
               <p className='a-filter' onClick={()=> setPostType('artist')}>artist a-z</p>
               
        </div>
        <div className='archive-results-container'>

              {/* add onclick to go to post */}
              {(postType == 'year' && !loading) ? <YearList /> : <ProjectList project={posts} postType={postType}/>}
        

        </div>

       
        
            
             
              
          </div>
  )
}

export default ArchiveNav