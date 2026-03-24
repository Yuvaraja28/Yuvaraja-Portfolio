import { FiGlobe } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaYoutube, FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export const socials = {
  web: {
    name: 'Website',
    comp: FiGlobe
  },
  github: {
    name: 'Github',
    comp: FaGithub
  },
  leetcode: {
    name: 'LeetCode',
    comp: SiLeetcode,
  },
  linkedin: {
    name: 'Linkedin',
    comp: FaLinkedin,
  },
  discord: {
    name: 'Discord',
    comp: FaDiscord,
  },
  instagram: {
    name: 'Instagram',
    comp: FaInstagram,
  },
  twitter: {
    name: 'Twitter',
    comp: FaTwitter,
  },
  youtube: {
    name: 'Youtube',
    comp: FaYoutube,
  },
  playstore: {
    name: 'PlayStore',
    comp: IoLogoGooglePlaystore,
  }
}

const socialsData = [
  {
    key: 'github',
    url: 'https://github.com/yuvaraja28',
    footer: true
  },
  {
    key: 'leetcode',
    url: 'https://leetcode.com/u/yuvaraja28/'
  },
  {
    key: 'linkedin',
    url: 'https://www.linkedin.com/in/yuvaraja-murali/',
    footer: true
  },
  {
    key: 'discord',
    url: 'https://discord.com/users/759050921413312532',
    footer: true
  },
  {
    key: 'instagram',
    url: 'https://www.instagram.com/yuvaraja_28/'
  },
  {
    key: 'twitter',
    url: 'https://twitter.com/yuvaraja_28',
    footer: true
  },
  {
    key: 'youtube',
    url: 'https://www.youtube.com/@yuv-the-dev'
  },
]

export default socialsData;