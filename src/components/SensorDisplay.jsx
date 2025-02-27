import React from 'react';

const SensorDisplay = ({ data }) => {
    return (
        <div className="sensor-data">
            <span>🌡 Temperature: {data.temperature}°C</span>
            <span>💧 Humidity: {data.humidity}%</span>
            <span>🔊 Sound: {data.soundLevel} dB</span>
            <span>🚶 Motion: {data.motionDetected ? "Detected" : "None"}</span>
        </div>
    );
};

export default SensorDisplay;
