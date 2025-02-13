"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover Your Potential in Tech: A Personal Journey in Skill Mastery",
    description: "Embark on a tech journey that’s uniquely yours. Our personalized instruction adapts to your individual learning style, setting the stage for unparalleled growth and innovation. At our tech school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Potential in Tech: A Personal Journey in Skill Mastery",
    description: "Embark on a tech journey that’s uniquely yours. Our personalized instruction adapts to your individual learning style, setting the stage for unparalleled growth and innovation. At our tech school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Potential in Tech: A Personal Journey in Skill Mastery",
    description: "Embark on a tech journey that’s uniquely yours. Our personalized instruction adapts to your individual learning style, setting the stage for unparalleled growth and innovation. At our tech school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description: "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time adjustments in a collaborative software project. This approach enhances your understanding and mastery of tech concepts and development skills.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description: "Our curriculum is continuously updated to include the latest tech trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and embrace an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description: "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your technical skills are always advancing.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;