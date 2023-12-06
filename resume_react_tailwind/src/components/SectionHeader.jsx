import React from "react";
import { Divider } from "antd";
import "./sectionHeader.css";
const SectionHeader = ({ image, sectionName }) => {
  return (
    <div className="mt-6 mb-3">
      <div className="flex text-2xl justify-start items-end">
        <img className="w-8 mr-3 h-7 mb-0.5" src={image} alt="" />
        <strong className="flex items-end section-header-font-style">
          {sectionName}
        </strong>
      </div>
      <Divider
        orientation="left"
        className="border-2 border-sky-500 m-0 p-0"
      ></Divider>
    </div>
  );
};

export default SectionHeader;
