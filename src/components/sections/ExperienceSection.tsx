import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Desenvolvedora Frontend",
    company: "TecnoJr",
    period: "2021 - 2022",
    description: "Desenvolvimento de aplicações web utilizando React e Node.js. Participação ativa em projetos de integração de APIs e otimização de sistemas.",
    highlights: ["Node.js", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Figma", "Linux", "VS Code"],
  },
  {
    title: "Estagiária de Desenvolvimento",
    company: "Centro de Inteligência do Cacau",
    period: "2021 - 2022",
    description: "Desenvolvimento de funcionalidades para plataforma SaaS. Implementação de dashboards e relatórios com visualização de dados.",
    highlights: ["Django", "JavaScript", "MySQL", "Git"],
  },
  {
    title: "Bolsista de Iniciação Científica",
    company: "CNPq",
    period: "2023 - 2025",
    description: "Foi utilizado espectroscopia no infravermelho próximo (NIR) e aprendizado de máquina para identificar neutropenia (baixo nível de glóbulos brancos) em pacientes com câncer. Testei algoritmos como SVM, LDA e Floresta Aleatória, e o modelo SVM obteve os melhores resultados, mostrando o potencial dessa abordagem para uma detecção não invasiva e precisa.",
    highlights: ["Python", "NumPy", "Pandas", "Scikit-learn", "SVM", "LDA", "Floresta Aleatória"],
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
