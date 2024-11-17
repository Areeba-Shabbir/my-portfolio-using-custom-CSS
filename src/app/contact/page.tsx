export default function Contact(){
  return(
    <div className="form">
      <div className="contact">
          <div className="contact-text">
          <h2>Contact <span>Me!</span></h2>
              <h4>Looking for a dedicated frontend developer for your next project?</h4>
              <p>Lets create something amazing together! I am here to answer questions, explore new ideas, or chat about projects. Drop me a message!</p>
              <div className="list">
<li><a href="#"><h5> My contact number:</h5>03012497612</a></li>
<li><a href="#"><h5> My Email:</h5>shabbirareeba94@gmail.com</a></li>
              </div>
     
      <div className="contact-form">
                  <form action="">
                      <input type="name" placeholder="Your Name" required/>
                      <input type="email" placeholder="Your Email" required/>
                      <input type="number" placeholder="Your Mobile Number" required/>
                      <textarea defaultValue="How can I help you?" />
  
                       <input type="submit" value="Send Message" className="submit" required />
                  </form>
              </div>
</div>
          </div>
          </div>
          
)}