import React from 'react';
import ProductHero from '../components/products/ProductHero';
import ProductFeatures from '../components/products/ProductFeatures';
import OurRobots from '../components/products/OurRobots';
import CompareModels from '../components/products/CompareModels';
import EducationInnovation from '../components/products/EducationInnovation';
import ReadyToBuild from '../components/products/ReadyToBuild';

const Products = () => {
  return (
    <div className="bg-orc-black">
      {/* Hero Section */}
      <ProductHero />
      
      {/* Section 1: Why ORC Robots? */}
      <ProductFeatures />
      
      {/* Section 2: Our Robots */}
      <OurRobots />
      
      {/* Section 3: Compare Models */}
      <CompareModels />
      
      {/* Section 4: Built for Education & Innovation */}
      <EducationInnovation />
      
      {/* Section 5: Ready to Build? */}
      <ReadyToBuild />
    </div>
  );
};

export default Products;