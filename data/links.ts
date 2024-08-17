import { Prisma } from '@prisma/client';
export const links : Prisma.LinkCreateManyInput[] = [
  {
    category: "Open Source",
    description: "Fullstack React framework",
    imageUrl: "https://github.com/vercel.png",
    title: "Next.js",
    url: "https://nextjs.org",
  },
  {
    category: "Open Source",
    description: "Next Generation ORM for TypeScript and JavaScript",
    imageUrl: "https://github.com/prisma.png",
    title: "Prisma",
    url: "https://prisma.io",
  },
  {
    category: "Open Source",
    description: "Utility-fist css framework",
    imageUrl: "https://github.com/tailwindlabs.png",
    title: "TailwindCSS",
    url: "https://tailwindcss.com",
  },
  {
    category: "Open Source",
    description: "GraphQL implementation ",
    imageUrl: "https://www.apollographql.com/apollo-home.png",
    title: "Apollo GraphQL",
    url: "https://apollographql.com",
  },
  {
    category: "Open Source",
    description: "My Resume",
    imageUrl: "https://github.com/tailwindlabs.png",
    title: "Profile",
    url: "https://wwww.google.com",
  },
  {
    category: "Open Source",
    description: "My Resume 2",
    imageUrl: "https://github.com/tailwindlabs123.png",
    title: "Profile",
    url: "https://www.youtube.com",
  },
];

