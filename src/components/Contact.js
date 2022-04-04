import React, { useState } from 'react';
import pdf from '../images/Shalev-Gerbi-resume.pdf'
import {DocumentIcon} from '@heroicons/react/solid'
import emailjs from 'emailjs'
import{ init } from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }
  function handleSubmit(e) {
    init("J4PfUxoBMyY9Jnaw7");
    e.preventDefault();
    emailjs.send("service_9khoz3s","template_0zibtzh");
    alert(`mail: ${email}, name: ${name}, message: ${message}`);    
    window.open('mailto:shalev@gmail.com');
    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'content-Type': 'application/x-www-form-urlencoded' },
    //   body: encode({ 'form-name': 'contact', name, email, message }),
    // })
    // send(
    //   'SERVICE ID',
    //   'TEMPLATE ID',
    //   toSend,
    //   'User ID'
    // )
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log('FAILED...', err);
    //   })
    //   // .then(() => alert('Message sent!'))
    //   // .catch((error) => alert(error));
  }
  return (
    
    <section id="contact" className="relative">
      <div  className="mt-5 w-56 m-auto border-4 rounded-xl hover:opacity-70 ">
        <a href={pdf} className="items-center">
        <div className="flex">
      <DocumentIcon className="w-32 h-20 mr-0"/>
      <h1 className="text-3xl text-center cursor-pointer mr-5 m-auto ml-0 whitespace-nowrap">My CV</h1>
      </div>
      </a>
    </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(0.7)' }}
            src="https://www.google.com/maps/embed/v1/place?q=israel+kfar+yona&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADRESS
              </h2>
              <p className="mt-1">
                Yasmin 11 <br />
                Kfar Yona, Israel
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mr-2 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs ">
                EMAIL
              </h2>
              <a
                href="mailto: shalevgerb@gmail.com"
                className="text-indigo-400  leading-relaxed cursor-pointer hover:text-indigo-200"
              >
                shalevgerb@gmail.com
              </a>
            </div>
          </div>
        </div>
        <form
          action="mailto:shalevgerb@gmail.com"
          // netlify
          method="post"
          onSubmit={handleSubmit}
          name="contact"
          className="lg:w-1/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="name"
              name="name"
              
              onChange={(e) => setName(e.target.value)}
              
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="mesage" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      
    </section>
    
  );
}
