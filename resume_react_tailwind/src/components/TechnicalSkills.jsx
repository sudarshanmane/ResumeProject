import React from "react";

const TechnicalAndSoftSkills = ({ skillss }) => {
  let skills = skillss.map((element) => {
    return (
      <div className="w-fit border-2 p-1 bg-slate-300 text-slate-700 rounded border-slate-700">
        {element}
      </div>
    );
  });
  return <div className="flex flex-wrap gap-2">{skills}</div>;
};

export default TechnicalAndSoftSkills;
