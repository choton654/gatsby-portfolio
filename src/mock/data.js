import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Subhadeep Paul',
  subtitle: 'I am a Junior Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'deep.jpg',
  paragraphOne: 'I can develop web apps and websites with modern technologies',
  paragraphTwo: 'Focus on JAMStack And MERN stack',
  paragraphThree:
    'SKILLS - HTML5, CSS3, Javascript(ES6), Typescript, Bootstrap, Node.js, Express, React.js, NestJS, NextJS, GatsbyJS, React Native, MongoDb, Firebase, Jwt, REST, Socket.io, Graphql, Apollo, Docker, Heroku',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vQIrVYx1qfSQJVsHAk9DqAbvGOgOKa7bpD2svxw6UH_xfkjuu9WArzcmb9gU2-RZXJbOjkZDxTxrEo-/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'blog',
    title: 'Blog-Website',
    info: 'Build first web app with MERN stack',
    info2: 'Tech :- MongoDb, Node.js, Express, React.js, Redux, Jwt, Bootstrap',
    url: 'https://mern-stack-image-gallery.herokuapp.com/',
    repo: 'https://github.com/choton654/image-gallery_mern/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ecom-nextjs',
    title: 'Ecommerce_NextJs',
    info: 'This is a small ecommerce application with build with Next.js(Jamstack)',
    info2: 'Tech :- MongoDb, Node.js, Express, React.js, Stripe, Jwt, Semantic-Ui-React',
    url: 'https://ecommerce-nextjs.choton654.vercel.app',
    repo: 'https://github.com/choton654/ecommerce_nextjs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proshop-mern',
    title: 'Proshop_MERN',
    info: 'Ecommerce website with MERN stack',
    info2: 'Tech :- MongoDb, Node.js, Express, React, Paypal, Jwt, React-Bootstrap',
    url: 'https://pro-shop-mern.herokuapp.com/',
    repo: 'https://github.com/choton654/proshop_mern', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'flipcart_clone',
  //   title: 'Flipcart_clone',
  //   info: 'Ecommerce website with MERN stack',
  //   info2: 'Tech :- MongoDb, Node.js, Express, React, Paytm, Jwt, Material-Ui-React',
  //   url: 'https://ecommerce-client-eight.vercel.app/',
  //   repo: 'https://github.com/choton654/ecommerce-client', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'devconnector',
    title: 'Devconnector-NextJs',
    info: 'Social media website with Jamstack',
    info2: 'Tech :- MongoDb, Node.js, Express, React.js, Jwt, Bootstrap',
    url: 'https://evening-refuge-87263.herokuapp.com',
    repo: 'https://github.com/choton654/devconnector-next-react-router', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'yelpcamp',
  //   title: 'Yelpcamp',
  //   info: 'Social media app with Jamstack',
  //   info2: 'Tech :- MongoDb, Node.js, Express, React, Passport(auth), Material-Ui-React',
  //   url: 'https://intense-peak-94725.herokuapp.com',
  //   repo: 'https://github.com/choton654/yelpcamp_nextjs', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'slack-clone',
    title: 'Slack-Clone-Graphql',
    info: 'Build a slack clone with graphql, apollo, react',
    info2:
      'Tech :- MongoDb, Node.js, Express, React, Jwt, Graphql Subscription, Apollo Client, Semantic-Ui-React',
    url: 'https://slack-clone-next-graphql.herokuapp.com/',
    repo: 'https://github.com/choton654/slack-clone-graphql', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'socialmedia',
    title: 'Socialmedia_Nextjs',
    info: 'Social media app with realtime notification',
    info2: 'Tech :- MongoDb, NodeJs, Express, React.js, Jwt, Material-Ui-React',
    url: 'https://enigmatic-tor-00686.herokuapp.com',
    repo: 'https://github.com/choton654/socialmedia_nextjs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter-clone',
    title: 'Twitter-clone-react-native',
    info: 'Build twitter clone with react native web, graphql, apollo',
    info2:
      'Tech :- Postgres, Firebase(auth), Node.js, React Native, Prisma, Graphql-Nexus, Apollo, React Navigation, React-Native-Paper',
    url: 'https://twitter-clone-react-native.vercel.app/',
    repo: 'https://github.com/choton654/twitter-clone-react-native', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'phelix-Ai',
    title: 'Phelix-AI',
    info: 'AI based healthcare website',
    info2: 'Tech :- React, Nodejs',
    url: 'https://dev.blockhealth.co/v2/inbox/email',
  },
  // {
  //   id: nanoid(),
  //   img: 'cubicswap',
  //   title: 'Cuicswap',
  //   info: 'A b2b ecommerce app for wholesellers, retailers and large manufacturing companies.',
  //   info2:
  //     'Tech :- Mongodb, Node.js, React Native Web, Expo, Graphql, Apollo, React Navigation, React-Native-Paper',
  //   url: 'https://cubicswap.herokuapp.com/',
  //   repo: '',
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'subhajit688@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/choton654',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/subhadeep.paul.5682/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/subhadeep-paul-5305221a0/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/choton654',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
