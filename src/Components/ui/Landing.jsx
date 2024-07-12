import heroBg from "../../assets/img/heroBg.jpg";

export default function Landing() {
    return (
      <div>
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1600x900")' }}>
      <div className="absolute inset-0 bg-[#F1EADC]">
      <img className=" inset-0 w-full h-full object-cover" alt="logo" src={heroBg} />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-end pt-20">
        {/* Text Content */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left z-10 pt-20 relative">
          <h1 className=" text-6xl md:text-6xl font-sans font-bold text-white text-center p-5">Welcome to Sip and Play</h1>
          <p className=" text-lg md:text-xl text-white px-16 font-sans text-center">A unique experience awaits you!</p>
          {/* <div className="mt-8">
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-xl">
              Get Started
            </a>
          </div> */}
        </div>

        {/* Image */}
        {/* <div className="md:w-1/2 z-10 relative h-screen">
        <img className=" inset-0 w-full h-full object-cover" alt="logo" src={heroBg} />
        </div> */}
      </div>
    </section>

    <section className="p-10">
    <div className="container rounded-lg shadow-lg overflow-hidden mx-auto px-4 py-8 bg-[#E0F0B1]">
      <h1 className="text-3xl font-bold mb-4">Our name says it all!</h1>
      <div className="text-lg mb-4">
        <p>How it works..</p>
        <p>
            Founder, Jonathan Li, shares a passion for board games, boba, and 
          delicious food, so he combined them all to become Sip & Play, Park Slope’s 
          first board game cafe.  It is a straightforward concept, come in with your 
          friends and family to play any board game from our library of 300+ games!
           We hope when you visit, you also enjoy our coffee, espresso, boba, 
           sandwiches, and snacks!
        </p>
        
        
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Hours</h2>
        <h1 className="list-disc ml-4"></h1>
        <p>New opening hours:</p>
          <p>Sunday: 10am-11pm</p>
          <p>Mon-Thurs: 11am-11pm</p>
          <p>Fri: 11am-midnight</p>
          <p>Sat: 10am-midnight</p>
          <p>Our kitchen closes 2.5-3 hours before we close!</p>
      </div>
    </div>
    </section>
    </div>
    )
}