import React from 'react';
import CompetitionHero from '../components/competition/CompetitionHero';
import WhatIsORC from '../components/competition/WhatIsORC';
import PrizePool from '../components/competition/PrizePool';
import Arena from '../components/competition/Arena';
import Timeline from '../components/competition/Timeline';
import ParticipationOptions from '../components/competition/ParticipationOptions';
import ContactInfo from '../components/competition/ContactInfo';

const Competition = () => {
  return (
    <div className="bg-black">
      <CompetitionHero />
      <WhatIsORC />
      <PrizePool />
      <Arena />
      <Timeline />
      <ParticipationOptions />
      <ContactInfo />
    </div>
  );
};

export default Competition;