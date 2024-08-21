
import React from 'react'
import Service1 from '../assets/service-1.png'
import Service2 from '../assets/service-2.png'
import Service3 from '../assets/service-3.png'
import Projekt1 from '../assets/Projekt1.png'
import Projekt2 from '../assets/Projekt2.png'
import Projekt3 from '../assets/Projekt3.png'
import Projekt32 from '../assets/Projekt3-2.png'
import Projekt33 from '../assets/Projekt3-3.png'
import Projekt34 from '../assets/Projekt3-4.png'
import Projekt35 from '../assets/Projekt3-5.png'
import Projekt36 from '../assets/Projekt3-6.png'

import Projekt4 from '../assets/Projekt4.png'
import Projekt41 from '../assets/Projekt4-2.png'
import Projekt42 from '../assets/Projekt4-3.png'
import Projekt43 from '../assets/Projekt4-3.png'
import Projekt44 from '../assets/Projekt4-5.png'

import Projekt5 from '../assets/Projekt5.png'
import Projekt6 from '../assets/Projekt6.png'
import Projekt7 from '../assets/Projekt7.png'
import Projekt8 from '../assets/Projekt8.png'
import Projekt82 from '../assets/Projekt8-2.png'
import Projekt83 from '../assets/Projekt8-3.png'
import Projekt84 from '../assets/Projekt8-4.png'
import Projekt85 from '../assets/Projekt8-5.png'

import Projekt9 from '../assets/Projekt9.png'
import Projekt92 from '../assets/Projekt9-2.png'
import Projekt93 from '../assets/Projekt9-3.png'
import Projekt94 from '../assets/Projekt9-4.png'
import Projekt95 from '../assets/Projekt9-5.png'

import HealthCareProjectImage from '../assets/HealthCareImage.png'
import Music from '../assets/MusicAppImage.png'
import Projekt102 from '../assets/Projekt10-2.png'
import Projekt101 from '../assets/Projekt10-1.png'
import Projekt103 from '../assets/Projekt10-3.png'
import Projekt104 from '../assets/Projekt10-4.png'
import Projekt105 from '../assets/Projekt10-5.png'
import Projekt106 from '../assets/Projekt10-6.png'

import RentACarMockup from '../assets/RentACarMockup.png'
import LMSMockup from '../assets/LmsMockeduo.jpg'
import ByteMockup from '../assets/ByteTechMockup.jpg'
import HealthCareMockup from '../assets/HealthCareMockup.jpg'
import MusicalMockup from '../assets/MusicalMockup.jpg'
import MovieAppMockup from '../assets/MoviAppMockup.jpg'






