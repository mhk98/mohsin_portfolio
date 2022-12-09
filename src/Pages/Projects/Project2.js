import React from "react";
import project1 from "../../images/project/project2/project1.png";
import project2 from "../../images/project/project2/project2.png";
import project3 from "../../images/project/project2/project3.png";
import project4 from "../../images/project/project2/project4.png";

const Project2 = () => {
  return (
    <div className="lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid grid-cols-1 gap-8 mx-8 mt-8">
      <div className="">
        <div class="carousel border-primary">
          <div id="item1" class="carousel-item  ">
            <img src={project1} alt="" />
          </div>
          <div id="item2" class="carousel-item  ">
            <img src={project2} alt="" />
          </div>
          <div id="item3" class="carousel-item  ">
            <img src={project3} alt="" />
          </div>
          <div id="item4" class="carousel-item  ">
            <img src={project4} alt="" />
          </div>
        </div>
        <div class="flex justify-center   py-2 gap-2">
          <a href="#item1" class="btn btn-xs">
            1
          </a>
          <a href="#item2" class="btn btn-xs">
            2
          </a>
          <a href="#item3" class="btn btn-xs">
            3
          </a>
        </div>
      </div>
      <div className="text-white  ">
        <h2 className="text-3xl text-left">Name: X Autos Warehouse</h2>
        <div className="text-left mt-8">
          <li>
            Email verification after google sign in and sign up with email
            password.
          </li>
          <li>User can delete inventory and also add new inventory items.</li>
          <li>Order page users can update their quantity there.</li>
        </div>
        <div className="mt-4">
          <h2>Technology</h2>
        </div>
        <div className="border border-primary"></div>
        <div className="mt-2">
          <button class="btn btn-primary text-white mr-4">HTML</button>
          <button class="btn btn-primary text-white mr-4">CSS</button>
          <button class="btn btn-primary text-white ml-4">JS</button>
          <button class="btn btn-primary text-white ml-4">MERN</button>
        </div>
        <div className="border border-primary mt-2"></div>
        <div className="mt-4">
          <button className="btn border-2 border-primary mr-4">
            <a
              target="_blank"
              href="https://jocular-creponne-ce5dcc.netlify.app/"
            >
              Live Website
            </a>{" "}
          </button>
          <button className="btn border-2 border-primary mr-4">
            <a
              target="_blank"
              href="https://github.com/mhk98/warehouse-management-clients-side.git"
            >
              Client Code
            </a>{" "}
          </button>
          <button className="btn border-2 border-primary">
            <a
              target="_blank"
              href="https://github.com/mhk98/warehouse-backend.git"
            >
              Server Code
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project2;
