import { About } from "./sections/about/about"
import { Hero } from "./sections/hero/hero"
import {INTERESTS} from '../../data/interests'
import { useContext, useEffect } from "react"
import { DataContext } from "../../app/Providers/DataProvider"
import Modal from "../../components/modal/modal"
import Project from "../../components/project/project"
import Projects from "./sections/projects/projects"
import Contact from "./sections/contact/contact"



export const MainPage = () => {
  const { showModal, modalContent} = useContext(DataContext)

  useEffect(() => { console.log(showModal); }, [showModal])

  return (
    <>
      {showModal && <Modal content={modalContent} />}
      <Hero></Hero>
      <aside id="social-icons">
        <a href="https://github.com/Sven-Moon" className="social-icon" id="github" style={{
          backgroundImage: "url(https://res.cloudinary.com/sventerprise/image/upload/v1649279017/socials/github-ico_ymqjuq.png)"}}>
        </a>
        <a href="https://www.linkedin.com/in/svenmoon/" className="social-icon" id="linkedin" 
        style={{
          backgroundImage: "url('https://res.cloudinary.com/sventerprise/image/upload/v1649279309/socials/linkedin-ico_t4ppfs.png')"
        }} />
      </aside>
      <About interests={INTERESTS}></About>
      <Projects/>      
      <Contact />      
      <footer></footer>
    </>
  )
}

