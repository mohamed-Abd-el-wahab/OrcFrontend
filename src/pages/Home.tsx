import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCourses from '../components/home/FeaturedCourses';
import FeaturedProducts from '../components/home/FeaturedProducts';
import StudentSuccess from '../components/home/StudentSuccess';
import LatestNews from '../components/home/LatestNews';
import NewsletterSubscription from '../components/home/NewsletterSubscription';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <FeaturedCourses />
      <FeaturedProducts />
      <StudentSuccess />
      <LatestNews />
      <NewsletterSubscription />
    </div>
  );
};

export default Home;