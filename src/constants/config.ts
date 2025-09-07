type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    services: Required<TSection>;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Martex AI — AI & Blockchain Solutions",
    fullName: "Martex AI",
    email: "contact@martex.ai",
  },
  hero: {
    name: "Martex AI",
    p: ["We engineer intelligent, secure, and", "decentralized solutions for the future."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What can we build together?",
      },
    },
  },
  sections: {
    about: {
      p: "Who We Are",
      h2: "About Us.",
      content: `Martex AI is a leading technology firm specializing in artificial intelligence, blockchain, and decentralized applications. Our team of experts is dedicated to creating scalable, secure, and innovative solutions that drive business transformation. We collaborate closely with our clients to turn complex challenges into impactful, real-world applications.`,
    },
    services: {
      p: "What we offer",
      h2: "Our Services.",
      content: `We provide a range of services from custom AI model development and blockchain integration to smart contract auditing and decentralized platform creation. Our expertise spans machine learning, cryptography, and full-stack development to deliver comprehensive and robust solutions tailored to your needs.`,
    },
    feedbacks: {
      p: "What our clients say",
      h2: "Testimonials.",
    },
    works: {
      p: "Our Portfolio",
      h2: "Projects.",
      content: `Our portfolio showcases a selection of our most impactful projects. Each entry highlights our ability to solve complex problems, leverage cutting-edge technologies, and deliver measurable results. Explore our case studies to see how we’ve helped businesses innovate and succeed with our AI and blockchain solutions.`,
    },
  },
};