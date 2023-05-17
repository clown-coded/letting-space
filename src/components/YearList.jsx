import {useState, useEffect} from 'react'
import axios from 'axios';
import Posts from './Posts';
const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const YearList = () => {
     const [yearSelected, setYearSelected] = useState(null)
    const [yearMenu, setYearMenu] = useState(false)
    const [allPosts, setAllPosts] = useState([])
    

    useEffect(() => {
        if (yearSelected != null) {
            const endpoint = `${baseURL}/project?projectyear=${yearSelected}&_embed`

        axios.get(`${endpoint}`)
            .then((res) => {
                setAllPosts(res.data)
                console.log(res.data);
                
            })
            .catch((err) => {
            console.error(err)
            })
         
        setYearMenu(true)
        } 

        
     }, [yearSelected])
    
    const RenderYearList = () => {
        return (
    
            <>
                <div className='archive-result'>
                    <p className='project-name' onClick={() => setYearSelected(3)}>2017</p>
                    {/* <p className='artist-name'></p> */}
                </div>
                <div className='archive-result'>
                    <p className='project-name' onClick={() => setYearSelected(2)}>2015</p>

                </div>
                <div className='archive-result'>
                    <p className='project-name' onClick={() => setYearSelected(4)}>2014</p>
                    <p className='artist-name'></p>
                </div>
                <div className='archive-result'>
                    <p className='project-name' onClick={() => setYearSelected(8)}>2013</p>
                    <p className='artist-name'></p>
                </div>
                <div className='archive-result'>
                    <p className='project-name' onClick={() => setYearSelected(6)}>2012</p>
                    <p className='artist-name'></p>
                </div>
                <div className='archive-result'>
                    <p className='project-name' onClick={() => setYearSelected(7)}>2011</p>
                    <p className='artist-name'></p>
                </div>
                <div className='archive-result'>
                    <p className='project-name' onClick={() => setYearSelected(5)}>2010</p>
                    <p className='artist-name'></p>
                </div>
                <div className='archive-result'>
                    <p className='project-name' onClick={() => setYearSelected(9)}>1994-1996</p>
                    <p className='artist-name'></p>
                </div>
            </>
        );
  
    }

    return (
        <>{yearMenu ? <Posts posts={allPosts}/> : <RenderYearList/>}</>
    )


  
}

export default YearList