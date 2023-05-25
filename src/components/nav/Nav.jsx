import { useEffect, useState } from 'react'

import { Link, useLocation, matchPath  } from 'react-router-dom'
import { List, ChevronDown, DashLg , Plus} from 'react-bootstrap-icons'
import MobileNav from "./MobileNav"
import ArchiveNav from "./ArchiveNav"
import BlogNav from "./BlogNav"
import BookNav from "./BookNav"
import AboutNav from "./AboutNav"
import ProjectNav from "./ProjectNav"
import HomeNav from './HomeNav'


const Nav = () => {
   
    const [menuIsOpen, openMenu] = useState(false);
    const [navIsMinimised, minimiseNav] = useState(false)
    const [mobileMenuIsOpen, openMobileMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState('home')
    const [homeOpen, setHomeOpen] = useState(true)
    const [blogOpen, setBlogOpen] = useState(false)
    const [aboutOpen, setAboutOpen] = useState(false)
    const [bookOpen, setBookOpen] = useState(false)
    const [archiveOpen, setArchiveOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)


    const url = useLocation()
    const location = url.pathname
    
    
    // const params = useParams();
   
  
    const toggleNav = () => {
        if (navIsMinimised) {
            const nav = document.getElementById('nav')
            const contentContainer = `${currentPage}-content`
            console.log(contentContainer);
            const contentDiv = document.getElementById(contentContainer)
            console.log(contentDiv);
            contentDiv.style.animation = 'shrinkContent .5s ease'
            contentDiv.style.width = 'calc(100vw - 450px)'
            contentDiv.style.left = "450px"
            setTimeout(() => {
                nav.style.display = 'flex'
            }, 200)
            nav.style.animation = 'blurIn 1s ease'
           
            console.log('nav minimised');

        } else {
            const nav = document.getElementById('nav')
            const contentContainer = `${currentPage}-content`
            console.log(contentContainer);
            const contentDiv = document.getElementById(contentContainer)
            console.log(contentDiv);
            contentDiv.style.animation = 'growContent .5s ease'
            contentDiv.style.width = 'calc(100vw - 100px)'
            contentDiv.style.left = "100px"
            nav.style.display = 'none'

        }
         console.log('nav minimised');
        minimiseNav(!navIsMinimised)
    }


    const toggleMenu = () => {
        openMenu(!menuIsOpen)  
    }


    const toggleMobileMenu = () => {
      
        openMobileMenu(!mobileMenuIsOpen)
        document.body.classList.toggle('no-scroll');
        
    }


    useEffect(() => {

        console.log(location);
        if (location == '/') {
            setCurrentPage('home')
            setHomeOpen(true);
            setArchiveOpen(false);
            setBlogOpen(false);
            setAboutOpen(false);
            setBookOpen(false);
            setProjectOpen(false)
        }
        if (location == '/archive') {
            setCurrentPage('archive')
            setHomeOpen(false);
            setArchiveOpen(true);
            setBlogOpen(false);
            setAboutOpen(false);
            setBookOpen(false);
            setProjectOpen(false)
        }
        if (location == '/book') {
            setCurrentPage('book')
            setHomeOpen(false);
            setArchiveOpen(false);
            setBlogOpen(false);
            setAboutOpen(false);
            setBookOpen(true);
            setProjectOpen(false)
        }
        if (location == '/about') {
            setCurrentPage('about')
            setHomeOpen(false);
        setArchiveOpen(false);
        setBlogOpen(false);
        setAboutOpen(true);
        setBookOpen(false);
        setProjectOpen(false)
        }
        if (location == '/blog') {
            setCurrentPage('blog')
            setHomeOpen(false);
        setArchiveOpen(false);
        setBlogOpen(true);
        setAboutOpen(false);
        setBookOpen(false);
        setProjectOpen(false)
        }
        if (matchPath('/project/:id', location)) {
            setCurrentPage('project')
            setHomeOpen(false);
        setArchiveOpen(false);
        setBlogOpen(false);
        setAboutOpen(false);
        setBookOpen(false);
        setProjectOpen(true)
        console.log('this is a project page');
        
        }
        if (matchPath('/essays/:id', location)) {
            console.log('in essay page')
        }
        
    
    })


  return (
      <>
          {navIsMinimised &&
              <div className='nav-minimised'>
                  <h4>Letting Space</h4>
                  <Plus className='nav-plus' onClick={toggleNav}/>
                  
              </div>}

      {/* DESKTOP NAV */}
          <div className='nav' id='nav'>
              <div className='sidenav' id='sidenav'>
                  <DashLg className='minimise-nav' onClick={toggleNav} onMouseOver={() => {
                    return(
                        <h4>maximise</h4>
                    )
                  }}/>
                  <div className='logo-container'>
                      <Link to='/'>
                          <img className='logo' src="../../../public/assets/letting-space-logo.jpg" alt="Letting Space Logo" onClick={() => { setCurrentPage('home') }} /> </Link>
                      
                      <ChevronDown onClick={toggleMenu}
                            id= 'open-menu' className= {menuIsOpen ? 'rotate' : 'unrotate' } 
                          />
                  </div>

                  {menuIsOpen && ( <div className='nav-links-container'> 
                  <ul className='nav-menu-links'>
           
                  <li className='nav-link' onClick={() => { setCurrentPage('about') }}>
                      <Link to="/about" >About</Link> </li>
                  <li className='nav-link' onClick={()=>{setCurrentPage('book')}}> <Link to="/book"  >Book</Link> </li>
              <li className='nav-link' onClick={()=>{setCurrentPage('archive')}}> <Link to="/archive"  >Archive</Link> </li>
              <li className='nav-link' onClick={()=>{setCurrentPage('blog')}} > <Link to="/blog" >Blog</Link> </li>
          </ul> 
        </div>
                 
          )}

        {homeOpen && <HomeNav/>}
        {blogOpen && <BlogNav/>}
        {archiveOpen && <ArchiveNav/>}
        {bookOpen && <BookNav/>}
        {aboutOpen && <AboutNav/>}
        {projectOpen && <ProjectNav/>}
          
    
              </div>

              {/* MOBILE NAV */}

              <div className='mobileNav'>
                   <div className='hamburger' >
                      <List onClick={toggleMobileMenu}/>
                    <p>Letting Space</p>
                  </div>
                  
                  {/* <img className='logo-mobile' src="./src/assets/letting-space-logo.png" alt="" /> */}
                 
              </div>

              
              
          </div>

          {mobileMenuIsOpen && <MobileNav closeMethod={toggleMobileMenu} />}


          
      </>
  )
}

export default Nav