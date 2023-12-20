import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {

    const buttonStyles = isSelected
    ? "text-black bg-gray-500"
    : "text-black border-slate-700 hover:border-black"

  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>
  );
};

export default ProjectTag;