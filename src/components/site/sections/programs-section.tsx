import { Reveal } from "@/components/site/reveal";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const PROGRAMS = [
  { title: "Menstrual Hygiene Awareness Day", date: "May 28, 2026", time: "All day", location: "Madina Estate, Accra", image: "/photos/missions-youth-group.png", description: "In partnership with Gyedzi Foundation, we delivered 1,000 sanitary pads and broke the stigma around menstruation in schools. Health personnel led sessions with students, parents, and teachers.", pillar: "Wellbeing", past: true },
  { title: "CPR and First Aid Session, June Edition", date: "June 29 to 30, 2026", time: "11:30 AM to 1:00 PM", location: "No. 3 Bamako Road, East Legon, Accra", image: "/photos/hero-homepage.jpg", description: "A two-day hands-on training led by Dr. Isaac, equipping young people and community members with life-saving CPR and first aid skills. Free and open to all.", pillar: "Wellbeing", past: false },
  { title: "Herons Sports Day", date: "March 27, 2026", time: "11:00 AM", location: "Accra, Ghana", image: "/photos/education-pillar.png", description: "A collaborative sports day with Herons International School, because play, movement, and teamwork are core to a young person's wellbeing, not optional extras.", pillar: "Wellbeing", past: true },
  { title: "World Day Against Child Labour", date: "June 12, 2026", time: "All day", location: "Accra, Ghana", image: "/photos/empowerment-pillar.png", description: "An advocacy campaign led with Gyedzi Foundation highlighting the reality that millions of children are still pushed into labour instead of school, and what we can do about it, together.", pillar: "Education", past: true },
];

export function ProgramsSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-brand-teal">Programs and Events</p>
          <h2 className="display-2 text-brand-charcoal text-balance">What we have been building.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">A look at recent and upcoming programs. Some are run directly by us, others in partnership with the organizations we trust.</p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={i * 100}>
              <article className="group grid grid-cols-1 overflow-hidden rounded-2xl bg-background ring-1 ring-border/60 transition-all hover:shadow-xl hover:ring-brand-teal/20 sm:grid-cols-5">
                <div className="relative aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-[4/5] lg:aspect-[5/6]">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-teal/95 px-3 py-1 eyebrow text-background backdrop-blur-sm">{program.pillar}</span>
                  {program.past && <span className="absolute right-3 top-3 rounded-full bg-brand-yellow px-3 py-1 eyebrow text-brand-charcoal">Past</span>}
                </div>
                <div className="flex flex-col justify-center p-5 sm:col-span-3 sm:p-7">
                  <h3 className="font-serif text-xl font-semibold text-brand-charcoal md:text-2xl">{program.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                  <div className="mt-5 space-y-1.5 text-xs text-brand-charcoal">
                    <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-brand-teal" /><span>{program.date}</span></div>
                    <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-brand-teal" /><span>{program.time}</span></div>
                    <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-brand-teal" /><span>{program.location}</span></div>
                  </div>
                  {!program.past && (
                    <div className="mt-5">
                      <a href={`mailto:thewildcardprojectgh@gmail.com?subject=${encodeURIComponent(`Registration: ${program.title}`)}`} className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold text-brand-charcoal transition-colors hover:bg-brand-yellow-dark">
                        Register here<span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}><div className="mt-14 text-center"><Link href="/programs" className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand-teal-dark">See all programs<span aria-hidden="true">→</span></Link></div></Reveal>
      </div>
    </section>
  );
}
