import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import WhatIsORC from '../components/about/WhatIsORC';
import Education from '../components/about/Education';
import WhyItMatters from '../components/about/WhyItMatters';
import CoreValues from '../components/about/CoreValues';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  return (
    <div className="bg-orc-black">
      {/* Section 1: Hero Header */}
      <AboutHero />
      
      {/* Section 2: Our Mission */}
      <Mission />
      
      {/* Section 3: What We Do */}
      <WhatIsORC />
      
      {/* Section 4: Who It's For */}
      <Education />
      
      {/* Section 5: Why It Matters */}
      <WhyItMatters />
      
      {/* Section 6: Core Values */}
      <CoreValues />
      
      {/* Section 7: Call to Action */}
      <AboutCTA />
    </div>
  );
};

export default About;