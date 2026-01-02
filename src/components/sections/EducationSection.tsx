import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade Estadual de Santa Cruz - UESC",
    period: "2021 - 2025",
  },
  {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Estácio",
    period: "2021 - 2023",
  },
];

const EducationSection = () => {
  return (
    <section id="formacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Formação Acadêmica
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {edu.institution}
                    </p>
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

export default EducationSection;
