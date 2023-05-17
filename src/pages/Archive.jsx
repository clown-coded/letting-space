import {useState, useEffect}from 'react'
import ArchiveNav from '../components/nav/ArchiveNav'
import YearList from '../components/YearList'
import ProjectList from '../components/ProjectList'
import axios from 'axios'
import ViewProjects from '../components/ViewProjects'

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const Archive = () => {
    const [essayOpen, setEssayOpen] = useState(false)
    const [mediaOpen, setMediaOpen] = useState(false)
    const [yearOpen, setYearOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [allPostsOpen, toggleAllPosts] = useState(false)
    const [artistOpen, setArtistOpen] = useState(false)
    const [posts, setPosts] = useState([])
    const [mobileNavIsOpen, setMobileNavOpen] = useState(false)



    const endpointProjects = `${baseURL}/project?_embed`
    const endpointEssays = `${baseURL}/essays?_embed`
    const endpointMedia = `${baseURL}/media?_embed`

     useEffect(() => {
       loadAllPosts()
       
         setLoading(false)
         toggleAllPosts(true)
      
       
    }, [])

    //need to axios essays, all posts and media
    const loadAllPosts = () => {
       axios.get(`${endpointProjects}`)
            .then((res) => {
                setPosts(res.data)
           
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
                
                setLoading(false)
            
            })
            .catch((err) => {
            console.error(err)
            })
        console.log('working') 
    }

  

    
    return (
      <>
      <div className='mobile-archive-nav'>
        <div className='mobile-filters'>
            
                    <p className='a-filter' onClick={() => {
                        loadEssayPosts()
                        setEssayOpen(true)
                        setMediaOpen(false)
                        setYearOpen(false)
                        setArtistOpen(false)
            }} >essays</p>
               <p className='a-filter' onClick={() => {
                        loadMediaPosts()
                        setEssayOpen(false)
                        setMediaOpen(true)
                        setYearOpen(false)
                        setArtistOpen(false)
            }} >media</p>
               <p className='a-filter' >year</p>
               <p className='a-filter' >artist a-z</p>
               <p className='a-filter' >view all</p>
               
          </div>
          
        </div>
     
            {(allPostsOpen && !loading) && <ViewProjects posts={posts}/>}

           
            {yearOpen && <YearList />}
            {essayOpen && <ProjectList project={posts } />}
            {mediaOpen && <ProjectList project={posts } />}
            {/* needs artist open */}
            

            {/* {!loading} */}
            
            
      </>
        
   
  )
}

export default Archive