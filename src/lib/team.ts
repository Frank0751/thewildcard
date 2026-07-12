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
  twitter?: string;
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
    role: "Founder and Director",
    bio: "Veana founded The Wild Card Project on a simple conviction: the young people most often overlooked are exactly the ones our communities need most. After years working alongside NGOs, startups, and development organizations across Africa, she is building the platform she wished existed, one that turns wild cards into aces.",
    image: "/images/team/veana-negasi.jpg",
    socials: {
      instagram: "https://www.instagram.com/wearewildcard.gh",
      email: "mailto:thewildcardprojectgh@gmail.com",
    },
    lead: true,
  },
  {
    name: "Team Member Name",
    role: "Programs Lead",
    bio: "Placeholder bio. Replace with this team member's background, what they lead on, and why they show up for the work. Two or three honest sentences is plenty.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/wearewildcard.gh",
    },
  },
  {
    name: "Team Member Name",
    role: "Community and Partnerships",
    bio: "Placeholder bio. Replace with this team member's background, the relationships they hold, and the communities they help us stay close to.",
    image: "",
    socials: {
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Team Member Name",
    role: "Storytelling and Media",
    bio: "Placeholder bio. Replace with this team member's background, how they capture the work, and how they help young people tell their own stories.",
    image: "",
    socials: {
      twitter: "https://twitter.com",
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
