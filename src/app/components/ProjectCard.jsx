import React from 'react';

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div 
        className="h-52 md:h-72 rounded-t-xl relative group" 
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
      </div>

      <div className='text-black rounded-b-xl mt-3 bg-gray-400 py-6 px-4'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
          <p className='text-[#444344]'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;