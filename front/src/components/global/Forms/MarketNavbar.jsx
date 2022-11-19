import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";

import Button from "./../Button";
import React, { useState } from "react";
import Name from "./Name";
import Setup from "./Setup";
import Stock from "./Stock";
import Customization from "./Customization";

const obj = {};
const steps = [
  "Name your shop",
  "Set up your shop",
  "Stock your shop",
  "Set up for customization",
];
const stepDesciption = [<Name />, <Setup />, <Stock />, <Customization />];

const MarketNavbar = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;
  const allStepsCompleted = completedSteps === totalSteps;

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <Box paddingBottom='20px' sx={{ borderBottom: 1 }}>
        <Button
          disableRipple
          sx={{
            paddingLeft: "30px",
            fontWeight: "medium",
            fontSize: "32px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          a l m a r i
        </Button>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step
              key={step}
              completed={completed[index]}
              sx={{
                "& .MuiStepLabel-root .Mui-active": {},
                "& .MuiStepLabel-root .Mui-completed": {},
              }}
            >
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>
        {allStepsCompleted ? (
          <Typography> All Steps Completed</Typography>
        ) : (
          <>
            <Box>{stepDesciption[activeStep]}</Box>
            <Box
              sx={{
                width: "98vw",
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
                position: "fixed",
                bottom: 0,
                borderTop: 1,
              }}
            >
              <Button
                onClick={handleNext}
                version='primary'
                sx={{
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "none",
                  },
                }}
              >
                {completedSteps === totalSteps - 1
                  ? "Finish"
                  : "Save & Continue"}
              </Button>
            </Box>
          </>
        )}
      </div>
    </div>
  );
};

export default MarketNavbar;
