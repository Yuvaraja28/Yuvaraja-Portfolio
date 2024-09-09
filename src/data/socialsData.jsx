import { SiCodechef, SiLeetcode, SiUpwork } from "react-icons/si";
import { FaYoutube, FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaPaypal, FaTwitter, FaGoogle } from "react-icons/fa";

const socialsData = [
  {
    name: 'Github',
    comp: <FaGithub size={24} />,
    url: 'https://github.com/yuvaraja28',
    footer: true
  },
  {
    name: 'LeetCode',
    comp: <SiLeetcode size={24} />,
    url: 'https://leetcode.com/u/yuvaraja28/'
  },
  {
    name: 'CodeChef',
    comp: <SiCodechef size={24} />,
    url: 'https://www.codechef.com/users/yuvaraja28'
  },
  {
    name: 'Linkedin',
    comp: <FaLinkedin size={24} />,
    url: 'https://www.linkedin.com/in/yuvaraja-murali/',
    footer: true
  },
  {
    name: 'Discord',
    comp: <FaDiscord size={24} />,
    url: 'https://discord.com/users/759050921413312532',
    footer: true
  },
  {
    name: 'Instagram',
    comp: <FaInstagram size={24} />,
    url: 'https://www.instagram.com/yuvaraja_28/'
  },
  {
    name: 'Twitter',
    comp: <FaTwitter size={24} />,
    url: 'https://twitter.com/yuvaraja_28',
    footer: true
  },
  {
    name: 'Youtube',
    comp: <FaYoutube size={24} />,
    url: 'https://www.youtube.com/channel/UCNwoToYIOA285x9Yg-ChNyw'
  },
  {
    name: 'Paypal',
    comp: <FaPaypal size={24} />,
    url: 'https://www.paypal.com/paypalme/YuvarajaMurali'
  },
  {
    name: 'Upwork',
    comp: <SiUpwork size={24} />,
    url: 'https://upwork.com/freelancers/~01cab23a6f7f2b4627',
    footer: true
  }
]

export default socialsData;