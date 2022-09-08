type Props = {}

export const Contact = (props: Props) => {
  return (
    <section id="contact" style={{backgroundImage:'none'}}>
      <div className="header">Whisper Sweet Nothings to Me</div>
      <div className="form-container">
        <div className="blurb col-6-m">
          I'm available for hire, fireside chats, and general experimentation.
          If you'd like any of those things, you're invited to send me a
          message!
          <img src="https://res.cloudinary.com/sventerprise/image/upload/v1649360523/CT-Portfolio/Ear-trumpet_hsxyxh.png"
            alt="ear trumpet" />
        </div>
        <form action="https://formsubmit.co/7e1df9671ef2a08dbd5020a6656c2e21" method="POST" className="" id="contact__form">
          <label className="label">Subject
            <input type="text" name="subject" className="textInput" placeholder="Message from SvenMoon.com" />
          </label>
          <label className="label">
            Reply to
            <input type="email" name="email" id="email" placeholder="me@email.com" className="textInput" required />
          </label>
          <textarea rows={4} cols={50} name="message" id="message" placeholder="Message..." className="message">
          </textarea>

          {/* HIDDEN INPUTS */}
          <input type="hidden" name="_template" value="box" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_cc" id="ccEmail" />
          <input type="hidden" name="_next" value="https://svenmoon.com/" />

          <div className="action-area">
            <label htmlFor="sendCopy">
              Send me a copy
              <input type="checkbox" name="sendCopy" id="sendCopy" />
            </label>
            <div id="errors"></div>
            <button type="submit" className="submit success" id="submit" disabled>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

