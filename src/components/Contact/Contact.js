import { EmailJSResponseStatus } from '@emailjs/browser';
import React, { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import emailjs from '@emailjs/browser';
import './contact.scss'
 

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_v58t4rh',
                'template_x5fbb19',
                refForm.current,
                'NROgUAzs8B04Q1e1r'
            )
            .then(() => {
                alert('Message succussfully sent!');
                window.location.reload(false);
            }, () => {
                alert('Message failed to send. Please try again');
            })
        

    }
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, []);
    return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Contact me'.split('')}
                index={15}
              />
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
              sapiente commodi. Provident natus voluptatibus repellat eius nulla
              recusandae consectetur veritatis quam autem perferendis
              distinctio, eveniet veniam, doloribus, architecto laboriosam
              pariatur.
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                    />
                  </li>
                  <li>
                    <input
                      className='flat-button'
                      type="submit"
                      value='SEND'
                    />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
};

export default Contact;