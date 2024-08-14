import Logo from "../../assets/Logo/logo.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const emailAddress = "sipnplaynyc@gmail.com";

  return (
    <footer className="bg-[#E0F0B1] py-5">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="w-20 h-20" alt="logo" src={Logo} />
          <p className="my-5">
            <h1 className="font-semibold">How to Reach Us</h1>
            <p>471 5th Ave.</p>
            <p>Brooklyn, NY 11215</p>
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-3 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Socials</h4>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/sipnplaynyc/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <FaFacebook className="w-8 h-8 hover:animate-bounce" />
              </a>
              <a href="https://www.instagram.com/sipnplaynyc/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                <FaInstagram className="w-8 h-8 hover:animate-bounce" />
              </a>
              <a href="https://www.tiktok.com/@sipnplaynycofficial?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                <FaTiktok className="w-8 h-8 hover:animate-bounce" />
              </a>
            </div>
          </div>

        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <a
            href={`mailto:${emailAddress}`}
            className="block mb-2 hover:underline"
          >
            {emailAddress}
          </a>
          <p className="mb-2">718-971-1684</p>
          <p className="text-sm text-gray-600">©2024 by Sip & Play</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
