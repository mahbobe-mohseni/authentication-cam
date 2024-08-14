import React, { useState } from 'react';
import VideoRecorder from './VideoRecorder';
// import selfieGif from '../assets/selfie-instructions.gif'; // Add your GIF here

const StepTwo = ({ nextStep, prevStep, handleVideoUpload }) => {
  const [recording, setRecording] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Video Authentication</h2>
        {/* <img src={selfieGif} alt="Instructions" className="mb-4 w-full max-w-xs mx-auto" /> */}
        <VideoRecorder
          recording={recording}
          setRecording={setRecording}
          handleVideoUpload={handleVideoUpload}
        />
        <div className="mt-4 flex justify-between">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={() => setRecording(!recording)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {recording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;