import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kuan-You Lin | Yoyo',
  lang: 'en', // e.g: en, es, fr, jp
  description: "Yoyo's Personal Website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kuan-You Lin (Yoyo)',
  subtitle: "I'm a Software Engineer",
  cta1: 'About Me',
  cta2: 'Projects',
  cta3: 'Contact',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Kuan-You Lin (Yoyo) was born and raised in Taiwan. He moved to NYC in the year 2021 and is currently pursuing a Master's degree in Information Systems at Cornell University and Technion, expected to graduate by May 2023. He maintains an exceptional performance in computer science courses with a 4.0 GPA.",
  paragraphTwo:
    'He studied and worked passionately to provide professional solutions for both backend and frontend engineering problems. Currently, he is working as a software engineer intern at Circle, the issuer of USDC and EUROC, spending most of his time wrangling with TypeScript and Java, yielding production code.',
  paragraphThree:
    'Kuan-You is actively looking for full-time junior developer positions in the US, and the highlight of his experience and skills are concluded and enumerated in his most updated resume, which can be accessed via clicking the button below.',
  resume: 'https://github.com/linvingalliswell/resume/raw/main/Resume-Kuan-You-Lin-Cornell23.pdf', // if no resume, the button will not show up
  drive: 'https://github.com/linvingalliswell/resume/blob/main/Resume-Kuan-You-Lin-Cornell23.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projects/TheCampaign.png',
    title: 'TheCampaign',
    info: 'TheCampaign is a pure web3 crowdsourcing platform, where the users can launch their campaigns in the form of smart contracts or participate in the exisiting open campaigns by contribution on Ethereum.',
    info2:
      'TheCampaign is created by using: typescript, react.js, next.js, react-semantic-ui, solc, ganache, truffle, solidity, web3, eslint, mocha, react-i18next.',
    url: '',
    repo: 'https://github.com/linvingalliswell/the-campaigns-v2', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to talk? Message me on LinkedIn or email me directly',
  btn1: 'Email Me',
  email1: 'kl635@cornell.edu',
  btn2: 'Via LinkedIn',
  email2: 'https://www.linkedin.com/in/linkuanyou/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'fa-code',
      url: 'https://leetcode.com/lindocode9527/',
    },
    {
      id: nanoid(),
      name: 'fa-google',
      url: 'https://drive.google.com/drive/folders/1xVORMzxeKhIedqCBr2rBBLqSkA8J62jj?usp=sharing',
    },
    {
      id: nanoid(),
      name: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/linkuanyou/',
    },
    {
      id: nanoid(),
      name: 'fa-github',
      url: 'https://github.com/linvingalliswell',
    },
  ],
};
