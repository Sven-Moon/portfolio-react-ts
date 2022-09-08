import React, { useContext } from 'react'
import { DataContext } from '../../../../app/Providers/DataProvider'
import Interest, {IInterest, IInterests} from '../../../../components/interest/interest'

type Props = {
  interests: IInterests,
  children?: JSX.Element|JSX.Element[]
}

export const About = (props: Props) => {
  
  const { showModal, setShowModal, setModalContent } = useContext(DataContext)

  const openModal = (interest: IInterest) => {
    if (!showModal) {
      const node = <Interest interest={interest}/>
      setModalContent(node)
      setShowModal(true)
    }
  }

  return (
    <section id="about">
      <div className="title">About</div>
      <div className="subtitle">
        To truly know a man, one must read about him on the internet.
      </div>
      <div className="subtitle">-Aristotle</div>

      <div className="holder wrap">
        <div className="col-6-lg">


            <Interest
              interest={props.interests['development']}
            openModal={openModal}
            />
          

          <Interest interest={props.interests['skills']}
            openModal={openModal} />
        </div>
        <div className="col-6-lg">
          <Interest
            interest={props.interests['tinkering']}
            openModal={openModal}
          /><Interest
            interest={props.interests['travel']}
            openModal={openModal}
          />
        </div>
      </div>
    </section>
  )
}