import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const IndividualPost = ({ post, index }) => {



  function getFeaturedImage(post) {
        if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
            return post._embedded['wp:featuredmedia'][0].source_url;
        } else {
            return 'https://via.placeholder.com/150'
        }
    }


  return (

    
    <div className='project-post' key={post.slug} >
     
        <img className='project-hero-individual' src={getFeaturedImage(post)} />
        <h4 className="project-title">{post.title.rendered}</h4>
        <p>{post.acf.project_description}</p>
        <Link to={`/project/${post.id}`} className='project-link'> <ArrowRight/>    <p>View project</p></Link>

    </div>
    
    
  )
}

export default IndividualPost