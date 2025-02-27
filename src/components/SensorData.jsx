import React from "react";
import useSensorData from "../hooks/useSensorData";

const SensorData = () => {
  const { temperature, humidity, motionDetected, noiseLevel } = useSensorData();

  return (
    <div style={{ textAlign: "center", padding: "20px", color: "white" }}>
      <h2>Sensor Data</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Noise Level: {noiseLevel} dB</p>
      <p>Motion Detected: {motionDetected ? "Yes" : "No"}</p>
    </div>
  );
};

export default SensorData;
