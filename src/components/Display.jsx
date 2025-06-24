import React from 'react';
import Projectdisplay from "./resultComponents/Projectdisplay";
import QualificationDisplay from "./resultComponents/QualificationsDisplay";
import CertificateDisplay from './resultComponents/CertificateDisplay';

function Display({ generalInformation, Education, projectData, Certificates }) {
  return (
    <div className='w-full h-full bg-white mb-10 p-6 md:p-10 lg:p-12'>
      <div className="max-w-4xl mx-auto text-center">
        {/* General Info */}
        <h1 className='font-bold text-3xl text-gray-800'>{generalInformation.fullName}</h1>
        <div className="contacts flex flex-wrap justify-center gap-6 border-b border-gray-400 pb-3 mt-2 text-sm text-gray-600">
          <li className="list-none">{generalInformation.phoneNumber}</li>
          <li className="list-none">{generalInformation.email}</li>
        </div>
        <p className='break-words text-gray-700 mt-4 text-sm md:text-base leading-relaxed'>
          {generalInformation.description}
        </p>
      </div>

      {/* Projects Section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="border-b border-gray-400 pb-2 mb-4">
          <h3 className="text-xl font-semibold text-left">RELEVANT PROJECT EXPERIENCE</h3>
        </div>
        <div className="space-y-4">
          {Object.values(projectData).map((project, i) => (
            <Projectdisplay key={i} project={project} />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="border-b border-gray-400 pb-2 mb-4">
          <h3 className="text-xl font-semibold text-left">EDUCATION</h3>
        </div>
        <QualificationDisplay Education={Education} />
      </div>

      {/* Certificates Section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="border-b border-gray-400 pb-2 mb-4">
          <h3 className="text-xl font-semibold text-left">CERTIFICATIONS</h3>
        </div>
        <CertificateDisplay Certificates={Certificates} />
      </div>
    </div>
  );
}

export default Display;
