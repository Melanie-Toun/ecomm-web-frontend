import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-purple-500 p-3">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-2">
        <div>
          <h4 className="text-white"> J24 Stores</h4>
          <p>... Shop with us</p>
        </div>
        <div className="p-3">
          <h4 className="text-white">Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactt">Contact</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            <li>
              <a href="">AQ</a>
            </li>
          </ul>
        </div>
        <div className="p-3">
          <h4 className="text-white mb-2">Social Hamdles</h4>

          <ul className="flex flex-wrap justify-start items-center gap-3">
            <li>
              <a href="">
                <IoLogoWhatsapp />
              </a>
            </li>

            <li>
              <a href="">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <TiSocialInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;