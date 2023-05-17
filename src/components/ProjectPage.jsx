import {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, animateScroll } from 'react-scroll';

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const ProjectPage = () => {
    const essay = useRef(null);
    const media = useRef(null);
    const [project, setProject] = useState(null)
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const endpoint = `${baseURL}/project/${id}?_embed`

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

    if (loading){
        return <p></p>
    }


  return (
      
      <div className='project-content'>
         <img className='project-hero' src={getFeaturedImage(project)} />
         <div className='project-header'>
            <div className='project-links'>
                <p onClick={scrollToEssay}>essay</p>
                <p onClick={scrollToMedia}>media</p>
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
       
       
            
       

        
       
        <div id='essay' ref={essay}>
            <p className='project-essay-title'>{project.acf.essay_title}</p>
            <p className='project-info'>{project.acf.essay_author}</p>
            <p className='project-info'>{project.acf.essay_date}</p>
            {console.log(project.acf.essay_title)}

            <div className='project-text-container'>
                <p className='project-footnotes' dangerouslySetInnerHTML={{ __html: project.acf.essay_footnotes}}></p>
            <p className='project-text' dangerouslySetInnerHTML={{ __html: project.acf.essay}}></p>
            </div>
            
        </div>
        <div  ref={media}>
           Media
        </div>
        {/* <div id='essay'>
            this is some media
        </div> */}
    </div>
    
  )
}

export default ProjectPage