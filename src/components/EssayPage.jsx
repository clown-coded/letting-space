import {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const EssayPage = () => {
    const [essay, setEssay] = useState(null)
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const endpoint = `${baseURL}/essays/${id}`


    
    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setEssay(res.data)
            setLoading(false)
            
        })
        .catch((err) => console.log(err))
    }, [endpoint])


    if (loading){
        return <p>Loading</p>
    }

  return (
    
    <div className='project-content'>
    
   <h4 className="project-title">{essay.title.rendered}</h4>
   <div dangerouslySetInnerHTML={{ __html: essay.content.rendered }} />
              
    


</div>
  )
}

export default EssayPage