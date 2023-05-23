import {useState, useEffect}from 'react'
import axios from 'axios'
import ViewProjects from '../components/ViewProjects'
import MobileArchive from '../components/nav/MobileArchive'
import ArchiveByYear from '../components/ArchiveByYear';


const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const Archive = () => {
  const [menuOpen, toggleMenu] = useState(false)
    const [essayOpen, setEssayOpen] = useState(false)
    const [mediaOpen, setMediaOpen] = useState(false)
    const [yearOpen, setYearOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [allPostsOpen, toggleAllPosts] = useState(false)
  const [artistOpen, setArtistOpen] = useState(false)
  const [postType, setPostType] = useState('all')
    const [posts, setPosts] = useState([])
  const [mobileNavIsOpen, setMobileNavOpen] = useState(false)
  const screenWidth = window.innerWidth;
  



    const endpointProjects = `${baseURL}/project?_embed`
    const endpointEssays = `${baseURL}/essays?_embed`
    const endpointMedia = `${baseURL}/media_posts?_embed`

     useEffect(() => {
       loadAllPosts()
       
         setLoading(false)
         toggleAllPosts(true)
      
       
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
        
  }


  const toggleMenuOpen = () => {
    if (menuOpen) {
      document.body.classList.toggle('no-scroll');
       const sidenav = document.getElementById('archiveResultsMobile')
      sidenav.style.animation = 'archiveMenuSlideOut .5s ease'
      
      
    }
   
    toggleMenu(!menuOpen)
  }
  
  

  

    
    return (
      <>
        {/* Archive filters */}
      <div className='mobile-archive-nav'>
        <div className='mobile-filters'>
            
            <p className='a-filter' onClick={() => {
              setPostType('year')
              toggleMenuOpen()
            }}>year</p>
             <p className='a-filter' onClick={() => {
              setPostType('artist')
              toggleMenuOpen()
            }}>artist a-z</p>
            <p className='a-filter' onClick={() => {
              setPostType('essays')
              toggleMenuOpen()
            }} >essays</p>
            <p className='a-filter' onClick={() => {
              setPostType('media')
             toggleMenuOpen()}} >media</p>
            
           
            
               <p className='a-filter' onClick={() => {
              setPostType('all')
            toggleMenuOpen()}}>view all</p>
               
          </div>
          
        </div>
        {/* archive filters */}
     
        {/* Posts menu */}
        {(screenWidth <= 780 && !loading && menuOpen) && 
          
          
         <MobileArchive postType={postType}  posts={posts} closeMethod={toggleMenuOpen} />
           
        }
        

        {(allPostsOpen && !loading) && <ViewProjects posts={posts} />}
        {/* <ArchiveByYear/> */}

            
      </>
        
   
  )
}

export default Archive