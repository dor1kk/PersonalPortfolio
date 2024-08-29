import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactInfo = ({ icon: Icon, title, content, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center mb-6"
  >
    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mr-4">
      <Icon className="text-white text-xl" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors duration-300">
          {content}
        </a>
      ) : (
        <p className="text-gray-400">{content}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  const onFinish = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    console.log('Form submitted:', values);
    // Here you would typically send the form data to your backend or a service like EmailJS
  };

  return (
    <section id="Contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in <span className="text-sky-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <ContactInfo icon={FaPhone} title="Phone" content="048 179 677" />
            <ContactInfo icon={FaEnvelope} title="Email" content="dorajetkukaj@gmail.com" link="mailto:dorajetkukaj@gmail.com" />
            <ContactInfo icon={FaMapMarkerAlt} title="Location" content="Prishtine, Kosovo" />
            <ContactInfo icon={FaGithub} title="GitHub" content="github.com/dor1kk" link="https://github.com/dor1kk" />
            <ContactInfo icon={FaLinkedin} title="LinkedIn" content="LinkedIn Profile" link="https://linkedin.com/in/your-linkedin-username" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={onFinish} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500"
              />
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
