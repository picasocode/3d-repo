import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,

  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI Development",
    icon: web,
  },
  {
    title: "Blockchain Solutions",
    icon: mobile,
  },
  {
    title: "Data Analytics",
    icon: backend,
  },
  {
    title: "Cloud & DevOps",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: javascript, // Placeholder
  },
  {
    name: "Solidity",
    icon: typescript, // Placeholder
  },
  {
    name: "TensorFlow",
    icon: reactjs, // Placeholder
  },
  {
    name: "PyTorch",
    icon: redux, // Placeholder
  },
  {
    name: "Ethereum",
    icon: tailwind, // Placeholder
  },
  {
    name: "Hyperledger",
    icon: nodejs, // Placeholder
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: docker, // Placeholder
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: git, // Placeholder
  },
];

const experiences: TExperience[] = [
  {
    title: "AI & Blockchain Research",
    companyName: "Martex AI R&D Division",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2020 - Present",
    points: [
      "Leading research and development of novel AI algorithms for decentralized networks.",
      "Developing and auditing smart contracts for security and efficiency.",
      "Collaborating with clients to integrate AI-powered features into blockchain platforms.",
      "Publishing whitepapers on the convergence of AI and blockchain technology.",
    ],
  },
  {
    title: "AI Solutions Architect",
    companyName: "TechCorp Inc.",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2018 - Dec 2019",
    points: [
      "Designed and implemented machine learning models for enterprise data analysis.",
      "Developed secure data pipelines for AI training on sensitive information.",
      "Oversaw the deployment of AI-driven solutions on cloud infrastructure.",
      "Provided expert consultation on AI adoption strategies for various industries.",
    ],
  },
  {
    title: "Blockchain Engineer",
    companyName: "Global Ledger",
    icon: tesla,
    iconBg: "#383E56",
    date: "July 2016 - Feb 2018",
    points: [
      "Engineered and deployed decentralized applications (DApps) on Ethereum.",
      "Participated in a team focused on building a private blockchain for supply chain management.",
      "Conducted security audits and penetration testing on smart contracts.",
      "Contributed to open-source blockchain protocols and community development.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Martex AI's innovative use of AI and blockchain has completely transformed our supply chain. Their platform is secure, efficient, and incredibly intelligent.",
    name: "Alex Chen",
    designation: "CTO",
    company: "Future Supply Co.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "The team at Martex AI delivered a custom AI solution that exceeded all our expectations. Their technical expertise is unmatched.",
    name: "Maria Rodriguez",
    designation: "CEO",
    company: "DataStream Analytics",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Working with Martex AI on our blockchain project was a game-changer. Their insights and dedication ensured the project was a huge success.",
    name: "David Kim",
    designation: "Founder",
    company: "CryptoVault",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Decentralized AI Marketplace",
    description:
      "A blockchain-based platform enabling secure and transparent trading of AI models and datasets. Users can monetize their data and models while ensuring ownership and provenance.",
    tags: [
      { name: "blockchain", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
      { name: "web3", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/martex-ai/decentralized-ai-market",
  },
  {
    name: "AI-Powered Smart Contract Auditor",
    description:
      "An automated tool that uses machine learning to identify vulnerabilities and security flaws in smart contract code, significantly reducing the risk of exploits.",
    tags: [
      { name: "ai", color: "blue-text-gradient" },
      { name: "solidity", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/martex-ai/smart-contract-auditor",
  },
  {
    name: "Federated Learning Network",
    description:
      "A platform that allows multiple parties to collaboratively train a shared machine learning model without sharing their raw data, ensuring data privacy and security.",
    tags: [
      { name: "ai", color: "blue-text-gradient" },
      { name: "privacy", color: "green-text-gradient" },
      { name: "cloud", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/martex-ai/federated-learning-network",
  },
];

export { services, technologies, experiences, testimonials, projects };