const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

type Tech = { name: string; slug: string };

const groups: { title: string; items: Tech[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python", slug: "python" },
      { name: "Django", slug: "django" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Node.js", slug: "nodedotjs" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", slug: "amazonwebservices" },
      { name: "Azure", slug: "microsoftazure" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
    ],
  },
  {
    title: "AI & Data",
    items: [
      { name: "OpenAI", slug: "openai" },
      { name: "LangChain", slug: "langchain" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Tech Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Modern tooling, <span className="text-gradient-brand">production-ready</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-5 text-center">
                {g.title}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {g.items.map((t) => (
                  <div
                    key={t.name}
                    className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-muted/40 hover:bg-gradient-card hover:-translate-y-1 transition-smooth"
                  >
                    <img
                      src={icon(t.slug)}
                      alt={t.name}
                      className="h-9 w-9 object-contain group-hover:scale-110 transition-smooth"
                      loading="lazy"
                    />
                    <span className="text-xs font-medium text-center text-foreground/80">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
