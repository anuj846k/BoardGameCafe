// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const FeedbackForm = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger animation when 50% of the component is visible
//   });

//   const animationVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare form data
//     const formData = {
//       name: name,
//       email: email,
//       feedback: feedback,
//     };

//     try {
//       // Send form data to backend
//       const response = await fetch('https://example.com/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit feedback');
//       }

//       // Reset form fields after successful submission
//       setName('');
//       setEmail('');
//       setFeedback('');

//       // Optionally handle response from server
//       const responseData = await response.json();
//       console.log('Feedback submitted:', responseData);
//     } catch (error) {
//       console.error('Error submitting feedback:', error.message);
//       // Handle error (e.g., display an error message to the user)
//     }
//   };

//   return (
    
  
//     <div ref={ref}>
//       <motion.div
//         initial="hidden"
//         animate={inView ? 'visible' : 'hidden'}
//         variants={animationVariants}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex justify-end items-start pr-36 pb-8">
//           <form
//             className="bg-amber-200 shadow-xl rounded px-32 pt-6 pb-8 mb-4"
//             onSubmit={handleSubmit}
//           >
//             <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 pr-28 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="feedback"
//               >
//                 Feedback
//               </label>
//               <textarea
//                 className="shadow appearance-none border rounded w-full py-7 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="feedback"
//                 placeholder="Your Feedback"
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default FeedbackForm;






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
        
    <div className="flex justify-end items-start  md:pr-36 pb-8 flex-col md:flex-row">
      <div className="justify-center align-middle items-center md:justify-center md:w-1/2 pl-20 p-10 pr-20 pt-0">
        <img className="w-96 h-96" alt="logo" src={chess} />
      </div>
      <div className="md:w-1/2">
      <form className="bg-amber-200 shadow-xl rounded  px-20 md:px-32 pl-20 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
