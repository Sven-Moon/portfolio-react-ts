import { PROJECTS } from '../../data/projects'

type Props = {
  id: string
}

interface IProjects {
  [key:string]: IProject
}

interface IProject {
  imgUrl: string
  title: string
  description: string
  techs: string
  liveUrl: string
}

const Project = (props: Props) => {
  const projects:IProjects = PROJECTS
  const project: IProject = projects[props.id]

  return (

    <div id="project-1" className="project col-6-sm">

      <img
        src={project.imgUrl}
        alt="" />
      <div className="overlay">
      <div className="c_backdrop"></div>
        <div className="title">{project.title}</div>
        <div className="description">{project.description}</div>
        <div className="techs">{project.techs}</div>
        <button className="go-to__btn success">
          <a href='https://salad-too.firebaseapp.com/'>See It Live</a>
        </button>
        
      </div>
    </div>

  )
}

export default Project