import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import '../CSS/ContactUs.css';

export const ContactUs = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    setSent(true);

    emailjs.sendForm('service_q4ro3kx', 'template_l7rktms', form.current, 'yZAOd6x8Faw9IXyWj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });


  };

  return (
    <div className='mb-10'>
      <div className='ContactUsTitle'>
        <p>Contact Us</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col items-start'>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className='flex flex-col items-start'>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className='flex flex-col items-start'>
          <label>Tell us about yourself</label>
          <textarea name="about" />
        </div>
        <div className='flex flex-col items-start'>
          <label>Additional info</label>
          <textarea name="additional" />
        </div>
        {!sent ?
          <input className='submit' type="submit" value="Submit  " />
          :
          <p className='sent'>Thank you! We will get back to you soon!</p>
        }
      </form>
    </div>
  );
};