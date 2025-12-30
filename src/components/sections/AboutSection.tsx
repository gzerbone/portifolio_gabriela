import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
            <p className="text-lg">
              Sou formada em <span className="text-foreground font-medium">Ciência da Computação</span> e 
              atualmente direciono minha carreira para a área de <span className="text-foreground font-medium">
              Ciência de Dados e Inteligência Artificial</span>. Minha trajetória combina 
              sólida formação acadêmica com experiência prática em desenvolvimento de software 
              e projetos de pesquisa.
            </p>

            <p>
              Durante a graduação, desenvolvi uma forte base em programação, algoritmos e 
              estruturas de dados, o que me permitiu fazer uma transição natural para o 
              mundo dos dados. Participei de projetos de Iniciação Científica focados em 
              Machine Learning.
            </p>

            <p>
              Meu objetivo é aplicar IA em problemas reais, criando soluções que gerem 
              impacto positivo. Acredito na importância de unir conhecimento técnico com 
              uma visão prática, sempre buscando aprender e evoluir continuamente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ciência de Dados</h3>
                <p className="text-sm text-muted-foreground">
                  Análise exploratória, visualização e extração de insights
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento de modelos preditivos e classificadores
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Desenvolvimento</h3>
                <p className="text-sm text-muted-foreground">
                  Experiência full stack com foco em aplicações web
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
