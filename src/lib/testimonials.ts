// ============================================================================
// TESTIMONIALS DATA
// ----------------------------------------------------------------------------
// This is the single place to edit testimonials shown on the site.
// The quotes below are placeholders written to match real programs. Replace
// them with real quotes from real people as you collect them. Keep the
// attribution honest: if someone gives you a quote, ask how they want to be
// credited (full name, first name, or just a role).
//
// Notes:
//  - `quote` is the testimonial text. Keep it under ~45 words for the cards.
//  - `name` can be a real name ("Ama O.") or a role ("Parent, Madina Estate").
//  - `context` is the program or relationship it came from.
//  - Keep quotes free of em dashes (site style rule).
// ============================================================================

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "My daughter used to miss school during her period. After the awareness day she has supplies, she has answers, and she has stopped being ashamed.",
    name: "Parent",
    context: "Menstrual Hygiene Awareness Day, Madina Estate",
  },
  {
    quote:
      "I did not know I could save a life before the training. Now I have taught my younger brothers what I learned.",
    name: "Student participant",
    context: "CPR and First Aid Session",
  },
  {
    quote:
      "The Wild Card team shows up, listens, and lets our students lead. That is rare, and the children can feel the difference.",
    name: "Teacher",
    context: "School partnership, Accra",
  },
  {
    quote:
      "I have watched shy students become the loudest voices in the room. That is what empowerment actually looks like.",
    name: "Volunteer facilitator",
    context: "The Wild Card Club",
  },
  {
    quote:
      "They partner with us as equals. They do not arrive with a finished plan. They build it with the community, week after week.",
    name: "Partner organization staff",
    context: "Community health drive",
  },
  {
    quote:
      "Sports day was not just fun. Our students still talk about what it means to be part of a team.",
    name: "Teacher",
    context: "Partner school sports day",
  },
];
