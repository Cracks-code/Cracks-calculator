import React from "react";
import '../css/Activitybar.css';
import { Link } from 'react-router-dom'

export default function Activitybar() {
  return (
    <>
    <div className="container my-4 text-center text-dark">
        <h3><b>Welcome To Cracks-Calculator</b></h3>
    </div>
    <div className="Mcontainer scroll"> 
    <div className="container">
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#Bsic-collapse"
            aria-expanded="false"
          >
            <b>Basic</b>
          </button>
          <div className=" mx-4 container collapse" id="Bsic-collapse" >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/add" className="link-dark rounded">
                  Addintion
                </Link>
              </li>
              <li>
                <Link to="/subtract" className="link-dark rounded">
                  Subtraction
                </Link>
              </li>
              <li>
                <Link to="/Multiply" className="link-dark rounded">
                  Multiply
                </Link>
              </li>             
              <li>
                <Link to="/devide" className="link-dark rounded">
                  Devide
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            <b>Square & Cube</b>
          </button>
          <div className=" mx-4 container collapse" id="dashboard-collapse" >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/sq" className="link-dark rounded">
                 Square of x
                </Link>
              </li>
              <li>
                <Link to="/sqrt" className="link-dark rounded">
                  Square root of x
                </Link>
              </li>
              <li>
                <Link to="/cb" className="link-dark rounded">
                  Cube of x
                </Link>
              </li>
              <li>
                <Link to="/cbrt" className="link-dark rounded">
                  Cube root of x
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            <b>Shapes</b>
          </button>
          <div className="mx-4 container collapse" id="orders-collapse" >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/pRectangle" className="link-dark rounded">
                  Parimeter of Rectangle
                </Link>
              </li>
              <li>
                <Link to="/pSquare" className="link-dark rounded">
                Parimeter of Square
                </Link>
              </li>
              <li>
                <Link to="/pTriangle" className="link-dark rounded">
                Parimeter of Triangle
                </Link>
              </li>
              <li>
                <Link to="/aRectangle" className="link-dark rounded">
                  Area of Rectangle
                </Link>
              </li>
              <li>
                <Link to="/aSquare" className="link-dark rounded">
                Area of Square
                </Link>
              </li>
              <li>
                <Link to="/aTriangle" className="link-dark rounded">
                  Area of Triangle
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      </div>
    </div>
    </>
  );
}
