


import  { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import chess from "../../assets/img/chess.gif";


const FeedbackForm = () => {

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is visible
  });
  
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send feedback data to backend or display it)
    console.log(`Name: ${name}, Email: ${email}, Feedback: ${feedback}`);
    // Optionally, you can reset form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    
    <div ref={ref}>
    <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
        
      >
        
    <div className="flex justify-end items-start font-mono md:pr-36 pb-8 flex-col md:flex-row ">
      <div className="justify-center align-middle items-center md:justify-center md:w-1/2 pl-20 p-10 pr-20 pt-0">
        <img className="w-96 h-96" alt="logo" src={chess} />
      </div>
      <div className="md:w-1/2">
      <form className="bg-amber-100 shadow-xl rounded-3xl  px-20 md:px-32 pl-20 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 pr-28 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-7 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="feedback"
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
    </motion.div>
    </div>
  );
};

export default FeedbackForm;
