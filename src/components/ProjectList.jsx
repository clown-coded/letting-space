
import { useEffect, useState } from 'react'
import Posts from './Posts';



const ProjectList = ({ project, postType }) => {
     

return (
        <Posts posts={project} postType={postType}/>
  )
}

export default ProjectList