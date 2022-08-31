import React from 'react'
import Interest, {IInterests} from '../../../../components/interest/interest'

type Props = {
  interests: IInterests,
  children?: JSX.Element|JSX.Element[]
}

export const About = (props: Props) => {
  return (
    <section id="about">
      <div className="title">About</div>
      <div className="subtitle">
        To truly know a man, one must read about him on the internet.
      </div>
      <div className="subtitle">-Aristotle</div>

      <div className="interest__holder wrap">
        <div className="col-6-lg">
          <Interest interest={props.interests['development']}/>
          <Interest interest={props.interests['skills']}/>
        </div>
        <div className="col-6-lg">
          <Interest interest={props.interests['tinkering']} />
          <Interest interest={props.interests['travel']} />
        </div>
      </div>
    </section>
  )
}