import React, { useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { Column } from '@atoms/wrapper.style';
import ScrollProgressBar from '@atoms/ScrollProgressBar';
import LandingHeader from './landing/LandingHeader';
import LandingFooter from './landing/LandingFooter';
import HeroArea from './landing/HeroArea';
import ServiceArea from './landing/ServiceArea';
import RoadmapArea from './landing/RoadmapArea';
import DonationArea from './landing/DonationArea';
import FAQArea from './landing/FAQArea';

const LandingPage = () => {
  const serviceRef = useRef(null);
  const roadmapRef = useRef(null);
  const donationRef = useRef(null);
  const faqRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 700, damping: 300 });

  const handleScrollByRef = (e) => {
    const clickedValue = e.target.value;

    let targetRef;
    if (clickedValue === 'service') targetRef = serviceRef.current;
    if (clickedValue === 'roadmap') targetRef = roadmapRef.current;
    if (clickedValue === 'donation') targetRef = donationRef.current;
    if (clickedValue === 'faq') targetRef = faqRef.current;

    if (targetRef) targetRef.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Column alignItems="center">
      <ScrollProgressBar scaleX={scaleX} />
      <LandingHeader onNavClick={handleScrollByRef} />
      <HeroArea />
      <ServiceArea ref={serviceRef} />
      <RoadmapArea ref={roadmapRef} />
      <DonationArea ref={donationRef} />
      <FAQArea ref={faqRef} />
      <LandingFooter />
    </Column>
  );
};

export default LandingPage;
