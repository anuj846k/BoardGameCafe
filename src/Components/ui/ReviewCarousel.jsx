import { useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const feedbackData = [
  {
    id: 1,
    name: 'Sarah Thompson',
    feedback: 'Sip & Play Café is my go-to spot for relaxing with friends over a delicious boba coffee. The ambiance is perfect for unwinding, and their board game collection is impressive!',
  },
  {
    id: 2,
    name: 'Alex Martinez',
    feedback: 'As a board game enthusiast, Sip & Play Café exceeded my expectations. The staff is friendly, the boba coffee is delightful, and the atmosphere is ideal for both casual and competitive gaming sessions.',
  },
  {
    id: 3,
    name: 'Emily Nguyen',
    feedback: 'I love the cozy vibes at Sip & Play Café. Whether I want to enjoy a refreshing boba coffee or challenge friends to board games, this place never disappoints. Highly recommended!',
  },
];

const ReviewCarousel = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is visible
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [currentFeedback, setCurrentFeedback] = useState(0);

  const nextFeedback = () => {
    setCurrentFeedback((currentFeedback + 1) % feedbackData.length);
  };

  const prevFeedback = () => {
    setCurrentFeedback((currentFeedback - 1 + feedbackData.length) % feedbackData.length);
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="justify-center py-10 px-10">
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-amber-100 "></div>
            </div>
            <div className="relative px-6 py-8">
              <div className="text-center">
                <p className="md:text-5xl pb-2 font-mono leading-6 font-semibold">Customer Feedback</p>
                <p className="mt-2 md:text-xl font-mono md:mb-5">{feedbackData[currentFeedback].feedback}</p>
                <p className="mt-2 text-sm">- {feedbackData[currentFeedback].name}</p>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 pb-8 flex md:justify-around justify-between">
              <button onClick={prevFeedback} className="text-black hover:text-gray-700 focus:outline-none">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button onClick={nextFeedback} className="ml-4 text-black hover:text-gray-700 focus:outline-none">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewCarousel;
