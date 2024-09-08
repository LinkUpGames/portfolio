import { motion } from "framer-motion";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialContent = () => {
  const socials = [
    {
      icon: <FaInstagramSquare size="100%" color="#05d9e8" />,
      link: "https://www.instagram.com/linkupgamesstudio/?hl=en",
    },
    {
      icon: <FaLinkedin size="100%" color="#05d9e8" />,
      link: "https://www.linkedin.com/in/marcos-cevallos-lug/",
    },
    {
      icon: <FaYoutube size="100%" color="#05d9e8" />,
      link: "https://www.youtube.com/@MultiMarcsOfficialChannel",
    },
    {
      icon: <FaSquareXTwitter size="100%" color="#05d9e8" />,
      link: "https://x.com/flykidsblue1",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap w-full justify-center items-center gap-5 md:gap-32 mt-10">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.link}
          target="_blank"
          whileHover={{
            scale: 1.3,
          }}
          whileTap={{
            scale: 0.8,
          }}
          className="w-24 h-24 border-2 border-red rounded-lg p-2"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialContent;
