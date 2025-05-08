# IoT-Based Smart Billboard

An intelligent advertising system built as part of the **Samsung Innovation Campus IoT Training 2025**. This project dynamically displays video advertisements based on real-time environmental conditions such as motion, temperature, and noise levels. It leverages IoT sensors, edge computing, and cloud integration to optimize ad targeting and engagement.

## 🚀 Features

- 🔍 **Motion Detection**: Activates the display only when people are nearby using a PIR sensor.
- 🌡️ **Weather Awareness**: Selects ad content based on temperature (hot/cold) using a DHT11 sensor.
- 🔊 **Sound-Based Context**: Adjusts ad type depending on ambient noise levels via a KY-038 analog sound sensor.
- 🤖 **AI-Powered Ad Optimization**: Intelligent logic to select the most relevant ads from the database.
- ☁️ **Cloud Integration**: Ads are fetched and managed via **Cloudinary** for efficient media delivery.
- 🎥 **Video Display**: Replaces static LCD with a media-capable screen for rich video content.
- 💡 **Energy-Efficient**: Plays content only when needed, reducing power usage.

## 🛠️ Tech Stack

- **Hardware**: Raspberry Pi 4 Model B, DHT11, PIR Sensor, KY-038 Sound Sensor, HDMI-compatible video screen
- **Software**: Python (for sensor interfacing), Geany (IDE on Raspberry Pi OS)
- **Cloud**: Cloudinary (ad storage and delivery)
- **AI Logic**: Ad selection rules based on sensor inputs

## 📦 Folder Structure

Smart_Billboard/
├── backend/
│ └── main.py # Sensor data processing and ad selection logic
├── frontend/
│ └── display.py # Code to render selected video ad
├── media/
│ └── sample_ads/ # Local sample ad files
├── cloud/
│ └── cloudinary_config.py # Cloudinary integration settings
└── README.md
