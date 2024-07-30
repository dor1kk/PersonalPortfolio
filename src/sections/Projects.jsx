import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CustomStyles.css';
import { MyProjects } from '../constants';
import { Slide } from 'react-awesome-reveal';
import { Modal, Button } from 'antd'; // Import Modal and Button from Ant Design
import { FaGithub } from 'react-icons/fa';

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'lightgray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'lightgray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0); // New state for the main image
  const [modalOpen, setModalOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
  };

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const handleViewDetailsClick = () => {
    setModalOpen(true);
  };

  const currentProject = MyProjects[currentSlide];

  return (
    <div id='My-Projects' className='bg-green-50 p-16 flex flex-col md:flex-row'>
      <div className='md:w-1/2 flex flex-col mb-8'>
        <Slide direction="left">
          <p className='text-primary italic text-xl'>My Projects</p>
        </Slide>
        <Slide direction="left" delay={100}>
          <h1 className='text-4xl font-bold font-montserrat'>
            My Works <br /> Latest <span className='text-primary'>Projects</span>
          </h1>
        </Slide>
        <Slide direction="left" delay={200}>
          <p className='w-full md:w-4/5 mt-4 text-gray-600'>
            I have developed various projects showcasing my skills and expertise. These include a Health Care System web app that allows patients to browse doctors and set appointments, and MusicAL - Listen Free, a music app for browsing and listening to favorite songs. Additionally, I have created the Byte Tech Store, an online platform featuring the latest tech products, and a YouTube Clone App that supports video uploads, user profiles, and interactive comments. I also developed a Movie Site App dedicated to showcasing movies with detailed information, ratings, and user reviews, and a fully functional Learning Management System for online education.
          </p>
        </Slide>
        <Slide direction="left" delay={300}>
          <Button
            className='py-3 flex flex-row justify-center items-center gap-4 px-8 bg-primary mt-8 text-white rounded-2xl self-center md:self-start'
            onClick={handleViewDetailsClick}
          >
            <span>View Details</span>
            <img src='https://static-00.iconduck.com/assets.00/arrow-right-icon-2048x1281-4p12i3j3.png' className='w-8 h-4' alt='arrow icon' />
          </Button>
        </Slide>
      </div>

      <div className='bg-white md:w-1/2 shadow-lg'>
        <Slider {...settings}>
          {MyProjects.map((project, index) => (
            <div key={project.title} className='flex flex-col items-center p-4'>
              <img src={project.images[currentImage]} alt={project.title} className='w-full h-auto mb-4 rounded-md' />
              <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`thumbnail ${imageIndex}`}
                    className={`w-20 h-20 cursor-pointer rounded-md object-cover ${imageIndex === currentImage ? 'border-2 border-primary' : ''}`}
                    onClick={() => handleThumbnailClick(imageIndex)}
                  />
                ))}
              </div>
              <button onClick={handleViewDetailsClick} className='text-primary underline'>Details</button>
              <a href={project.link} className='text-primary underline ml-4'>Live Demo</a>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        title={currentProject.title}
        visible={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="back" onClick={() => setModalOpen(false)}>
            Close
          </Button>,

        ]}
      >
        <p>{currentProject.description}</p>
        <p><strong>Technologies Used:</strong> {currentProject.technologies.join(', ')}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {currentProject.techImage.map((techImg, index) => (
            <img
              key={index}
              src={techImg}
              alt={`technology ${index}`}
              className='w-20 h-20 object-cover rounded-md'
            />
          ))}
        </div>
        <a href={currentProject.github} className='text-green-600 underline ml-4 flex flex-row gap-2 items-center'><FaGithub /> Source Code</a>
      </Modal>
    </div>
  );
};

export default Projects;
