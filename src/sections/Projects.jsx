import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CustomStyles.css';
import { MyProjects } from '../constants';
import { Slide } from 'react-awesome-reveal';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='bg-green-50 p-16 flex flex-col md:flex-row'>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis, voluptatem veniam vero perferendis provident, maiores corporis vel fuga iure dicta maxime commodi et minus pariatur voluptates enim quisquam doloremque.
          </p>
        </Slide>
        <Slide direction="left" delay={300}>
          <button className='py-3 flex flex-row justify-center items-center gap-4 px-8 bg-primary mt-8 text-white rounded-2xl self-center md:self-start'>
            <span>View Details</span>
            <img src='https://static-00.iconduck.com/assets.00/arrow-right-icon-2048x1281-4p12i3j3.png' className='w-8 h-4' alt='arrow icon' />
          </button>
        </Slide>
      </div>

      <div className='bg-white md:w-1/2 shadow-lg'>
        <Slider {...settings}>
          {MyProjects.map((project) => (
            <div key={project.title} className='flex flex-col items-center p-4'>
              <img src={project.image} alt={project.title} className='w-full h-auto mb-4 rounded-md' />
              <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
              <p className='text-gray-700 mb-4'>{project.description}</p>
              <a href={project.link} className='text-primary underline'>Learn More</a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
