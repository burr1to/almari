import React from "react";
import { useEffect } from "react";
import "./../statics/footer.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faGlobeAsia,
  faLocationDot,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='footer'>
      <div className='main'>
        <div className='footer-con'>
          <div className='footer-grid'>
            <h4>About Us</h4>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className='footer-grid'>
            <h4>Categories</h4>

            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <Link to='/catalog/clothing' onClick={handleClick}>
                  Clothing
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <Link to='/catalog/accessories' onClick={handleClick}>
                  Accessories
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <Link to='/catalog/handicrafts' onClick={handleClick}>
                  Handicrafts
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <Link to='/catalog/furniture' onClick={handleClick}>
                  Furniture
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-grid'>
            <h4>Shop in Almari</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <a href='#'>Sell your Items</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <a href='#'>Liked Items</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <a href='#'>View Profile</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <a href='#'>Register Account</a>
              </li>
            </ul>
          </div>
          <div className='footer-grid'>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <a href='#'>Dhulikhel, Kathmandu</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} />
                <a href='#'>+977-2323232323</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href='#'>almarigroup@gmail.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobeAsia} />
                <a href='#'>almari.com.np</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='copy'>
          <p>&copy; Almari Group 2022 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
