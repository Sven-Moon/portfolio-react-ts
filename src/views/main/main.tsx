import { About } from "./sections/about/about"
import { Hero } from "./sections/hero/hero"
import {INTERESTS} from '../../data/interests'



export const MainPage = () => {

  return (
    <>
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
      <section id="projects">
        <div className="project__header">Recent Work</div>
        <div className="project__subheader">
          Judge me not by my words or beliefs, but what I put on the internet.
        </div>
        <div className="project__subheader">-Old Jewish Proverb
        </div>
        <div className="project__box">


          <div id="project-1" className="project col-6-sm">

            <img className="project__img"
              src="https://res.cloudinary.com/sventerprise/image/upload/c_scale,h_1125/v1657724296/CT-Portfolio/project-1_ydv2zu.png"
              alt="" />
              <div className="project_overlay">
                <div className="project_title">Salad, Too</div>
                <div className="project_description">Customize a salad or sandwich and
                  assign it to yourself or a friend. Pay and order from a history of your orders.</div>
                <div className="project_techs">Angular, NgRx, TypeScript, C#, Entity Framework</div>
                <button className="go-to__btn success"><a href="https://salad-too.firebaseapp.com/">See It Live</a></button>
              </div>




          </div>
          <div id="project-2" className="project col-6-sm">

            <img className="project__img"
              src="https://res.cloudinary.com/sventerprise/image/upload/c_lpad,h_1125,w_2000/v1657724294/CT-Portfolio/project-2_fzzxqk.png"
              alt=""/>
              <div className="project_overlay">
                <div className="project_title">Spell Well</div>
                <div className="project_description">This project is fun in part because it's based on Dungeons & Dragons. And
                  who, besides almost everybody, doesn't like playing D&D? This project seeks to answer the question the
                  adventurer oft contemplates, "What spell should I cast?"</div>
                <div className="project_techs">Angular, NgRx, TypeScript, FireStore</div>
                <button className="go-to__btn success"><a href="https://spellwell-moon.web.app/main">See It Live</a></button>
              </div>




          </div>
          <div id="project-3" className="project col-6-sm">

            <img className="project__img"
              src="https://res.cloudinary.com/sventerprise/image/upload/c_lpad,h_1125,w_2000/v1657724293/CT-Portfolio/project-3_ht7dik.png"
              alt=""/>
              <div className="project_overlay">
                <div className="project_title">SellPhone</div>
                <div className="project_description">Find out how much your used phone is worth. Create a sale order, ready to
                  drop off or mail.</div>
                <div className="project_techs">Angular, NgRx, TypeScript</div>
                <button className="go-to__btn success"><a href="https://sellphone-ng.web.app/">See It Live</a></button>
              </div>




          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact__header">Whisper Sweet Nothings to Me</div>
        <div className="contact__form-container">
          <div className="contact__blurb col-6-m">
            I'm available for hire, fireside chats, and general experimentation.
            If you'd like any of those things, you're invited to send me a
            message!
            <img src="https://res.cloudinary.com/sventerprise/image/upload/v1649360523/CT-Portfolio/Ear-trumpet_hsxyxh.png"
              alt="ear trumpet" />
          </div>
          <form action="https://formsubmit.co/7e1df9671ef2a08dbd5020a6656c2e21" method="POST" className="" id="contact__form">
            <label className="contact__label">Subject
              <input type="text" name="subject" className="textInput" value="Message from SvenMoon.com" />
            </label>
            <label className="contact__label">
              Reply to
              <input type="email" name="email" id="email" placeholder="me@email.com" className="textInput" required />
            </label>
            <textarea rows={4} cols={50} name="message" id="message" placeholder="Message..." className="message">                
            </textarea>

            {/* HIDDEN INPUTS */}
            <input type="hidden" name="_template" value="box" />
            <input type="text" name="_honey" style={{display:'none'}}/>
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_cc" id="ccEmail"/>
            <input type="hidden" name="_next" value="https://svenmoon.com/"/>

            <div className="contact__action-area">
              <label htmlFor="sendCopy">
                Send me a copy
                <input type="checkbox" name="sendCopy" id="sendCopy" />
              </label>
              <div id="errors"></div>
              <button type="submit" className="contact__submit success" id="contact__submit" disabled>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer></footer>
    </>
  )
}