import React from 'react'
import './Contact.css'
import config from '../../helper/config'
import img_icon from '../..//assets/msg-icon.png'
import mail_icon from '../..//assets/mail-icon.png'
import phone_icon from '../..//assets/phone-icon.png'
import location_icon from '../..//assets/location-icon.png'
import white_arrow from '../..//assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", `${config.token.webForms}`);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Enviado com sucesso!");
        event.currentTarget.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={img_icon} alt="img_icon" loading='lazy' /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. 
            Your feedback, questions, and suggestions are important to us as we strive to provide 
            exceptional service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="mail_icon" loading='lazy' />Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt="phone_icon" loading='lazy' />+1 123-456-7890</li>
                <li><img src={location_icon} alt="location_icon" loading='lazy' />77 Massachusetts Ave, Cambridge<br/>
                 MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required></input>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required></input>
                <label>Your Email</label>
                <input type='email' name='email' placeholder='Enter your email id' required></input>
                <label>Write your messages here</label>
                <textarea name='message' rows={6} placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="white_arrow" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
