import React from "react";
import "./../statics/footer.css";
import { Grid } from "@mui/material";
import { useState, useRef, useMemo } from "react";
import Image from "./Image";
import photo from "./z.jpg";
import { useEffect } from "react";
function Footer() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px 0px 400px 0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <>
      <h1 className='asd'>
        <p>{!isVisible ? "not in viewport" : "ads"}</p>
      </h1>
      <div className='gap'></div>
      <div ref={targetRef}>
        <div className='footer'>
          <div className='footer-elements'>
            <Grid container direction='row'>
              <Grid item xs={3} className='grid-for-footer'>
                Get Help
              </Grid>
              <Grid item xs={3} className='grid-for-footer'>
                Shop
              </Grid>
              <Grid item xs={3} className='grid-for-footer'>
                Sell your Items
              </Grid>
              <Grid item xs={3} className='grid-for-footer'>
                About
              </Grid>
            </Grid>
            <div className='footer-bottom'>
              <div className='footer-bottom-elements'>Almari Group</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
