import heroBg from "../../assets/img/heroBg.jpg";
import { motion } from "framer-motion";
import Marquee from "./Marquee";

export default function Landing() {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1600x900")',
        }}
      >
        <div className="absolute inset-0 bg-[#F1EADC]">
          <img
            className=" inset-0 w-full h-full object-cover"
            alt="logo"
            src={heroBg}
          />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-end pt-20">
          {/* Text Content */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left z-10 pt-20 relative">
            <motion.div
              initial={{ x: -200, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ type: "spring", duration: 2 }} 
            >
              <h1 className=" text-4xl font-roboto md:text-6xl uppercase shadow-lg z-10 font-bold text-white rounded-s-full text-center p-7 bg-black bg-opacity-50">
              A unique café experience awaits you
              </h1>
            </motion.div>
            

          </div>
        </div>
      </section>

      <Marquee />  

      <section className="p-6 sm:p-10cs">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto bg-[#E0F0B1] rounded-lg shadow-lg overflow-hidden px-4 py-8"
            >
                <motion.div animate={{ x: [0, 100, 0] }} transition={{ duration: 1 }}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
                        Our name says it all!
                    </h1>
                </motion.div>
                <div className="text-lg mb-4 text-center">
                    <p className="mb-4">How it works..</p>
                    <p>
                        Founder, Jonathan Li, shares a passion for board games, boba, and delicious food, so he combined them all to become Sip & Play, Park Slope’s first board game cafe. It is a straightforward concept: come in with your friends and family to play any board game from our library of 300+ games! We hope when you visit, you also enjoy our coffee, espresso, boba, sandwiches, and snacks!
                    </p>
                </div>
                <motion.div animate={{ x: [0, 100, 0] }} transition={{ duration: 1 }}>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">
                        Hours
                    </h2>
                </motion.div>
                <ul className="list-disc ml-4 text-center">
                    <li>New opening hours:</li>
                    <li>Sunday: 10am-11pm</li>
                    <li>Mon-Thurs: 11am-11pm</li>
                    <li>Fri: 11am-midnight</li>
                    <li>Sat: 10am-midnight</li>
                    <li>Our kitchen closes 2.5-3 hours before we close!</li>
                </ul>
            </motion.div>
        </section>
</div>
);
}
