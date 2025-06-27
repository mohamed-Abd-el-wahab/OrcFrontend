import { Mountain, PenTool as Tool, Battery, Shield, Cpu, Zap, Wifi, Settings, Eye } from 'lucide-react';
import { ProductType } from '../types/products';

export const products: ProductType[] = [
  {
    id: 'rover',
    name: 'ROVER',
    title: 'Robotic Operations Vehicle for Exploration and Research',
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
        id: 'rover-standard',
        name: 'ROVER',
        size: 'Standard',
        price: 9800,
        status: 'available',
        specs: {
          payload: 'Up to 25 kg',
          speed: 'Up to 10 km/h',
          runtime: '4-6 hours',
          dimensions: '300 x 300 x 120 mm',
          weight: '~8 kg',
          accuracy: 'GPS supported'
        }
      },
      {
        id: 'rover-solar',
        name: 'ROVER Solar',
        size: 'Standard',
        price: 12500,
        status: 'available',
        specs: {
          payload: 'Up to 25 kg',
          speed: 'Up to 10 km/h',
          runtime: '6-8 hours + solar',
          dimensions: '300 x 300 x 120 mm',
          weight: '~10 kg',
          accuracy: 'GPS + IMU supported'
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
        id: 'rio-standard',
        name: 'RIO',
        size: 'Compact',
        price: 4500,
        status: 'available',
        specs: {
          payload: 'Up to 50 kg',
          speed: 'Up to 1.5 m/s',
          runtime: 'Up to 5 hours',
          dimensions: '250 x 250 x 80 mm',
          weight: '~6 kg',
          accuracy: 'Stepper precision'
        }
      },
      {
        id: 'rio-pro',
        name: 'RIO Pro',
        size: 'Compact',
        price: 4500,
        status: 'available',
        specs: {
          payload: 'Up to 50 kg',
          speed: 'Up to 1.5 m/s',
          runtime: 'Up to 6 hours',
          dimensions: '250 x 250 x 80 mm',
          weight: '~6.5 kg',
          accuracy: 'Enhanced stepper precision'
        }
      }
    ]
  }
];