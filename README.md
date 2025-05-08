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

```markdown
## 📁 Project Structure

```plaintext
IoT-Based-Smart-Billboard/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   └── style.css
├── sensors/
│   ├── dht11_sensor.py
│   ├── motion_detector.py
│   └── sound_level.py
├── media/
│   └── ads/
│       ├── hot_weather_ad.mp4
│       └── cold_weather_ad.mp4
├── utils/
│   └── cloudinary_uploader.py
├── README.md
└── structure.txt
---


## 🔄 Workflow

1. Raspberry Pi reads data from sensors in real-time.
2. AI logic processes sensor data to determine the most appropriate ad.
3. Relevant ad is fetched from Cloudinary.
4. Video is played on the connected screen only when motion is detected.

## 👨‍💻 Team

- Developed by a team of 3 as a capstone project under **Samsung Innovation Campus IoT Training 2025**.

## 🕒 Timeline

- Built and tested over a 10-day development sprint during training.

## 📌 Notes

- Designed for smart city environments, shopping malls, and public transit spaces.
- System ensures minimal energy usage by being idle when no one is nearby.

## 📜 License

Developed for academic and non-commercial use as part of Samsung Innovation Campus.
