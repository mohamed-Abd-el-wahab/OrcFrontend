import { Mountain, PenTool as Tool, Battery, Shield, Cpu, Zap, Wifi, Settings, Eye } from 'lucide-react';
import { ProductType } from '../types/products';

export const products: ProductType[] = [
  {
    id: 'rover',
    name: 'ROVER',
    title: 'Robot Operations Vehicle for Exploration and Research',
    description: 'A heavy-duty, all-terrain mobile robot purpose-built for outdoor operation in diverse environments. With weather-resistant chassis, large industrial-grade wheels, and advanced drive control, ROVER can navigate uneven ground, gravel, grass, and slopes with stability and precision. Ideal for outdoor robotics education, field research, and prototyping.',
    image: '/rover.jpg',
    status: 'available',
    features: [
      {
        icon: Shield,
        title: 'Weather-Resistant Housing',
        description: 'Sealed electronics and IP54 rating for outdoor use in all conditions'
      },
      {
        icon: Mountain,
        title: 'All-Terrain Capability',
        description: 'High-traction rubber tires with specialized tread for any terrain'
      },
      {
        icon: Zap,
        title: 'Powerful 4WD System',
        description: 'Independent 4-wheel drive with high-torque motors for maximum terrain handling'
      },
      {
        icon: Tool,
        title: 'Modular Expansion',
        description: 'GPIO, I2C, SPI, UART interfaces supporting GPS, LIDAR, cameras, and robotic arms'
      },
      {
        icon: Battery,
        title: 'Extended Runtime',
        description: 'Dual 12V 6000 mAh Li-Ion batteries with BMS for 4-6 hours operation'
      },
      {
        icon: Eye,
        title: 'RGB LED System',
        description: 'LED ring for visibility and system feedback with power status indicators'
      }
    ],
    variants: [
      {
        id: 'rover-normal-s',
        name: 'ROVER Normal - Small',
        edition: 'Normal',
        size: 'Small',
        price: 9800,
        status: 'available',
        specs: {
          payload: 'Up to 15 kg',
          speed: 'Up to 8 km/h',
          runtime: '3-4 hours',
          dimensions: '280 x 280 x 110 mm',
          weight: '~6.5 kg',
          accuracy: 'GPS-ready, manual calibration',
          controller: 'ESP32 + Basic IMU',
          motors: '4x DC motors with encoders',
          communication: 'WiFi, Bluetooth',
          battery: '12V 3000 mAh Li-Ion',
          firmware: 'Standard firmware',
          safety: 'E-stop, power switch'
        },
        whatsInTheBox: {
          title: 'Normal – Small',
          description: 'Essential outdoor robotics kit for beginners.',
          color: 'green',
          items: [
            'ROVER Base Robot',
            '3000 mAh Battery',
            'USB Programmer',
            'Power Adapter',
            'Getting Started Manual',
            'Basic Tool Kit'
          ]
        }
      },
      {
        id: 'rover-normal-m',
        name: 'ROVER Normal - Medium',
        edition: 'Normal',
        size: 'Medium',
        price: 10800,
        status: 'available',
        specs: {
          payload: 'Up to 25 kg',
          speed: 'Up to 10 km/h',
          runtime: '4-5 hours',
          dimensions: '300 x 300 x 120 mm',
          weight: '~8 kg',
          accuracy: 'GPS with IMU sync',
          controller: 'ESP32 + IMU + GPS',
          motors: '4x High-torque DC motors',
          communication: 'WiFi, Bluetooth, GPS',
          battery: '12V 4000 mAh Li-Ion',
          firmware: 'Standard + GPS firmware',
          safety: 'E-stop, power switch, GPS fence'
        },
        whatsInTheBox: {
          title: 'Normal – Medium',
          description: 'For outdoor education and field work.',
          color: 'blue',
          items: [
            'ROVER Robot + GPS Module',
            '4000 mAh Battery',
            'USB Programmer',
            'Power Adapter',
            'Sensor Cable Set',
            'Field Operations Manual',
            'Weather Protection Kit'
          ]
        }
      },
      {
        id: 'rover-normal-l',
        name: 'ROVER Normal - Large',
        edition: 'Normal',
        size: 'Large',
        price: 11800,
        status: 'available',
        specs: {
          payload: 'Up to 30 kg',
          speed: 'Up to 10 km/h',
          runtime: '5-6 hours',
          dimensions: '350 x 350 x 140 mm',
          weight: '~10 kg',
          accuracy: 'GPS, IMU, solar-ready port',
          controller: 'ESP32 + Advanced IMU + GPS',
          motors: '4x High-torque DC motors with encoders',
          communication: 'WiFi, Bluetooth, GPS, LoRa',
          battery: '12V 6000 mAh Li-Ion + Solar ready',
          firmware: 'Advanced firmware + OTA',
          safety: 'E-stop, power switch, GPS fence, emergency beacon'
        },
        whatsInTheBox: {
          title: 'Normal – Large',
          description: 'Institutional bundle for schools and research labs.',
          color: 'red',
          items: [
            'ROVER Robot + GPS + Solar Mount',
            '6000 mAh Battery',
            'Solar Panel Kit',
            'USB + Bluetooth Programmer',
            'Expanded Curriculum Booklet',
            'Carrying Case',
            'Teacher\'s Support Sheet',
            'Emergency Beacon'
          ]
        }
      },
      {
        id: 'rover-pro-s',
        name: 'ROVER Pro - Small',
        edition: 'Pro',
        size: 'Small',
        price: 12500,
        status: 'available',
        specs: {
          payload: 'Up to 20 kg',
          speed: 'Up to 10 km/h',
          runtime: '4-5 hours',
          dimensions: '280 x 280 x 110 mm',
          weight: '~7.5 kg',
          accuracy: 'GPS + IMU, ROS2-ready',
          controller: 'ESP32 + Advanced IMU + GPS + ROS2',
          motors: '4x Servo motors with feedback',
          communication: 'WiFi, Bluetooth, GPS, ROS2 bridge',
          battery: '12V 4000 mAh High-discharge Li-Ion',
          firmware: 'Pro firmware + ROS2 + OTA',
          safety: 'E-stop, power switch, collision detection'
        },
        whatsInTheBox: {
          title: 'Pro – Small',
          description: 'Built for hackathons & technical users.',
          color: 'yellow',
          items: [
            'ROVER Robot + Aluminum Reinforced Frame',
            'Advanced IMU + GPS Sensor',
            '4000 mAh High-Discharge Battery',
            'ROS2 Development Module',
            'Quick Start Booklet',
            'USB-C Programmer',
            'Developer API Access'
          ]
        }
      },
      {
        id: 'rover-pro-m',
        name: 'ROVER Pro - Medium',
        edition: 'Pro',
        size: 'Medium',
        price: 13500,
        status: 'available',
        specs: {
          payload: 'Up to 30 kg',
          speed: 'Up to 10 km/h',
          runtime: '5-6 hours',
          dimensions: '300 x 300 x 120 mm',
          weight: '~9.5 kg',
          accuracy: 'GPS, IMU, SLAM-ready, ROS2 compatible',
          controller: 'ESP32 + IMU + GPS + SLAM + ROS2',
          motors: '4x Servo motors with encoders',
          communication: 'WiFi, Bluetooth, GPS, ROS2, SLAM',
          battery: '12V 5000 mAh High-discharge Li-Ion',
          firmware: 'Pro firmware + SLAM + ROS2 + OTA',
          safety: 'E-stop, power switch, obstacle avoidance, GPS fence'
        },
        whatsInTheBox: {
          title: 'Pro – Medium',
          description: 'Perfect for research & prototyping.',
          color: 'orange',
          items: [
            'All Pro Small features +',
            'LIDAR Mount + Servo Arm Bracket',
            'RGB LED Indicator Strip',
            '5000 mAh Battery',
            'SLAM Development Kit',
            'Debugger Board',
            'Documentation Kit'
          ]
        }
      },
      {
        id: 'rover-pro-l',
        name: 'ROVER Pro - Large',
        edition: 'Pro',
        size: 'Large',
        price: 14900,
        status: 'available',
        specs: {
          payload: 'Up to 35 kg',
          speed: 'Up to 12 km/h',
          runtime: '6-8 hours (solar+cells)',
          dimensions: '350 x 350 x 140 mm',
          weight: '~11.5 kg',
          accuracy: 'GPS, IMU, LIDAR, ROS2/AI module',
          controller: 'ESP32 + IMU + GPS + LIDAR + AI module',
          motors: '4x High-performance servo motors',
          communication: 'WiFi, Bluetooth, GPS, ROS2, LIDAR, AI inference',
          battery: '12V 8000 mAh Extended + Solar',
          firmware: 'AI-enhanced firmware + Full ROS2 + OTA',
          safety: 'Full autonomous safety suite'
        },
        whatsInTheBox: {
          title: 'Pro – Large',
          description: 'Full-featured bundle for engineering labs.',
          color: 'red',
          items: [
            'All Pro Medium features +',
            '8000 mAh Extended Battery',
            'LIDAR (Pre-mounted)',
            'AI Processing Module',
            'Dual Sensor Bay',
            'Remote Emergency Stop',
            'Advanced Firmware Tools',
            'Lab Ready Flight Case'
          ]
        }
      }
    ]
  },
  {
    id: 'rio',
    name: 'RIO',
    title: 'Robot for Indoor Operation',
    description: 'A robust, modular wireless mobile robot designed for indoor navigation, STEM education, and rapid prototyping. With its compact footprint, RIO is ideal for classrooms, labs, and other confined environments. Features real-time wireless control and precision-driven stepper motors.',
    image: '/rio.jpg',
    status: 'available',
    features: [
      {
        icon: Wifi,
        title: 'Real-Time Wireless Control',
        description: 'ESP32 + ESP-NOW mesh protocol requires no router for instant connectivity'
      },
      {
        icon: Shield,
        title: 'Durable Compact Chassis',
        description: 'Welded steel frame built for impact resistance and classroom use'
      },
      {
        icon: Settings,
        title: 'Modular Expansion Ports',
        description: 'GPIO, I2C, SPI, UART interfaces for sensors, cameras, and robotic arms'
      },
      {
        icon: Eye,
        title: 'RGB LED Feedback',
        description: 'Integrated LED strip for visual system status and user feedback'
      },
      {
        icon: Zap,
        title: 'Precision Control',
        description: 'NEMA23 stepper motors with pulley/belt drive for accurate positioning'
      },
      {
        icon: Cpu,
        title: 'Smart Connectivity',
        description: 'OTA firmware updates, USB, and Bluetooth debugging capabilities'
      }
    ],
    variants: [
      {
        id: 'rio-normal-s',
        name: 'RIO Normal - Small',
        edition: 'Normal',
        size: 'Small',
        price: 4500,
        status: 'available',
        specs: {
          payload: 'Up to 30 kg',
          speed: 'Up to 1.2 m/s',
          runtime: '3 hours',
          dimensions: '240 x 240 x 70 mm',
          weight: '~5 kg',
          accuracy: 'Basic stepper accuracy',
          controller: 'ESP32',
          motors: '2× NEMA23 stepper motors',
          communication: 'ESP-NOW, Bluetooth',
          battery: '2000 mAh Li-ion with BMS',
          firmware: 'Basic firmware',
          safety: 'E-stop, power switch'
        },
        whatsInTheBox: {
          title: 'Normal – Small',
          description: 'Basic learning kit for beginners.',
          color: 'green',
          items: [
            'RIO Base Robot',
            '2000 mAh Battery',
            'USB Programmer',
            'Power Adapter',
            'Getting Started Manual'
          ]
        }
      },
      {
        id: 'rio-normal-m',
        name: 'RIO Normal - Medium',
        edition: 'Normal',
        size: 'Medium',
        price: 5000,
        status: 'available',
        specs: {
          payload: 'Up to 50 kg',
          speed: 'Up to 1.5 m/s',
          runtime: '4-5 hours',
          dimensions: '250 x 250 x 80 mm',
          weight: '~6 kg',
          accuracy: 'Stepper precision + IMU',
          controller: 'ESP32 + IMU',
          motors: '2× NEMA23 stepper motors',
          communication: 'ESP-NOW, Bluetooth',
          battery: '4000 mAh Li-ion with BMS',
          firmware: 'Standard firmware + IMU',
          safety: 'E-stop, power switch'
        },
        whatsInTheBox: {
          title: 'Normal – Medium',
          description: 'For classrooms and instructors.',
          color: 'blue',
          items: [
            'RIO Robot + IMU Sensor',
            '4000 mAh Battery',
            'USB Programmer',
            'Power Adapter',
            'Sensor Cable Set',
            'Printed Curriculum Pack'
          ]
        }
      },
      {
        id: 'rio-normal-l',
        name: 'RIO Normal - Large',
        edition: 'Normal',
        size: 'Large',
        price: 5800,
        status: 'available',
        specs: {
          payload: 'Up to 60 kg',
          speed: 'Up to 1.5 m/s',
          runtime: '5-6 hours',
          dimensions: '270 x 270 x 90 mm',
          weight: '~6.8 kg',
          accuracy: 'Stepper + IMU, OTA-ready',
          controller: 'ESP32 + IMU',
          motors: '2× NEMA23 stepper motors',
          communication: 'ESP-NOW, Bluetooth',
          battery: '4000 mAh Li-ion with BMS',
          firmware: 'OTA + USB',
          safety: 'E-stop, power switch'
        },
        whatsInTheBox: {
          title: 'Normal – Large',
          description: 'Institutional bundle for schools/labs.',
          color: 'red',
          items: [
            'RIO Robot + IMU',
            '4000 mAh Battery',
            'LIDAR Mount',
            'USB + Bluetooth Programmer',
            'Expanded Curriculum Booklet',
            'Carrying Case',
            'Teacher\'s Support Sheet'
          ]
        }
      },
      {
        id: 'rio-pro-s',
        name: 'RIO Pro - Small',
        edition: 'Pro',
        size: 'Small',
        price: 5200,
        status: 'available',
        specs: {
          payload: 'Up to 35 kg',
          speed: 'Up to 1.5 m/s',
          runtime: '3.5 hours',
          dimensions: '240 x 240 x 70 mm',
          weight: '~5.5 kg',
          accuracy: 'IMU + ESP-NOW OTA',
          controller: 'ESP32 + IMU',
          motors: '2× NEMA23 stepper motors',
          communication: 'ESP-NOW, Bluetooth',
          battery: '2000 mAh High-Discharge Battery',
          firmware: 'OTA Firmware Module',
          safety: 'E-stop, power switch'
        },
        whatsInTheBox: {
          title: 'Pro – Small',
          description: 'Built for hackathons & technical users.',
          color: 'yellow',
          items: [
            'RIO Robot + Aluminum Reinforced Frame',
            'IMU Sensor',
            '2000 mAh High-Discharge Battery',
            'OTA Firmware Module',
            'Quick Start Booklet',
            'USB-C Programmer'
          ]
        }
      },
      {
        id: 'rio-pro-m',
        name: 'RIO Pro - Medium',
        edition: 'Pro',
        size: 'Medium',
        price: 5900,
        status: 'available',
        specs: {
          payload: 'Up to 55 kg',
          speed: 'Up to 1.5 m/s',
          runtime: '5-6 hours',
          dimensions: '250 x 250 x 80 mm',
          weight: '~6.5 kg',
          accuracy: 'Enhanced stepper + LIDAR mount',
          controller: 'ESP32 + IMU',
          motors: '2× NEMA23 stepper motors',
          communication: 'ESP-NOW, Bluetooth',
          battery: '4000 mAh Battery',
          firmware: 'Advanced Firmware Tools',
          safety: 'E-stop, power switch'
        },
        whatsInTheBox: {
          title: 'Pro – Medium',
          description: 'Perfect for research & prototyping.',
          color: 'orange',
          items: [
            'All above +',
            'LIDAR Mount + Servo Arm Bracket',
            'RGB LED Indicator Strip',
            '4000 mAh Battery',
            'Debugger Board',
            'Documentation Kit'
          ]
        }
      },
      {
        id: 'rio-pro-l',
        name: 'RIO Pro - Large',
        edition: 'Pro',
        size: 'Large',
        price: 6700,
        status: 'available',
        specs: {
          payload: 'Up to 65 kg',
          speed: 'Up to 1.5 m/s',
          runtime: '6 hours',
          dimensions: '270 x 270 x 90 mm',
          weight: '~7.2 kg',
          accuracy: 'Full stack: IMU, LIDAR, OTA, RGB UI',
          controller: 'ESP32 + IMU',
          motors: '2× NEMA23 stepper motors',
          communication: 'ESP-NOW, Bluetooth',
          battery: '8000 mAh Extended Battery',
          firmware: 'Advanced Firmware Tools',
          safety: 'Remote Emergency Stop'
        },
        whatsInTheBox: {
          title: 'Pro – Large',
          description: 'Full-featured bundle for engineering labs.',
          color: 'red',
          items: [
            'All above +',
            '8000 mAh Extended Battery',
            'LIDAR (Pre-mounted)',
            'Dual Sensor Bay',
            'Remote Emergency Stop',
            'Advanced Firmware Tools',
            'Lab Ready Flight Case'
          ]
        }
      }
    ]
  }
];