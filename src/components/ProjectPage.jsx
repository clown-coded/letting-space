import {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MobileArtistBio from './nav/MobileArtistBio';


const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const ProjectPage = () => {
    const essay = useRef(null);
    const media = useRef(null);
    const [project, setProject] = useState(null)
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [artistBioOpen, openArtistBio] = useState(false)
    const endpoint = `${baseURL}/project/${id}?_embed`
    const screenWidth = window.innerWidth;

    console.log(id)
    
    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setProject(res.data)
            setLoading(false)
            
        })
        .catch((err) => console.log(err))
    }, [endpoint])

  

    function getFeaturedImage(project) {
        if (project && project._embedded && project._embedded['wp:featuredmedia'] && project._embedded['wp:featuredmedia'][0].source_url) {
            return project._embedded['wp:featuredmedia'][0].source_url;
        } else {
            return 'https://via.placeholder.com/150'
        }
    }

    const scrollToEssay = () => {
        essay.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      const scrollToMedia = () => {
        media.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    const toggleArtistBio = () => {

        if (artistBioOpen) {
            let mobileArtistBio = document.getElementById('mobileArtist');

            mobileArtistBio.style.animation = 'archiveMenuSlideOut .5s ease'
            
        }
        setTimeout(openArtistBio(!artistBioOpen), 5000)
          
    }

    if (loading){
        return <div className='loading'></div>
    }


  return (
      
      <div className='project-content' id='project-content'>
          <img className='project-hero' src={getFeaturedImage(project)} />
          {/* <ImageCarousel /> */}
         <div className='project-header'>
            <div className='project-links'>
                <p onClick={scrollToEssay}>essay</p>
                  <p onClick={scrollToMedia}>media</p>
                  {screenWidth < 760 && <p onClick={toggleArtistBio}>artist</p>}
            </div>
            <div className='project-details'>
            <h4 className="project-title">{project.title.rendered}</h4>
            <p className="project-info">{project.acf.date}</p>
        <p className="project-info">{project.acf.location}</p>
            </div>
         
        
        
         </div>
         <div className='project-text-container'>
         <div className="project-text" dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
         <p className='project-footnotes'dangerouslySetInnerHTML={{ __html: project.acf.footnotes}}/>

         </div>
       
       
            
       
    {/* ESSAY STARTS */}
        
       
        <div id='essay' ref={essay}>
            <p className='project-essay-title'>{project.acf.essay_title}</p>
            <p className='project-info'>{project.acf.essay_author}</p>
            <p className='project-info'>{project.acf.essay_date}</p>
            {console.log(project.acf.essay_title)}

              <div className='project-text-container'>
                  {screenWidth < 780 && <> <p className='project-footnotes' dangerouslySetInnerHTML={{ __html: project.acf.essay_footnotes}}></p>
            <p className='project-text' dangerouslySetInnerHTML={{ __html: project.acf.essay}}></p> </> }
                {screenWidth > 780 && <> 
                      <p className='project-text' dangerouslySetInnerHTML={{ __html: project.acf.essay }}></p>
                      <p className='project-footnotes' dangerouslySetInnerHTML={{ __html: project.acf.essay_footnotes }}></p>
                  </>}
            </div>
            
        </div>
        <div id='media' ref={media}>
        <p className='project-essay-title'>Media</p>
          </div>
          
          {artistBioOpen && <MobileArtistBio project={project} closeMethod={toggleArtistBio} />}
        {/* <div id='essay'>
            this is some media
        </div> */}
    </div>
    
  )
}

export default ProjectPage