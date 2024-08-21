import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Education = () => {
  return (
    <section className="mb-8">
      <Slide direction="up">
        <p className='text-primary italic text-xl text-center'>My Education</p>
      </Slide>
      <Slide direction="up" delay={100}>
        <h2 className="text-4xl text-white font-bold mb-4 text-center">What's My <span className='text-primary'>Education?</span></h2>
      </Slide>
      
      <div className="mb-8">
        <Slide direction="up" delay={200}>
          <ol className="border-s-2 mt-24 md:mt-12 border-primary dark:border-primary-500">
            <li>
              <div className="flex-start flex items-center">
                <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                <h4 className="-mt-2 text-xl text-white font-semibold">High School</h4>
              </div>
              <div className="mb-6 ms-6 pb-6">
                <a href="#!" className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Graduated in 2022</a>
                <p className="mb-4 mt-2 text-neutral-300 dark:text-neutral-300">
                  Successfully completed High School with a focus on Science and Mathematics. 
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  Read more
                </button>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center">
                <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                <h4 className="-mt-2 text-xl text-white font-semibold">Ubt College</h4>
              </div>
              <div className="mb-6 ms-6 pb-6">
                <a href="#!" className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Expected Graduation: 2025</a>
                <p className="mb-4 mt-2 text-neutral-300 dark:text-neutral-300">
                  Pursuing a Bachelor of Science in Computer Science and Engineering, focusing on software development and data science.
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  Read more
                </button>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center">
                <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                <h4 className="-mt-2 text-xl text-white font-semibold">Online Courses</h4>
              </div>
              <div className="mb-6 ms-6 pb-6">
                <a href="#!" className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Completed in 2023,2024</a>
                <p className="mb-4 mt-2 text-neutral-300 dark:text-neutral-300">
                  Completed several online courses including Great Learning's Introduction to Web Development, Free Code Camp's Responsive Web Design, and Cs50 2023 Computer Science Course.
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  Read more
                </button>
              </div>
            </li>
          </ol>
        </Slide>
      </div>
    </section>
  );
};

export default Education;
