import React, { useState } from 'react';
import Button from '../Snipits/Butoon';
import "remixicon/fonts/remixicon.css";

const Enquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setNum("");
      setMessage("");
    } else {
      setSuccess("Failed to send message. Please try again.");
    }
  };

  return (
    <section id='form'>
      <div className="form-main-div">
        <div className="form-sub-div">
          <div className="form-mob-img">
            <img src="src\assets\Images\mobile.jpg" alt="Mobile" />
          </div>
          <div className="form-container-div">
            <form onSubmit={handleSubmit} method="POST">
             
              <input type="hidden" name="access_key" value="58fba439-6dc5-454d-a770-1fbfa80d1283" />
              
              <h3>Get in touch</h3>
              <h1>Reach out for assistance or inquiries</h1>

              <h4>Name</h4>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='form-text-box'
                type="text"
                name="name"
                placeholder='Enter your name'
                required
              />

              <h4>Email</h4>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='form-text-box'
                type="email"
                name="email"
                placeholder='Enter your email'
                required
              />

              <h4>Phone No.</h4>
              <input
                value={num}
                onChange={(e) => setNum(e.target.value)}
                className='form-text-box'
                type="number"
                name="phone"
                placeholder='Enter your phone no.'
                required
              />

              <h4>Message</h4>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-text-area"
                name="message"
                rows="5"
                placeholder="Type your message here..."
                required
              ></textarea>

              <div>
                <input type="checkbox" id="consent" name="consent" required />
                <label htmlFor="consent">
                  I allow this website to store my submission so they can respond to my inquiry. *
                </label>
              </div>

              <Button name="Submit" />

              
              {success && <p style={{ color: success.includes("successfully") ? "green" : "red" }}>{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
