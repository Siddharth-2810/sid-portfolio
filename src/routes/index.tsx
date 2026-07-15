import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

type CaseStudy = {
  index: string;
  year: string;
  client: string;
  role: string;
  title: string;
  kicker: string;
  problem: string;
  process: { label: string; body: string }[];
  outcome: string;
  metrics: { value: string; label: string }[];
  stack: string[];
};

const caseStudies: CaseStudy[] = [
  {
    index: "02",
    year: "2025",
    client: "Personal Project",
    role: "AI & Full-Stack Developer",
    title: "Lumina Health — a smart medical appointment platform",
    kicker: "Matching symptoms to doctors through a conversational AI booking flow.",
    problem:
      "Booking a doctor's appointment online usually means scrolling through specialty lists you don't understand and guessing which one fits your symptoms. I wanted to build a healthcare platform where a patient could describe what they felt in plain language and be guided — through an AI chat — toward the right doctor, the right slot, and a confirmed booking.",
    process: [
      {
        label: "Research",
        body: "Studied existing booking flows (Practo, Zocdoc) and mapped where patients dropped off. The recurring failure was specialty selection — the moment where the app asks the user to be their own triage nurse.",
      },
      {
        label: "Architecture",
        body: "Designed a type-safe stack: Express 5 REST API, PostgreSQL with Drizzle ORM, and Zod schemas shared between backend and frontend. Orval generated the client hooks from the OpenAPI spec so contracts never drifted.",
      },
      {
        label: "AI layer",
        body: "Built a conversational assistant that translates free-form symptom descriptions into a doctor specialty and available slots, then hands off to a normal booking transaction with real-time availability checks.",
      },
      {
        label: "Data model",
        body: "Modeled patients, doctors, schedules, and appointments as first-class entities with type-safe queries. Added a statistics dashboard for CRUD activity and utilisation.",
      },
    ],
    outcome:
      "Shipped an end-to-end product covering symptom triage, appointment CRUD, availability checking, and a live stats dashboard — all backed by generated types from a single source of truth.",
    metrics: [
      { value: "E2E", label: "Full-stack, chat to booking" },
      { value: "0", label: "Untyped API contracts" },
      { value: "1", label: "Source of truth (OpenAPI)" },
    ],
    stack: ["TypeScript", "Express 5", "PostgreSQL", "Drizzle ORM", "Zod", "Orval", "Gemini API"],
  },
  {
    index: "01",
    year: "2025",
    client: "Elite Tech Solutions",
    role: "Data Science Intern",
    title: "An automated ETL & CNN pipeline, shipped as a live API",
    kicker: "From raw CSVs to a real-time image classifier — end to end.",
    problem:
      "The team needed a repeatable path from messy tabular data to a deployable model, and a demonstrable computer vision baseline that stakeholders could actually poke at from a browser. Two separate problems, one pipeline mindset.",
    process: [
      {
        label: "ETL",
        body: "Wrote a Python pipeline using Pandas and Scikit-learn covering ingestion, cleaning, feature encoding, and scaling. Structured it so any new dataset drops into the same interface.",
      },
      {
        label: "Modeling",
        body: "Built a CNN on CIFAR-10 with TensorFlow, tracked accuracy and loss over epochs, and captured real-time predictions with a small evaluation harness.",
      },
      {
        label: "Serving",
        body: "Exposed the trained model as a live API with Flask / FastAPI and paired it with a lightweight web interface for real-time inference from the browser.",
      },
      {
        label: "Documentation",
        body: "Wrote reproducible run instructions and evaluation notes so the pipeline could be handed off, not just demoed.",
      },
    ],
    outcome:
      "Delivered a working pipeline that took raw data to a browser-facing prediction endpoint, with the ML lifecycle — clean, train, evaluate, serve — reduced to a small number of scripted steps.",
    metrics: [
      { value: "CIFAR-10", label: "Baseline vision task" },
      { value: "Live", label: "FastAPI inference endpoint" },
      { value: "1-cmd", label: "Reproducible pipeline" },
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "FastAPI", "Flask"],
  },
  {
    index: "03",
    year: "2025",
    client: "Personal Project",
    role: "Frontend Developer",
    title: "NiveshAI — AI-driven investment insights dashboard",
    kicker: "A financial dashboard designed to stay maintainable as the data grew.",
    problem:
      "Financial dashboards die by a thousand cuts: one-off chart components, stateful widgets that don't compose, and colour choices that only make sense on the day they ship. I wanted to build something where new insights could be added by a future me without unravelling the architecture.",
    process: [
      {
        label: "State model",
        body: "Designed a scalable state layer so widgets shared derived data instead of each refetching. Kept side effects isolated and testable.",
      },
      {
        label: "Design system",
        body: "Built a small set of reusable UI primitives — cards, metric tiles, chart wrappers — with a consistent typographic and spacing scale.",
      },
      {
        label: "Data surfaces",
        body: "Structured dashboards around user intent (overview, watchlist, deep-dive) rather than data source. Every screen answers a specific question.",
      },
      {
        label: "Maintainability",
        body: "Extracted patterns as they repeated a third time — not before. The result is a codebase where adding a new view is a composition problem, not an architecture one.",
      },
    ],
    outcome:
      "A financial dashboard that reads clearly, adds new insight surfaces without refactors, and treats reusable UI as an asset rather than a nice-to-have.",
    metrics: [
      { value: "Reusable", label: "Chart & metric primitives" },
      { value: "Scalable", label: "Shared state layer" },
      { value: "Modular", label: "Feature-first architecture" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "State management"],
  },
  {
    index: "04",
    year: "2025",
    client: "Pinnacle Labs",
    role: "Web Development Intern",
    title: "Lumière — a full-stack restaurant experience",
    kicker: "Interactive menus, reservations and event bookings, built from the ground up.",
    problem:
      "Most restaurant websites are static brochures. Pinnacle wanted a working front-of-house on the web: browsable menu, real reservation flow, and an event booking system a small team could actually run.",
    process: [
      {
        label: "Structure",
        body: "Started with the guest journey — arrival, browse, book — and worked backwards into the page and component structure.",
      },
      {
        label: "Interaction",
        body: "Built interactive menu views and a reservation flow in vanilla HTML, CSS, and JavaScript, favouring clarity over framework overhead.",
      },
      {
        label: "Events",
        body: "Added an event management module so private dining and celebrations were bookable through the same interface.",
      },
      {
        label: "Responsive",
        body: "Designed mobile-first: nearly every real booking would happen from a phone in a taxi or on a couch.",
      },
    ],
    outcome:
      "Shipped a full-stack restaurant site that treats guests, menu items, and events as a single connected experience — not three disconnected pages.",
    metrics: [
      { value: "3-in-1", label: "Menu · reservations · events" },
      { value: "Mobile-first", label: "Responsive across devices" },
      { value: "Vanilla", label: "No framework, no bloat" },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const experiences = [
  {
    company: "Rabiro Marketing Agency",
    role: "Freelancer",
    period: "Jan 2024 – Present",
    location: "Remote",
    summary:
      "Worked as a freelancer with the agency to build custom websites, manage social media handles, and run digital marketing campaigns for clients across diverse industries.",
    highlights: [
      "Led website development, social media management, and digital marketing initiatives for multiple clients across diverse industries",
      "Managed Instagram handles and executed content strategies while building custom websites to enhance client brand presence",
    ],
  },
  {
    company: "Elite Tech Solutions",
    role: "Data Science Intern",
    period: "2025",
    location: "Remote",
    summary:
      "Built an automated ETL pipeline with Pandas and Scikit-learn, then trained a CNN on CIFAR-10 with TensorFlow and served it through a live FastAPI inference endpoint.",
    highlights: [
      "Reduced raw-data-to-model path to a reproducible, single-command workflow",
      "Shipped a browser-accessible prediction interface alongside the API",
      "Documented the full ML lifecycle for clean handoff",
    ],
  },
  {
    company: "Pinnacle Labs",
    role: "Web Development Intern",
    period: "2025",
    location: "Remote",
    summary:
      "Designed and built Lumière, a full-stack restaurant experience with interactive menus, table reservations, and event bookings — mobile-first, in vanilla HTML, CSS, and JavaScript.",
    highlights: [
      "Owned the guest journey end to end: browse, book, confirm",
      "Built an event management module for private dining and celebrations",
      "Shipped a responsive, phone-first booking flow",
    ],
  },
  {
    company: "Peer Consulting Venture",
    role: "Founder / Consultant",
    period: "2024",
    location: "Pune, India",
    summary:
      "Launched and scaled a student-led consulting operation to 50+ clients in four days, translating client problems into scoped, deliverable projects.",
    highlights: [
      "Scoped client needs and turned them into actionable workstreams",
      "Managed delivery timelines across multiple simultaneous engagements",
      "Learned that fast feedback loops matter more than perfect first drafts",
    ],
  },
];

const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Flask", "FastAPI"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB"] },
  { group: "ML / Data", items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"] },
  { group: "APIs", items: ["GitHub OAuth", "Discord API", "Gemini API"] },
  { group: "Tools", items: ["Git", "VS Code", "Power BI", "Tableau"] },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Intro />
        <WorkExperience />
        <SelectedWork />
        {[...caseStudies].sort((a, b) => a.index.localeCompare(b.index)).map((cs) => (
          <CaseStudySection key={cs.index} data={cs} />
        ))}
        <Skills />
        <FinalThoughts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:px-10">
        <a href="#top" className="flex min-w-0 items-baseline gap-3">
          <span className="font-display text-2xl leading-none">Siddharth</span>
          <span className="font-mono-label hidden text-muted-foreground sm:inline">
            Data Science · AI · Full-Stack · Portfolio '25
          </span>
        </a>
        <nav className="flex shrink-0 items-center gap-6 text-sm">
          <a href="#experience" className="hidden text-muted-foreground transition hover:text-foreground md:inline">
            Experience
          </a>
          <a href="#work" className="hidden text-muted-foreground transition hover:text-foreground md:inline">
            Work
          </a>
          <a href="#skills" className="hidden text-muted-foreground transition hover:text-foreground md:inline">
            Skills
          </a>
          <a href="#thoughts" className="hidden text-muted-foreground transition hover:text-foreground md:inline">
            Reflections
          </a>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-24 md:px-10 md:pt-32 md:pb-40">
        <div className="grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-3">
            <div className="font-mono-label text-muted-foreground">§ 00 — Introduction</div>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Open to internships & freelance, 2026</span>
            </div>
          </aside>
          <div className="md:col-span-9">
            <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight">
              I build with <em className="italic text-primary">data, machine learning, and AI</em> — then wrap it in software people can actually use.
            </h1>
            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
              <p className="text-lg leading-relaxed text-foreground/85">
                I'm Siddharth — a third-year B.Tech Computer Science student at D Y Patil
                International University, Pune, focused on data science, machine learning, and
                AI-powered application development. I've built ETL pipelines with Python and
                Scikit-learn, CNN models with TensorFlow, and shipped them as live APIs with
                FastAPI and Flask.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Full-stack development is how I put those models into people's hands — TypeScript,
                React, Node, and PostgreSQL, guided by modern AI tools and agentic workflows.
                Along the way I've scaled a peer consulting venture to 50+ clients in four days
                and shipped AI-driven healthcare and finance platforms.
              </p>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
              {[
                { k: "Degree", v: "B.Tech CSE" },
                { k: "Cohort", v: "2023 – 2027" },
                { k: "Clients scaled", v: "50+" },
                { k: "Based in", v: "Pune, India" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono-label text-muted-foreground">{s.k}</dt>
                  <dd className="mt-2 font-display text-4xl">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="experience" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono-label text-muted-foreground">§ 01 — Experience</div>
            <p className="mt-6 max-w-xs text-muted-foreground">
              Internships and independent work that shaped how I ship across data, AI, and full-stack.
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="space-y-12">
              {experiences.map((exp) => (
                <article key={exp.company} className="border-b border-border pb-12 last:border-b-0 last:pb-0">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-2xl">{exp.company}</h3>
                    <span className="font-mono-label text-muted-foreground">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <div className="mt-2 font-mono-label text-primary">{exp.role}</div>
                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/85">
                    {exp.summary}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <div className="font-mono-label text-muted-foreground">§ 02 — Selected work</div>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-3xl leading-tight md:text-4xl">
              Four projects, ordered from the ML pipelines to the products they end up living in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudySection({ data }: { data: CaseStudy }) {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="flex items-center justify-between font-mono-label text-muted-foreground md:flex-col md:items-start md:gap-2">
              <span>Case {data.index}</span>
              <span>{data.year}</span>
            </div>
          </div>

          <div className="md:col-span-9">
            <div className="font-mono-label text-primary">
              {data.client} · {data.role}
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.02] tracking-tight">
              {data.title}
            </h2>
            <p className="mt-6 max-w-3xl text-xl italic text-muted-foreground">{data.kicker}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {data.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 font-mono-label text-foreground/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono-label text-muted-foreground">The problem</div>
          </div>
          <p className="text-lg leading-relaxed md:col-span-9">{data.problem}</p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono-label text-muted-foreground">Design & build process</div>
          </div>
          <div className="md:col-span-9">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {data.process.map((p, i) => (
                <div key={p.label} className="bg-card p-8">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono-label text-primary">{p.label}</span>
                    <span className="font-display text-2xl text-muted-foreground">0{i + 1}</span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-foreground/85">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono-label text-muted-foreground">Outcome</div>
          </div>
          <div className="md:col-span-9">
            <p className="max-w-3xl font-display text-2xl leading-snug md:text-3xl">
              {data.outcome}
            </p>
            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {data.metrics.map((m) => (
                <div key={m.label} className="bg-card p-8">
                  <dd className="font-display text-4xl text-primary">{m.value}</dd>
                  <dt className="mt-3 text-sm text-muted-foreground">{m.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono-label text-muted-foreground">§ 03 — Toolkit</div>
            <p className="mt-6 max-w-xs text-muted-foreground">
              The stack I reach for. New things get added when a project actually asks for them.
            </p>
          </div>
          <div className="md:col-span-9">
            <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group} className="bg-card p-6">
                  <dt className="font-mono-label text-primary">{s.group}</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <span key={i} className="text-base text-foreground/85">
                        {i}
                        <span className="mx-2 text-muted-foreground/50 last:hidden">·</span>
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalThoughts() {
  return (
    <section id="thoughts" className="border-b border-border/60 bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono-label text-paper/60">§ 04 — Final thoughts</div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1] tracking-tight">
              What building across the stack has taught me so far.
            </h2>

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              <Reflection
                title="Lessons learned"
                body="Shipping fast and shipping well aren't opposites — they share the same discipline. Type-safe contracts, a shared source of truth for data, and a small design system pay for themselves inside a week."
              />
              <Reflection
                title="What's next"
                body="I want to work with teams building AI-native products end to end — from data pipelines to the interfaces people actually use — and keep sharpening the loop between machine learning research and shippable software."
              />
              <Reflection
                title="How this portfolio reads"
                body="Every case study follows the same arc: a real problem, the architectural and design choices behind it, and an outcome I can point to. The through-line is a bias toward well-typed, well-structured systems that stay maintainable as they grow."
              />
            </div>

            <blockquote className="mt-20 border-l-2 border-primary pl-8">
              <p className="font-display text-3xl italic leading-snug md:text-4xl">
                "The best code I've written is the code I didn't have to rewrite six months later."
              </p>
              <footer className="mt-4 font-mono-label text-paper/50">
                Note-to-self, pinned in my editor
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reflection({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="font-mono-label text-primary">{title}</div>
      <p className="mt-4 text-base leading-relaxed text-paper/80">{body}</p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="font-mono-label text-muted-foreground">§ 05 — Contact</div>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
              Have a project or a role in mind? <em className="italic text-primary">Let's talk.</em>
            </h2>
          </div>
          <div className="md:col-span-4">
            <div className="space-y-4 text-lg">
              <a
                href="mailto:rajsiddharth500@gmail.com"
                className="group flex items-center justify-between border-b border-border py-4 transition hover:border-primary"
              >
                <span className="min-w-0 truncate">rajsiddharth500@gmail.com</span>
                <span className="text-primary transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="tel:+918789110224"
                className="group flex items-center justify-between border-b border-border py-4 transition hover:border-primary"
              >
                <span>+91 87891 10224</span>
                <span className="text-primary transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://github.com/Siddharth-2810"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 transition hover:border-primary"
              >
                <span>GitHub</span>
                <span className="text-primary transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/siddharth-b7679127a/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 transition hover:border-primary"
              >
                <span>LinkedIn</span>
                <span className="text-primary transition group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] gap-4 px-6 py-8 font-mono-label text-muted-foreground md:px-10">
        <div className="min-w-0 truncate">© 2026 Siddharth · Pune, India</div>
        <div className="shrink-0">B.Tech CSE · D Y Patil International University</div>
      </div>
    </footer>
  );
}
