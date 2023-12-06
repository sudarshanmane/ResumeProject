import React from "react";

const EducationDetails = ({ title, desc, date, duration }) => {
  return (
    <div className="section-summary text-xl flex justify-between">
      <div className="">
        <strong>{title}</strong>
        <p className="italic">{desc}</p>
        <strong>{duration && duration}</strong>
      </div>
      <p>{date}</p>
    </div>
  );
};

export default EducationDetails;
