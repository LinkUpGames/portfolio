import { motion } from "framer-motion";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialContent = () => {
  const socials = [
    {
      icon: <FaInstagramSquare size="100%" color="#05d9e8" />,
    },
    {
      icon: <FaLinkedin size="100%" color="#05d9e8" />,
    },
    {
      icon: <FaYoutube size="100%" color="#05d9e8" />,
    },
    {
      icon: <FaSquareXTwitter size="100%" color="#05d9e8" />,
    },
  ];

  return (
    <div className="flex flex-wrap w-full justify-center items-center gap-x-32">
      {socials.map((social) => (
        <motion.button
          whileHover={{
            scale: 1.3,
          }}
          className="w-24 h-24 border-2 border-red rounded-lg p-2"
        >
          {social.icon}
        </motion.button>
      ))}
    </div>
  );
};

export default SocialContent;
