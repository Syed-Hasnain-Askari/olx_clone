import React from 'react';
import banner from './images/olx0.png';
function Category() {
    return (
      <div className="category-section">
        <nav className="navbar navbar-expand-lg shadow category-navbar mt-5">
        <a className="navbar-brand" href="#">ALL CATEGORIES</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Mobile Phones<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Moter Cycles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Houses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TV-Video-Audio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tablets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Land & Plots</a>
            </li>
          </ul>
        </div>
      </nav>
      <img src={banner} className="img-responsive d-block w-100"></img>
      </div>
      
       
    );
}
export default Category