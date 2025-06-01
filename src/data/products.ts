import { Mountain, PenTool as Tool, Battery, Shield, Cpu, Zap, Notebook as Robot, Rocket, Target, Brain } from 'lucide-react';
import { ProductType } from '../types/products';

export const products: ProductType[] = [
  {
    id: 'mav',
    name: 'MAV',
    title: 'Mobile Autonomous Vehicle for Advanced Research',
    description: 'A cutting-edge autonomous mobile robot designed for research, exploration, and advanced robotics applications. Features state-of-the-art navigation and sensing capabilities.',
    image: '/mav.jpg',
    status: 'out_of_stock',
    features: [
      {
        icon: Robot,
        title: 'Autonomous Navigation',
        description: 'Advanced SLAM algorithms for precise indoor and outdoor navigation'
      },
      {
        icon: Rocket,
        title: 'Dynamic Mobility',
        description: 'Versatile locomotion system for various terrains and environments'
      },
      {
        icon: Target,
        title: 'Precision Control',
        description: 'High-accuracy positioning and movement control systems'
      },
      {
        icon: Brain,
        title: 'AI Integration',
        description: 'Built-in support for machine learning and AI applications'
      },
      {
        icon: Shield,
        title: 'Robust Design',
        description: 'Durable construction for reliable operation in challenging conditions'
      },
      {
        icon: Zap,
        title: 'High Performance',
        description: 'Powerful processing capabilities for complex tasks'
      }
    ],
    variants: [
      {
        id: 'mav-standard',
        name: 'MAV',
        size: 'Standard',
        price: 25000,
        status: 'out_of_stock',
        specs: {
          payload: 'Up to 100 kg',
          speed: 'Up to 2.0 m/s',
          runtime: 'Up to 8 hours',
          dimensions: 'L800 x W600 x H400 mm',
          weight: '80 kg',
          accuracy: '±2 mm'
        }
      },
      {
        id: 'mav-pro',
        name: 'MAV Pro',
        size: 'Standard',
        price: 35000,
        status: 'coming_soon',
        specs: {
          payload: 'Up to 150 kg',
          speed: 'Up to 2.5 m/s',
          runtime: 'Up to 12 hours',
          dimensions: 'L800 x W600 x H400 mm',
          weight: '85 kg',
          accuracy: '±1 mm'
        }
      }
    ]
  },
  {
    id: 'rover',
    name: 'ROVER',
    title: 'Customizable Robotic Operations Vehicle for Exploration and Research',
    description: 'A versatile mobile robot platform designed for innovators, educators, and robotics enthusiasts. This customizable robotic vehicle excels in exploration, research, and educational applications.',
    image: '/rover.jpg',
    status: 'available',
    features: [
      {
        icon: Mountain,
        title: 'All-Terrain Capability',
        description: 'Advanced drive system with high-performance motors for any environment'
      },
      {
        icon: Tool,
        title: 'Modular Design',
        description: 'Easily customizable platform supporting various sensors and attachments'
      },
      {
        icon: Battery,
        title: 'Extended Operation',
        description: 'Long-lasting battery life for extended field operations'
      },
      {
        icon: Shield,
        title: 'Enhanced Safety',
        description: 'Advanced safety features and fail-safe mechanisms'
      },
      {
        icon: Cpu,
        title: 'Smart Control',
        description: 'Intuitive interface with advanced automation options'
      },
      {
        icon: Zap,
        title: 'High Performance',
        description: 'Powerful processing capabilities for real-time operations'
      }
    ],
    variants: [
      {
        id: 'rover-large',
        name: 'ROVER',
        size: 'Large',
        price: 15000,
        status: 'available',
        specs: {
          payload: 'Up to 500 kg',
          speed: 'Up to 1.5 m/s',
          runtime: 'Up to 8 hours',
          dimensions: 'L1500 x W800 x H400 mm',
          weight: '350 kg',
          accuracy: '±5 mm'
        }
      },
      {
        id: 'rover-medium',
        name: 'ROVER',
        size: 'Medium',
        price: 12000,
        status: 'out_of_stock',
        specs: {
          payload: 'Up to 300 kg',
          speed: 'Up to 1.2 m/s',
          runtime: 'Up to 6 hours',
          dimensions: 'L1200 x W600 x H350 mm',
          weight: '250 kg',
          accuracy: '±5 mm'
        }
      },
      {
        id: 'rover-pro-large',
        name: 'ROVER Pro',
        size: 'Large',
        price: 22000,
        status: 'coming_soon',
        specs: {
          payload: 'Up to 800 kg',
          speed: 'Up to 2.0 m/s',
          runtime: 'Up to 12 hours',
          dimensions: 'L1800 x W900 x H450 mm',
          weight: '450 kg',
          accuracy: '±3 mm'
        }
      },
      {
        id: 'rover-pro-medium',
        name: 'ROVER Pro',
        size: 'Medium',
        price: 18000,
        status: 'coming_soon',
        specs: {
          payload: 'Up to 500 kg',
          speed: 'Up to 1.8 m/s',
          runtime: 'Up to 10 hours',
          dimensions: 'L1500 x W700 x H400 mm',
          weight: '350 kg',
          accuracy: '±3 mm'
        }
      }
    ]
  }
];