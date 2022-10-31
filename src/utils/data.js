import { FaGlobe, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Dictionary",
    link: "/dictionary",
  },

  {
    name: "Games",
    link: "/games",
  },
];

export const footerLinks = [
  {
    name: "Website",
    url: "https://oasolomon.vercel.app",
    icon: <FaGlobe color="lavender" />,
  },
  { name: "LinkedIn", url: "https://", icon: <FaLinkedin color="lavender" /> },
  { name: "Github", url: "https://", icon: <FaGithub color="lavender" /> },
  { name: "Twitter", url: "https://", icon: <FaTwitter color="lavender" /> },
];
