import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center header-font-style">
      <div className="leading-10 w-8/12 ">
        <div className="">
          <h1 className="text-4xl font-extrabold header-name-font-style">
            Sudarshan Mane
          </h1>
          <h2 className="text-3xl font-bold italic mt-2">
            Full Stack Web Developer
          </h2>
        </div>
        <div className="grid grid-cols-2  mt-2 text-lg gap-x-64">
          <div className="flex items-center">
            <img
              className="w-5  h-5 mr-3"
              src="https://cdn-icons-png.flaticon.com/128/542/542689.png"
              alt="mail_image"
            />
            <a href="mailto:sudarshanmane2110@gmail.com">
              <strong>sudarshanmane2110@gmail.com</strong>
            </a>
          </div>
          <div className="flex items-center ">
            <img
              className="w-5  h-5 mr-3"
              src="https://cdn-icons-png.flaticon.com/128/447/447031.png"
              alt=""
            />
            <strong>Pune</strong>
          </div>
          <div className="flex items-center">
            <img
              className="w-5  h-5 mr-3"
              src="https://cdn-icons-png.flaticon.com/128/597/597177.png"
              alt=""
            />
            <strong>9370105149</strong>
          </div>{" "}
          <div className="flex items-center">
            <a
              href="https://github.com/sudarshanmane"
              className="flex items-center"
            >
              <img
                className="w-5  h-5 mr-3"
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt=""
              />
              <strong>Github</strong>
            </a>
          </div>{" "}
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/sudarshan-mane-065823236/"
              className="flex items-center"
            >
              <img
                className="w-5  h-5 mr-3"
                src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                alt=""
              />
              <strong>Linkedin</strong>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://sudarshan-mane-reactjs-responsive-portfolio.vercel.app/"
              className="flex items-center"
            >
              <img
                className="w-5  h-5 mr-3"
                src="https://cdn-icons-png.flaticon.com/128/1536/1536550.png"
                alt=""
              />
              <strong>Portfolio</strong>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
