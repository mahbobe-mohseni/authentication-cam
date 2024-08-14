import React, { useState } from 'react';
import StepperComponent from './components/StepperComponent';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [video, setVideo] = useState(null);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  const handleVideoUpload = (recordedVideo) => {
    setVideo(recordedVideo);
    nextStep();
  };

  const steps = [
    <StepOne nextStep={nextStep} />,
    <StepTwo nextStep={nextStep} prevStep={prevStep} handleVideoUpload={handleVideoUpload} />,
    <StepThree video={video} prevStep={prevStep} />
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <StepperComponent activeStep={currentStep} />
      {steps[currentStep - 1]}
    </div>
  );
}

export default App;