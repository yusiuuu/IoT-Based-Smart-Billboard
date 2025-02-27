import { useState, useEffect } from "react";

const useSensorData = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 25,
    humidity: 50,
    motionDetected: false,
    noiseLevel: 30,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        temperature: Math.floor(Math.random() * (35 - 20 + 1)) + 20, // 20-35°C
        humidity: Math.floor(Math.random() * (80 - 40 + 1)) + 40, // 40-80%
        motionDetected: Math.random() < 0.5, // 50% chance of motion
        noiseLevel: Math.floor(Math.random() * (80 - 20 + 1)) + 20, // 20-80 dB
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return sensorData;
};

export default useSensorData;
