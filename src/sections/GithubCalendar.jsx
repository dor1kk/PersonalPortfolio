import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = () => {
  const theme = {
    light: ['#f3f4f6', '#1e3a8a', '#2563eb', '#3b82f6', '#93c5fd'], // Light theme colors with blue shades
    text: '#ffffff'  // Ensures all text is white
  };

  return (
    <div className="flex items-center justify-center p-6 md:p-12 bg-gray-50 ">
      <div className="text-center w-full max-w-4xl">
        <div className="relative flex flex-col items-center mb-16 space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4">
          <h5 className="text-[#16b7ea] text-xl md:text-2xl opacity-75 glow-effect">
            &lt;h3&gt;
          </h5>
          <h5 className="relative font-montserrat text-[#0f172a] text-2xl md:text-3xl lg:text-4xl font-bold ">
            My <span className="text-[#16b7ea] italic">Activity</span>
          </h5>
          <h5 className="text-[#16b7ea] text-xl md:text-2xl opacity-75 glow-effect">
            &lt;/h3&gt;
          </h5>
        </div>
        <GitHubCalendar 
          username="dor1kk" 
          blockSize={14}  // Adjusted block size for better responsiveness
          blockMargin={4}  // Adjusted block margin for better responsiveness
          theme={theme}
          fontSize={15}  // Adjusted font size for better readability on smaller screens
        />
      </div>
    </div>
  );
};

export default GithubCalendar;
