// ============================================================================
// PROJECTS DATA
// ----------------------------------------------------------------------------
// The Wild Card Project runs distinct projects. This file is the index of them.
// The Wild Card Club is the first. To add another project, add an entry to
// PROJECTS. If it has its own detail page, set `href` to that route; otherwise
// set `status: "coming-soon"` and it renders as an upcoming project.
//
// Keep all copy free of em dashes (site style rule).
// ============================================================================

export interface ProjectSummary {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  href?: string;
  status: "active" | "coming-soon";
  /** Short label for the card badge. */
  badge: string;
}

export const PROJECTS: ProjectSummary[] = [
  {
    slug: "wild-card-club",
    name: "The Wild Card Club",
    tagline: "Turning Wild Cards into Aces.",
    summary:
      "A structured youth enrichment initiative. We design intentional weekly sessions that develop creativity, literacy, communication, critical thinking, movement, and character in children, exposing them to new skills, new mentors, and new possibilities beyond traditional academics.",
    image: "/images/club/club-dental-group.jpg",
    href: "/projects/wild-card-club",
    status: "active",
    badge: "Flagship Project",
  },
  {
    slug: "more-coming",
    name: "More projects on the way",
    tagline: "Built on the same conviction.",
    summary:
      "The Wild Card Club is the first of several projects under The Wild Card Project. We are building the next ones now, each designed to reach overlooked young people in a different way. Partner with us to help shape what comes next.",
    image: "/photos/missions-youth-group.png",
    status: "coming-soon",
    badge: "Coming Soon",
  },
];
