import React from 'react';
import CoursesHero from '../components/courses/CoursesHero';
import CoursesList from '../components/courses/CoursesList';
import WhyLearnWithUs from '../components/courses/WhyLearnWithUs';
import CoursesCTA from '../components/courses/CoursesCTA';

const Courses = () => {
  return (
    <div className="bg-black">
      <CoursesHero />
      <CoursesList />
      <WhyLearnWithUs />
      <CoursesCTA />
    </div>
  );
};

export default Courses;