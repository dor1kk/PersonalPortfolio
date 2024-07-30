import React from 'react';
import './Modal.css'; // Ensure you have the styles imported

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          &times;
        </button>
        <h2 className='text-2xl font-bold mb-4'>{project.title}</h2>
        <p className='mb-4'>{project.description}</p>
        <p className='mb-4'><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`project detail ${index}`}
              className='w-40 h-40 object-cover rounded-md'
            />
          ))}
        </div>
        <a href={project.link} className='text-primary underline'>Live Demo</a>
        <a href={project.github} className='text-primary underline ml-4'>Source Code</a>
      </div>
    </div>
  );
};

export default Modal;
