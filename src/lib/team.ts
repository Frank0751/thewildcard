// ============================================================================
// TEAM DATA
// ----------------------------------------------------------------------------
// This is the single place to edit the Our Team page. Replace the placeholder
// members below with real people. To add a member, copy one object in the
// TEAM_MEMBERS array and fill it in. To remove one, delete its object.
//
// Notes:
//  - `image` is a path under /public (e.g. "/photos/founder-colorful-dress.jpg")
//    or leave it as "" to show an automatic initials avatar.
//  - Social handles are optional. Delete any you do not need. Provide the full
//    URL for each (e.g. "https://www.instagram.com/username").
//  - Keep bios free of em dashes (site style rule).
// ============================================================================

export interface TeamSocial {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
  email?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: TeamSocial;
  /** Set true for the founder / lead so they render first and larger. */
  lead?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Veana Negasi",
    role: "Founder and Executive Director",
    bio: "Veana Negasi (née Veana Acolatse) is a recording and performing artist, multi-hyphenate entrepreneur, strategist, and Business Administration student who believes that great ideas are only meaningful when they create real impact. From the stage to the boardroom, she is passionate about storytelling, entrepreneurship, and building communities that help people grow. Her work is driven by curiosity, service, and the conviction that creativity and business can come together to solve complex problems, inspire people, and shape a better future.",
    image: "/images/team/veana-negasi.jpg",
    socials: {
      instagram: "https://www.instagram.com/VeanaNegasi",
      facebook: "https://www.facebook.com/VeanaNegasi",
      twitter: "https://x.com/VeanaNegasi",
      youtube: "https://www.youtube.com/@VeanaNegasi",
      linkedin: "https://www.linkedin.com/search/results/people/?keywords=Veana%20Acolatse",
      email: "mailto:Veanaacolatse@gmail.com",
    },
    lead: true,
  },
  {
    name: "Andrew Akoto-Addo",
    role: "Strategic Partner",
    bio: "A Pan-African social entrepreneur and ecosystem builder passionately committed to creating shared value across the continent. From Ghana's social sector to innovation labs in Shenzhen, India, Kigali, and Rabat, and developing entrepreneurship ecosystems in Accra, while fostering continental gatherings and intra-African trade across Africa. As Strategic Partner at The Wild Card Project, Andy provides strategic guidance, ecosystem partnerships, and long-term growth support.",
    image: "/images/team/andrew-akoto-addo.jpg",
    socials: {
      instagram: "https://www.instagram.com/andy.oneafrica",
      linkedin: "https://www.linkedin.com/search/results/people/?keywords=Andrews%20Akoto-Addo",
      email: "mailto:andrewsakotoaddo@gmail.com",
    },
  },
  {
    name: "Richard Acolatse",
    role: "Finance Director",
    bio: "Richard Acolatse is the Finance Director of The Wild Card Project. He holds a Bachelor's degree in Business Administration from the University of Professional Studies, Accra (UPSA), and a Master's degree in Accounting and Taxation. He currently works at EY and is the founder of Car Culture. He is dedicated to community development and has supported students in government junior high schools across Ghana through donations of food, stationery, and other essential learning materials.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/Rychee_richh",
      twitter: "https://x.com/rycheee_",
      linkedin: "https://www.linkedin.com/search/results/people/?keywords=Richard%20Acolatse",
      email: "mailto:Acorich11@gmail.com",
    },
  },
  {
    name: "Kobby Senam",
    role: "Creative Director",
    bio: "Kobby Senam is a creative strategist and brand designer with a passion for using design to tell compelling stories. He is the co-founder of Cranion House (now KomiKreatives) and currently serves as a Brand Designer at Chroma Digital. His portfolio includes work on the Creative and Communications Team behind the NDC People's Manifesto (2020). At The Wild Card Project, Kobby oversees creative direction, branding, visual identity, and communications, ensuring every initiative is presented with clarity, purpose, and impact.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/kobbysenam_jnr",
      linkedin: "https://www.linkedin.com/search/results/people/?keywords=Senam%20Alifo",
      email: "mailto:senamkobyy@gmail.com",
    },
  },
];

// The conviction that holds the team together. Edit freely.
export const TEAM_PHILOSOPHY = {
  eyebrow: "What Holds Us Together",
  title: "A team built on presence, not pedigree.",
  intro:
    "We are a small team by design. The people who do this work share one conviction: that the young people most often overlooked carry the most extraordinary potential, and that showing up consistently matters more than showing up impressively.",
  principles: [
    {
      title: "We co-create, never dictate",
      description:
        "Nothing about the young people we serve without them. Every program is shaped with the children, schools, and communities it touches.",
    },
    {
      title: "We stay honest",
      description:
        "We report the numbers we actually have. Small is a stage of growth, not a weakness to hide.",
    },
    {
      title: "We show up",
      description:
        "Trust is built in classrooms and community halls, week after week, not in press releases. Presence is the whole strategy.",
    },
  ],
};
