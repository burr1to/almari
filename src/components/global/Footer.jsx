import React from "react";
import "./../statics/footer.css";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <footer className='footer'>
      <div className='main'>
        <div className='footer-con'>
          <div className='footer-grid'>
            <h4>About Us</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className='footer-social'>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
            </div>
          </div>
          <div className='footer-grid'>
            <h4>Shop</h4>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
          <div className='footer-grid'>
            <h4>Sell your Items</h4>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
          <div className='footer-grid'>
            <h4>Contact Us</h4>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
