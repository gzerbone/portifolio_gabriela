import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Microscope } from "lucide-react";

const research = [
  {
    title: "Iniciação Científica - Visão Computacional",
    type: "Pesquisa",
    period: "2020 - 2021",
    description: "Desenvolvimento de algoritmos para segmentação automática de imagens médicas utilizando técnicas de Deep Learning e redes neurais convolucionais.",
    icon: Microscope,
    tags: ["CNN", "Segmentação", "Imagens Médicas"],
  },
  {
    title: "Trabalho de Conclusão de Curso",
    type: "TCC",
    period: "2023",
    description: "Sistema de reconhecimento e classificação de padrões em imagens utilizando Machine Learning, com foco em aplicações práticas de Visão Computacional.",
    icon: FileText,
    tags: ["Machine Learning", "Computer Vision", "Python"],
  },
  {
    title: "Projeto Acadêmico - NLP",
    type: "Projeto",
    period: "2022",
    description: "Análise de sentimentos em textos de redes sociais utilizando técnicas de Processamento de Linguagem Natural e modelos de classificação.",
    icon: BookOpen,
    tags: ["NLP", "Classificação", "BERT"],
  },
];

const ResearchSection = () => {
  return (
    <section id="pesquisa" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Pesquisa & Acadêmico
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Experiências acadêmicas com foco em Machine Learning, Deep Learning e Visão Computacional
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {research.map((item, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.type}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {item.period}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
