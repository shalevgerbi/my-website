import React, { useRef } from "react";
import pdf from "../images/Shalev-Gerbi-resume.pdf";
import { DocumentIcon } from "@heroicons/react/solid";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const {
    REACT_APP_USER_ID,
    REACT_APP_TEMPLATE_ID,
    REACT_APP_SERVICE_ID,
  } = process.env;

  const form = useRef();
  let sentMail = false;
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Message Sent Successfully");
    window.sessionStorage.setItem("sentMail", true);
    sentMail = true;
    document.getElementById("submitButton").hidden = true;
  };
  sentMail = window.sessionStorage.getItem("sentMail");
  if (sentMail == null) {
    sentMail = false;
  }

  return (
    <section id="contact" className="lg:w-fit md:h-full pt-56 h-full lg:h-full relative">
      <div className="mt-5 mb-20 w-1/2 h-full lg:w-56 m-auto container border-2 rounded-3xl lg:rounded-xl hover:opacity-70 ">
        <a href={pdf} className="items-center">
          <div className="flex">
            <DocumentIcon className="w-full h-full lg:w-32 lg:h-20 mr-0" />
            <h1 className="text-7xl lg:text-3xl text-center cursor-pointer mr-5 m-auto ml-0 whitespace-nowrap">
              My CV
            </h1>
          </div>
        </a>
      </div>
      <div className="container lg:h-fit h-full w-full px-5 py-10 mx-auto lg:flex flex-nowrap relative ">
        
        <div className="lg:h-full h-full  w-full lg:w-2/3   bg-gray-900 rounded-lg overflow-hidden lg:overflow-visible  mr-10 pb-5 lg:pb-0 lg:mt-10 flex lg:pt-5 items-end relative">
          <div className="h-full lg:h-full mb-96 ">
          
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=israel+kfar+yona&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="w-full h-full lg:h-full  lg:w-full mr-20 lg:p-5  lg:ml-10 lg:mr-0  bg-gray-900  relative lg:flex lg:flex-wrap py-5 rounded shadow-md">
            <div className="m-auto lg:pb-0 lg:w-1/2 h-1/2   text-center lg:text-left">
              <h2 className="title-font font-semibold text-white tracking-widest text-4xl lg:text-sm">
                ADRESS
              </h2>
              <p className="mt-1 text-3xl text-center lg:text-sm lg:text-left whitespace-nowrap">
                Kfar Yona, Israel
              </p>
            </div>
            <div className="lg:w-1/2 h-full mt-4 lg:mt-0 text-center lg:text-left">
              <h2 className="title-font font-semibold text-white text-center tracking-widest text-4xl lg:text-sm lg:text-left ">
                EMAIL
              </h2>
              <a
                href="mailto: shalevgerb@gmail.com"
                className="text-indigo-400  leading-relaxed cursor-pointer lg:text-sm text-3xl lg:text-left text-center hover:text-indigo-200"
              >
                shalevgerb@gmail.com
              </a>
              </div>
         </div>
            
          </div>
        </div>
        <form
          // netlify
          method="post"
          ref={form}
          onSubmit={sendEmail}
          name="contact"
          className="mr-7 lg:w-1/3 flex flex-col md:ml-auto h-fit w-full  mt-8 md:mt-0"
        >
          <h2 className="text-center mt-10 text-white text-7xl lg:text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="text-center lg:text-lg text-5xl leading-relaxed mb-5">
            If you would like to hear more about me,
            <br /> send me an Email.
          </p>
          <div className="relative mb-4 w-full">
            <label htmlFor="name" className="mb-10 lg:mt-0 leading-7 text-5xl lg:text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              className="w-full lg:h-10 h-20 mt-5 lg:text-base text-4xl lg:mt-0 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="name"
              name="name"
              
            />
          </div>
          <div className="relative mb-4 mt-4">
            <label htmlFor="name" className="mb-10 lg:mt-0 leading-7 text-5xl lg:text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              className="w-full lg:h-10 h-20 mt-5 lg:mt-0 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-4xl outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out lg:text-base"
              id="email"
              name="email"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="mesage" className="mb-10 lg:mt-0 text-5xl lg:text-sm leading-7 text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full  mt-5 lg:mt-0 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-52 lg:h-32 text-4xl lg:text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          {!sentMail && (
            <button
              id="submitButton"
              type="submit"
              className="text-white lg:h-20 h-32 text-5xl bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded lg:text-lg"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
