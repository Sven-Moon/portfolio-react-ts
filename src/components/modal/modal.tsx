import { useContext, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { DataContext } from "../../app/Providers/DataProvider";

type Props = {
  content: React.ReactNode
}

const Modal = (props: Props) => {
  const {setShowModal} = useContext(DataContext)



  return (
    <aside className='modal backdrop' onClick={() => setShowModal(false)}>
      <button className="close__btn" onClick={() => setShowModal(false)}>
        <RiCloseLine/>
      </button>
      <div className='container'>
        {props.content}
      </div>
    </aside>
  )
}

export default Modal