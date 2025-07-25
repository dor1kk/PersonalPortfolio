import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Star } from 'lucide-react';

const PrintableResume = ({ resumeData }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 font-sans leading-relaxed">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-gray-300 pb-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          {resumeData.personal.name}
        </h1>
        <h2 className="text-xl text-blue-600 font-semibold mb-4">
          {resumeData.personal.title}
        </h2>
        
        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            {resumeData.personal.email}
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-1" />
            {resumeData.personal.phone}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {resumeData.personal.location}
          </div>
          <div className="flex items-center">
            <Globe className="w-4 h-4 mr-1" />
            {resumeData.personal.website}
          </div>
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-1" />
            {resumeData.personal.linkedin}
          </div>
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-1" />
            {resumeData.personal.github}
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-1">
          Professional Summary
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {resumeData.summary}
        </p>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-1">
          Professional Experience
        </h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                <p className="text-blue-600 font-medium">{exp.company} • {exp.location}</p>
              </div>
              <div className="text-sm text-gray-600 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {exp.period}
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-sm">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-1">
          Education
        </h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-green-600 font-medium">{edu.institution} • {edu.location}</p>
              </div>
              <div className="text-sm text-gray-600 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {edu.period}
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              {edu.details.map((detail, i) => (
                <li key={i} className="text-sm">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-1">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 mb-2 capitalize">
                {category} Development
              </h4>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Projects */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-1 flex items-center">
          <Star className="w-5 h-5 mr-2" />
          Key Projects
        </h3>
        <ul className="space-y-2">
          {resumeData.projects.map((project, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm">{project}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrintableResume;
