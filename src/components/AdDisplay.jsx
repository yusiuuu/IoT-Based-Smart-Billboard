import React, { useState, useEffect } from "react";
import useSensorData from "../hooks/useSensorData";
import VideoPlayer from "./VideoPlayer";

const ads = {
  default: "/ads/default1.mp4",
  hot: "/ads/hot_drink.mp4",
  cold: "/ads/cold_classroom.mp4",
  humid: "/ads/dehumidifier.mp4",
  noisy: "/ads/noise_cancel.mp4",
};

const AdDisplay = () => {
  const { temperature, humidity, motionDetected, noiseLevel } = useSensorData();
  const [selectedAd, setSelectedAd] = useState(ads.default);

  useEffect(() => {
    if (!motionDetected) {
      setSelectedAd(null); // No ad if no motion
      return;
    }

    if (temperature > 30) {
      setSelectedAd(ads.hot); // Hot weather -> Hot drink ad
    } else if (temperature < 22) {
      setSelectedAd(ads.cold); // Cold weather -> Classroom heating ad
    } else if (humidity > 70) {
      setSelectedAd(ads.humid); // High humidity -> Dehumidifier ad
    } else if (noiseLevel > 60) {
      setSelectedAd(ads.noisy); // High noise -> Noise cancellation ad
    } else {
      setSelectedAd(ads.default); // Default fallback ad
    }
  }, [temperature, humidity, noiseLevel, motionDetected]);

  return (
    <div style={{ textAlign: "center", padding: "20px", color: "white" }}>
      <h2>Ad Display</h2>
      {motionDetected ? (
        selectedAd ? <VideoPlayer adSrc={selectedAd} /> : <p>No ad available</p>
      ) : (
        <p>No motion detected. No ad playing.</p>
      )}
    </div>
  );
};

export default AdDisplay;
