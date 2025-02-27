IoT-Based Smart Digital Billboard
This project is an IoT-enabled Smart Billboard that dynamically plays advertisements based on real-time environmental conditions. It uses Raspberry Pi 4 Model B and multiple sensors (DHT11 for temperature/humidity, PIR for motion detection, and KY-038 for sound levels) to optimize ad selection and playback.

Key Features
🔹 Dynamic Ad Selection – Plays specific video ads based on detected temperature, sound levels, and motion.
🔹 Motion-Based Activation – Ads play only when motion is detected; otherwise, the screen stays black for 8 seconds.
🔹 Sound-Adaptive Playback – If the noise level is above 60dB, ads play muted; otherwise, they have sound.
🔹 Adaptive Display Layout – 80% of the screen is dedicated to video ads, while 20% displays real-time sensor data (temperature, humidity, sound level, and motion status).
🔹 AI-Powered Optimization – The system can be integrated with AI for advanced ad selection based on crowd engagement and traffic conditions.

Technology Stack
Hardware: Raspberry Pi 4 Model B, DHT11, PIR sensor, KY-038 sound sensor
Software: React.js (for UI), Google Cloud IoT + Cloud Storage (for storing and retrieving ads), JavaScript (for real-time updates)
Storage & Processing: Ads are stored in public/ads, and sensor data is processed in real-time
Use Case
This Smart Billboard is designed for shopping malls, airports, railway stations, and smart city projects to enhance digital advertising efficiency by displaying relevant ads based on environmental factors.
