import React, { useRef, useEffect } from 'react';

const VideoRecorder = ({ recording, setRecording, handleVideoUpload }) => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);

  useEffect(() => {
    const startRecording = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const videoBlob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        handleVideoUpload(videoBlob);
      };

      mediaRecorderRef.current = mediaRecorder;

      if (recording) {
        mediaRecorder.start();
      } else {
        mediaRecorder.stop();
      }
    };

    if (recording) {
      startRecording();
    } else {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
    }

    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [recording, handleVideoUpload]);

  return (
    <div className="relative w-full h-96">
      <video
        ref={videoRef}
        autoPlay
        className="w-full h-full object-cover rounded-lg border border-gray-300"
      ></video>
    </div>
  );
};

export default VideoRecorder;