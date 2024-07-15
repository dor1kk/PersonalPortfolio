import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const onFinish = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    console.log('Success:', values);
  };

  return (
    <div className="bg-primary max-lg:p-4 md:p-16">
      <p className="text-white italic text-xl text-center">Get in touch</p>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Convey your <span className="text-green-200">ideas to me</span></h1>
    
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="mb-4 flex items-center">
            <FaPhone className="text-white bg-primary p-3 rounded-xl w-12 h-12 mr-4" />
            <div className='flex flex-col'>
            <span className="text-gray-300">Call me</span>
            <span className="text-white">048 179 677</span>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope  className="text-white bg-primary p-3 rounded-xl w-12 h-12 mr-4"  />
            <div className='flex flex-col'>
            <span className="text-gray-300">Email Address</span>
            <span className="text-white">dorajetkukaj@gmail.com</span>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <FaMapMarkerAlt  className="text-white bg-primary p-3 rounded-xl w-12 h-12 mr-4"  />
            <div className='flex flex-col'>
            <span className="text-gray-300">Address</span>
            <span className="text-white">Prishtine, Kosovo</span>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <a href="https://github.com/dor1kk" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
              <FaGithub  className="text-white bg-primary p-3 rounded-xl w-12 h-12 mr-4"  />
              github.com/dor1kk
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
              <FaLinkedin  className="text-white bg-primary p-3 rounded-xl w-12 h-12 mr-4"  />
              LinkedIn Profile
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <form onSubmit={onFinish} className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  type="text"
                  name="budget"
                  required
                  placeholder="Budget"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
