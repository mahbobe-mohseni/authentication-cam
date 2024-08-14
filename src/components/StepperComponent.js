import React from 'react';
import Stepper from 'react-stepper-horizontal';

const steps = [
  { title: 'Login' },
  { title: 'Video Authentication' },
  { title: 'Review & Upload' }
];

const StepperComponent = ({ activeStep }) => {
  return (
    <div className="w-full mb-6">
      <Stepper steps={steps} activeStep={activeStep - 1} />
    </div>
  );
};

export default StepperComponent;