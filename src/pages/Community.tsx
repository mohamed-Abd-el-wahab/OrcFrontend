import React from 'react';
import PromoBanner from '../components/community/PromoBanner';
import CommunityHero from '../components/community/CommunityHero';
import WhyJoinORC from '../components/community/WhyJoinORC';
import CommunityInAction from '../components/community/CommunityInAction';
import HowItWorks from '../components/community/HowItWorks';
import SuccessStories from '../components/community/SuccessStories';
import CTABand from '../components/community/CTABand';
import Footer from '../components/Footer';

const Community = () => {
  return (
    <div className="bg-orc-black">
      {/* Promotional Banner */}
      <PromoBanner />
      
      {/* Section 1: Hero - "Join the Movement" */}
      <CommunityHero />
      
      {/* Section 2: Why Join ORC - Benefits */}
      <WhyJoinORC />
      
      {/* Section 3: Community in Action - Social proof gallery */}
      <CommunityInAction />
      
      {/* Section 4: How It Works - Entry steps */}
      <HowItWorks />
      
      {/* Section 5: Success Stories - Carousel */}
      <SuccessStories />
      
      {/* Section 6: Call-to-Action Band - Conversion */}
      <CTABand />
      
      {/* Section 7: Footer - Cross-links */}
 
    </div>
  );
};

export default Community;