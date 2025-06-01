import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import Story from '../components/about/Story';
import Education from '../components/about/Education';

const About = () => {
  return (
    <div className="bg-black">
      <AboutHero />
      <Mission />
      <Story />
      <Education />
    </div>
  );
};

export default About;