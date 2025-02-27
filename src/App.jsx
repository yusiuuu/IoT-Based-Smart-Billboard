import React, { useState, useEffect } from 'react';
import VideoPlayer from './components/VideoPlayer';
import SensorDisplay from './components/SensorDisplay';
import './styles.css';

const App = () => {
    const [sensorData, setSensorData] = useState({
        temperature: 25,
        humidity: 50,
        soundLevel: 40,
        motionDetected: false
    });

    const [currentAd, setCurrentAd] = useState(null);
    const [isBlackScreen, setIsBlackScreen] = useState(false);

    const ads = {
        cold: ['cold_classroom.mp4', 'dehumidifier.mp4'],
        hot: ['hot_drink.mp4'],
        moderate: ['noise_cancel.mp4', 'default_ad.mp4', 'default1.mp4'],
        general: ['general_id.mp4', 'default1.mp4']
    };

    useEffect(() => {
        const updateSensorData = () => {
            const newSensorData = {
                temperature: Math.floor(Math.random() * 35) + 10,
                humidity: Math.floor(Math.random() * 100),
                soundLevel: Math.floor(Math.random() * 100),
                motionDetected: Math.random() > 0.3
            };
            setSensorData(newSensorData);
            selectAd(newSensorData);
        };

        const selectAd = (data) => {
            if (!data.motionDetected) {
                setIsBlackScreen(true);
                setTimeout(() => {
                    setIsBlackScreen(false);
                }, 8000);
                return;
            }

            setIsBlackScreen(false);
            if (data.temperature < 18) {
                setCurrentAd(ads.cold[Math.floor(Math.random() * ads.cold.length)]);
            } else if (data.temperature > 28) {
                setCurrentAd(ads.hot[Math.floor(Math.random() * ads.hot.length)]);
            } else {
                setCurrentAd(ads.moderate[Math.floor(Math.random() * ads.moderate.length)]);
            }
        };

        updateSensorData();
        const interval = setInterval(updateSensorData, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="video-container">
                {isBlackScreen ? (
                    <div className="black-screen"></div>
                ) : (
                    <VideoPlayer src={`/ads/${currentAd}`} muted={sensorData.soundLevel > 60} />
                )}
            </div>
            <div className="sensor-container">
                <SensorDisplay data={sensorData} />
            </div>
        </div>
    );
};

export default App;
