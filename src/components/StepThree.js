import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const StepThree = ({ video, prevStep }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadVideo = async () => {
    setIsUploading(true);
    setError(null);

    // Simulate video upload
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance of success

      setIsUploading(false);

      if (!success) {
        setError('Upload failed. Please try again.');
      } else {
        alert('Video uploaded successfully!');
      }
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Review & Upload</h2>
        {video && (
          <video
            controls
            src={URL.createObjectURL(video)}
            className="w-full rounded-lg shadow-md mb-4"
          ></video>
        )}
        {isUploading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col items-center">
            {error && (
              <div className="text-red-500 mb-2">{error}</div>
            )}
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Back
            </button>
            <button
              onClick={uploadVideo}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
            >
              Upload Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepThree;