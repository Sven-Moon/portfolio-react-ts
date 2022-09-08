import React from 'react'
import { ISkill } from '../interest/interest'

type Props = {
  skill: ISkill
}

const SkillIcon = (props: Props) => {
  const { skill } = props
  return (
    <div className="skill">
      <div className="skill__image" style={{backgroundImage: `url(${skill.imageUrl})`}}/>
      <div className="skill__name">
        {skill.name}
        </div>
    </div> 
  )
}

export default SkillIcon