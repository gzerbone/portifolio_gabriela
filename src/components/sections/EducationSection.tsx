import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal de São Paulo",
    period: "2019 - 2023",
    description: "Formação completa com ênfase em algoritmos, estruturas de dados, inteligência artificial e desenvolvimento de software.",
  },
  {
    degree: "Bootcamp de Data Science",
    institution: "Digital Innovation One",
    period: "2023",
    description: "Programa intensivo focado em análise de dados, Machine Learning e Python para ciência de dados.",
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
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-accent-foreground" />
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
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
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
