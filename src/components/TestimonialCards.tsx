'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const techSchoolTestimonials = [
  {
    quote:
      'Joining the tech school transformed my understanding of programming and helped me to truly discover my own potential. The instructors are world-class!',
    name: 'Alex Johnson',
    title: 'Software Engineering Student',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a developer, but also as a problem solver, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Full Stack Developer Student',
  },
  {
    quote:
      "This school offered me the tools and confidence to take my coding skills to the next level. I'm endlessly grateful for the personalized coaching.",
    name: 'Michael Chen',
    title: 'Web Development Student',
  },
  {
    quote:
      'As a data scientist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Data Science Student',
  },
  {
    quote:
      'The cybersecurity courses here opened my eyes to the intricacies of protecting digital assets. Highly recommend for any aspiring cybersecurity professionals!',
    name: 'Chris Morales',
    title: 'Cybersecurity Student',
  },
];

function TechSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={techSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TechSchoolTestimonials;