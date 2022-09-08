import React from 'react'
import Project from '../../../../components/project/project'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id="projects">
      <div className="header">Recent Work</div>
      <div className="subheader">
        Judge me not by my words or beliefs, but what I put on the internet.
      </div>
      <div className="subheader">-Old Jewish Proverb
      </div>
      <div className="box">
        <Project id={"project-1"} />
        <Project id={"project-2"} />
        <Project id={"project-3"} />
      </div>
    </section>
  )
}

export default Projects