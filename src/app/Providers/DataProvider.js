import { createContext, useState } from "react"
import { setConstantValue } from "typescript"


const DataProvider = (props) => {
  const [showModal, setShowModal] = useState()
  const [modalContent, setModalContent] = useState()


  let appState = {
    'showModal': showModal, 'setShowModal': setShowModal,
    'modalContent': modalContent, 'setModalContent': setModalContent,
  }
  
  return (
    <DataContext.Provider value={appState}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
export let DataContext = createContext()