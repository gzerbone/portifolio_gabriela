import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Desenvolvedora Full Stack",
    company: "Tech Solutions",
    period: "2022 - 2023",
    description: "Desenvolvimento de aplicações web utilizando React, Node.js e Python. Participação ativa em projetos de integração de APIs e otimização de sistemas.",
    highlights: ["React", "Node.js", "Python", "PostgreSQL"],
  },
  {
    title: "Estagiária de Desenvolvimento",
    company: "Startup Innovation",
    period: "2021 - 2022",
    description: "Desenvolvimento de funcionalidades para plataforma SaaS. Implementação de dashboards e relatórios com visualização de dados.",
    highlights: ["Django", "JavaScript", "MySQL", "Git"],
  },
  {
    title: "Bolsista de Iniciação Científica",
    company: "Universidade Federal",
    period: "2020 - 2021",
    description: "Pesquisa em Machine Learning aplicado à Visão Computacional. Desenvolvimento de algoritmos para processamento e classificação de imagens.",
    highlights: ["Python", "TensorFlow", "OpenCV", "Pesquisa"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Experiência Profissional
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-background border-border relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <CardContent className="p-6 pl-8">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 bg-accent rounded-lg items-center justify-center shrink-0">
                    <Briefcase className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
