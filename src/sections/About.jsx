import React from 'react';

const Education = () => {
  return (
    <section className="mb-8">
      <p className='text-primary italic text-xl text-center'>My Education</p>
      <h2 className="text-4xl font-bold mb-4 text-center">What's My <span className='text-primary'>Education?</span></h2>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center items-center p-4 mb-4">
          <div className="w-full sm:w-1/2 lg:w-2/4 p-4">
            <div className="shadow-lg p-4">
              <h3 className="text-2xl font-bold mb-2">High School</h3>
              <p className="italic mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <span className="inline-block bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">Completed</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/4 p-4">
            <div className="shadow-lg p-4">
              <h3 className="text-2xl font-bold mb-2">Ubt College</h3>
              <p className="italic mb-2">Bachelor of Science in Computer Science and Engineering</p>
              <span className="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">In Progress</span>
            </div>
          </div>
        </div>

        <p className='text-primary italic text-xl text-center'>Online Courses I've Completed</p>
        <br />

        <div className="flex flex-col items-center">
          <div className="w-full sm:w-4/5 lg:w-2/3 p-4 mb-4">
          <div className="flex items-center max-lg:items-start max-lg:gap-4 max-lg:flex-col mb-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center max-lg:hidden justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-2xl font-bold">Introduction to Web Development by <span className='text-primary'>Great Learning</span></h3>
                <p className="text-gray-600">Completed [May, 2023]</p>
              </div>
              <div className="flex items-center">
                <span className="inline-block max-lg:ml-4 bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">Completed</span>
              </div>
            </div>

            <div className="flex items-center max-lg:items-start max-lg:gap-4 max-lg:flex-col mb-4">
              <div className="w-10 h-10 bg-primary rounded-full max-lg:hidden flex items-center justify-center">
                <span className="text-white font-bold ">2</span>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-2xl font-bold">Responsive Web Design by <span className='text-primary'>Free Code Camp </span></h3>
                <p className="text-gray-600">Completed [Month, Year]</p>
              </div>
              <div className="flex items-center">
                <span className="inline-block max-lg:ml-4 bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">Completed</span>
              </div>
            </div>

            <div className="flex items-center max-lg:items-start max-lg:gap-4 max-lg:flex-col mb-4">
            <div className="w-10 h-10 bg-primary rounded-full max-lg:hidden flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-2xl font-bold"><span className='text-primary'>Cs50</span> 2023 Computer Science Course</h3>
                <p className="text-gray-600">Completed [Month, Year]</p>
              </div>
              <div className="flex items-center">
                <span className="inline-block max-lg:ml-4 bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">Completed</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <a href="/all-courses" className="text-primary underline">See All Courses</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
