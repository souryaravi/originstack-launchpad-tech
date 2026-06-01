const groups = [
  { title: "Frontend", items: ["React", "Next.js", "Vue", "TanStack"] },
  { title: "Backend", items: ["Python", "Django", "FastAPI", "Node.js"] },
  { title: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { title: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes"] },
  { title: "AI & Data", items: ["OpenAI", "LangChain", "Vector DBs", "RAG"] },
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
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{g.title}</div>
              <div className="space-y-2">
                {g.items.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-muted/50 hover:bg-gradient-card transition-smooth">
                    <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                    {t}
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
