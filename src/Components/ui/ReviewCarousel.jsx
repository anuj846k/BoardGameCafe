import { useState } from "react";

useState

const feedbackData = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel purus interdum, ac maximus arcu ultricies.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'Vivamus vestibulum maximus nisi, non tincidunt tortor dapibus vel. Sed auctor, quam quis tempus sodales, dui elit lobortis ligula.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    feedback: 'Fusce sit amet erat quis ex euismod fermentum. Integer ullamcorper, arcu in fringilla ultricies, risus odio placerat sem, eu pharetra.',
  },
];

const ReviewCarousel = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const nextFeedback = () => {
    setCurrentFeedback((currentFeedback + 1) % feedbackData.length);
  };

  const prevFeedback = () => {
    setCurrentFeedback((currentFeedback - 1 + feedbackData.length) % feedbackData.length);
  };

  return (
    <div className="max-w-xl pl-32 py-8 ">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#E0F0B1]"></div>
        </div>
        <div className="relative px-6 py-8">
          <div className="text-center">
            <p className="text-lg leading-6 font-semibold">Customer Feedback</p>
            <p className="mt-2 text-sm ">{feedbackData[currentFeedback].feedback}</p>

            <p className="mt-2 text-sm">- {feedbackData[currentFeedback].name}</p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 pb-8 flex justify-center">
          <button onClick={prevFeedback} className="text-gray-300 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextFeedback} className="ml-4 text-gray-300 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
