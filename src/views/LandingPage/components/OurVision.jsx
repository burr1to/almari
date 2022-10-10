import React from "react";
import "./vision.css";
import Image from "./../../../components/global/Image";
import vision from "./../statics/vision.jpg";

function OurVision() {
  return (
    <>
      <div className='vision-con'>
        <div className='vision-img'>
          <Image src={vision} className='main_image vision' />
        </div>
        <div className='vision-description'>
          <h3 className='first'>What We Do</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <button className='about-us'>About Us</button>
        </div>
      </div>
    </>
  );
}

export default OurVision;