export const technologies = [
  { icon: "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png", name: 'React', color: '#f5bcbc' },
  { icon: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png", name: 'Node.js', color: '#f3bc3e' },
  { icon: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png", name: 'Next Js', color: '#f5bcbc' },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png", name: 'Typescript', color: '#f3bc3e' }, 
  { icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp&w=256", name: 'HTML', color: '#f3bc3e' },
    { icon: "https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png?f=webp&w=256", name: 'CSS', color: '#acace3' },
    { icon: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png", name: 'JavaScript', color: '#94cb9d' },
   
    { icon: "https://cdn.iconscout.com/icon/free/png-256/php-2752101-2284918.png", name: 'PHP', color: '#acace3' },
    { icon: "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp&w=256", name: 'Java', color: '#acace3' },
    { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png", name: 'Bootstrap', color: '#f3bc3e' },
    { icon: "https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-dl3neb73.png", name: 'Ant Design', color: '#f5bcbc' },
    { icon: "https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png", name: 'Material UI', color: '#f3bc3e' },
    { icon: "https://camo.githubusercontent.com/73c36843a66af40ade042c619a66b714aa06bcb35fd19868a12d7d0d965dcf9e/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f642f64352f5461696c77696e645f4353535f4c6f676f2e7376672f33323070782d5461696c77696e645f4353535f4c6f676f2e7376672e706e67", name: 'Tailwind', color: '#f5bcbc' },
    { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", name: 'Git', color: '#f3bc3e' },
    { icon: "https://miro.medium.com/v2/resize:fit:1400/1*dU4B5Jg2opVXRmGhiBYXdQ.png", name: 'MySql', color: '#f5bcbc' },
    { icon: "https://datawarehouse.io/wp-content/uploads/2020/04/MSSQL-1.png", name: 'MSSql', color: '#f3bc3e' },
    { icon: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png", name: 'MongoDB', color: '#f3bc3e' },
  
  
  
  ];



  export const MyProjects = [
    {
      title: 'Rent A Car System ',
      description: 'A car rental system with real-time chat functionality, allowing users to browse available cars and communicate directly with service providers.',
      link: 'https://chatapp-430709.web.app',
      github: 'https://github.com/dor1kk/Rent-A-Car-System',
      images: [RentACarMockup],
      status: 'in-progress',
      category: 'Web',
      technologies: ['React', 'Tailwind', 'Firebase'],
      techImage: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO7rysmw8Lw3y23LjiGZjCNlSETkSKjHp5g&s',
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png',
        'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp',
        'https://seeklogo.com/images/F/firestore-logo-3828671CC5-seeklogo.com.png'
      ],
      audience: 'Car renters and rental service providers',
    },
    {
      title: 'Learning Management System',
      description: 'An LMS platform for online education, featuring course management, user enrollment, and progress tracking.',
      link: 'https://project-three-link.com',
      github: 'https://github.com/dor1kk/Learning-Management-System',
      images: [LMSMockup],
      status: 'finished',
      category: 'Web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      techImage: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO7rysmw8Lw3y23LjiGZjCNlSETkSKjHp5g&s',
        'https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67',
        'https://cdn.iconscout.com/icon/free/png-256/free-css-131-722685.png',
        'https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-tx16mhk6.png',
        'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
        'https://pipedream.com/s.v0/app_1YMhwo/logo/orig'
      ],
      audience: 'Students and educators',
    },
    {
      title: 'Byte Tech Store',
      description: 'An e-commerce platform inspired by popular tech stores, featuring product listings, user profiles, and interactive comments.',
      link: 'https://bytetechstore.netlify.app/',
      github: 'https://github.com/dor1kk/Tech-Store-E-Commerce',
      images: [ByteMockup],
      status: 'in-progress',
      category: 'Web',
      technologies: ['React', 'Node.js', 'Ant Design'],
      techImage: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO7rysmw8Lw3y23LjiGZjCNlSETkSKjHp5g&s',
        'https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-tx16mhk6.png',
        'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp',
      ],
      audience: 'Tech enthusiasts and online shoppers',
    },
    {
      title: 'Health Care Web',
      description: 'A healthcare web app that allows patients to browse doctors, set appointments, and manage their health information.',
      link: 'https://health-care-doc.netlify.app/',
      github: 'https://github.com/dor1kk/Health-Care-System',
      images: [HealthCareMockup],
      status: 'in-progress',
      category: 'Web',
      technologies: ['React', 'Tailwind', 'Sanity'],
      techImage: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO7rysmw8Lw3y23LjiGZjCNlSETkSKjHp5g&s',
        'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png',
        'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp',
        'https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67'
      ],
      audience: 'Patients and healthcare providers',
    },

    {
      title: 'MusicAL - Listen Free',
      description: 'A music app that allows users to browse and listen to their favorite songs.',
      link: 'https://musicalb.netlify.app/',
      github: 'https://github.com/dor1kk/MusicApp',
      images: [MusicalMockup],
      status: 'in-progress',
      category: 'Web',
      technologies: ['React', 'Tailwind', 'Sanity'],
      techImage: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO7rysmw8Lw3y23LjiGZjCNlSETkSKjHp5g&s',
        'https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67',
        'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp',
        'https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-tx16mhk6.png',
        'https://www.shutterstock.com/image-vector/api-application-interface-icon-simple-600nw-2188533787.jpg'
      ],
      audience: 'Music enthusiasts',
    },
 
    {
      title: 'Movie Site App',
      description: 'An app for showcasing movies, with features like movie details, ratings, and user reviews.',
      link: 'https://moviesitetv.netlify.app/',
      github: 'https://github.com/dor1kk/MovieSite',
      images: [MovieAppMockup],
      status: 'finished',
      category: 'Web',
      technologies: ['React', 'Bootstrap', 'API Integration'],
      techImage: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO7rysmw8Lw3y23LjiGZjCNlSETkSKjHp5g&s',
        'https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67',
        'https://cdn.iconscout.com/icon/free/png-256/free-css-131-722685.png',
        'https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-tx16mhk6.png',
        'https://www.shutterstock.com/image-vector/api-application-interface-icon-simple-600nw-2188533787.jpg',
      ],
      audience: 'Movie enthusiasts',
    }
  ];
  



  import { FaLaptopCode, FaCogs, FaPalette } from 'react-icons/fa';

  export const MyServices = [
      {
          name: "Web Development",
          icon: "https://cdn-icons-png.freepik.com/512/3397/3397143.png",
          text: "Creating dynamic and responsive websites using the latest technologies to ensure optimal performance and user experience.",
      },
      {
          name: "Software System Development",
          icon: "https://cdn-icons-png.freepik.com/512/8759/8759087.png",
          text: "Developing robust software systems tailored to meet the specific needs of businesses and organizations.",
      },
      {
          name: "UI/UX Design",
          icon: "https://cdn-icons-png.freepik.com/512/8343/8343130.png",
          text: "Designing intuitive and engaging user interfaces that enhance the overall user experience and interaction.",
      }
  ];
  