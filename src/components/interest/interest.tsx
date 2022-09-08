import SkillIcon from '../skill_icon/skill_icon'


type Props = {
  interest: IInterest
  openModal: (...args:any) => void
}


export type IInterest = {
  data: string | ISkill[],
  name: string,
  imgUrl: string
}
export type IInterests = { [key: string]: IInterest }
export type ISkill = {
  name: string, imageUrl: string
}


export const Interest = (props: Props) => {
  const { interest, openModal } = props

  let interestData: string = ''
  let skillData: ISkill[] = []
  let isInterest: boolean = typeof (interest.data) === 'string'
  
  if (typeof(interest.data) === 'string') {
    interestData = interest.data
  } else {
    skillData = interest.data
  }


  return (
    <>
      <article id={interest.name} 
        className="interest col-6-sm"
        onClick={() => openModal(interest)}
        >

        <div className="container">
          <div
            className="header"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${interest.imgUrl})`
            }}
          >
            {interest.name}
          </div>
          { 
            isInterest
              ? 
              <div className="content">
                <div className="text">
                    {interestData}
                </div>
              </div>
              :
              <div className="content skills">
              {
                skillData.map(skill => <SkillIcon key={skill.name} skill={skill} />)
              }
              </div>
          }
        </div>
      </article>    
    </>

    
    
  )
}

Interest.defaultProps = {
  interest: {
    name: '',
    skill: false,
    data: {data: '', name: '', imgUrl: ''}
    
  },
  openModal: () => {}  
}

export default Interest