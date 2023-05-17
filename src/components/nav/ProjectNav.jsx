import {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import {useLocation } from 'react-router-dom';
import {  Link, animateScroll } from 'react-scroll';


const baseURL = import.meta.env.VITE_WP_API_BASEURL;



const ProjectNav = () => {
    const myRef = useRef(null);
    const location = useLocation().pathname
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const endpoint = `${baseURL}/project/${getProjectNum()}?_embed`
    console.log(endpoint);


    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setProject(res.data)
            setLoading(false)
            
        })
        .catch((err) => console.log(err))
    }, [])
  
    
    function getProjectNum() {
        const reversedLocation = location.split('').reverse().join('');
        const splitString = reversedLocation.slice(0, 2);
        const projectNum = splitString.split('').reverse().join('');
        // setEndpoint(`${baseURL}/project/${projectNum}?_embed`)
        return projectNum;

    }  


    console.log(project);
    

   
    if (loading){
        return <p>Loading</p>
    }



  return (
    <>
    <div className='project-nav'>
    
 
        <br/>
        <p className='artist-bio' dangerouslySetInnerHTML={{ __html: project.acf.artist_bio}}></p>
        <br/>
        <p className='artist-name'>{project.acf.artist}</p>
      
        </div>

        

       
   
    </>
    
  )
}

export default ProjectNav