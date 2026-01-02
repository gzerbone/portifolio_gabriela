import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, BarChart3, TrendingUp, Users, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="space-y-6 text-muted-foreground leading-relaxed mb-12 text-center">
            <p className="text-lg">
              Sou formada em <span className="text-foreground font-medium">Ciência da Computação</span> e <span className="text-foreground font-medium">Análise e Desenvolvimento de Sistemas</span>. Atualmente direciono minha carreira para a área de <span className="text-foreground font-medium">Ciência de Dados e Inteligência Artificial</span>. Meu objetivo é aplicar a IA em problemas reais, criando soluções que gerem impacto positivo.
            </p>
            <p className="text-lg">
              Tenho um <span className="text-foreground font-semibold">foco especial no entendimento raiz da estatística</span>, acreditando que uma base sólida em fundamentos estatísticos é essencial para desenvolver modelos robustos e interpretáveis. Além disso, estou constantemente aprendendo sobre a aplicação prática de ciência de dados no mercado, especialmente em áreas como <span className="text-foreground font-medium">planejamento de demanda</span>, <span className="text-foreground font-medium">otimização de estoque</span>, <span className="text-foreground font-medium">CRM</span> e <span className="text-foreground font-medium">análise de recomendações</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Fundamentos Estatísticos</h3>
                <p className="text-sm text-muted-foreground">
                  Foco no entendimento raiz da estatística para desenvolver modelos robustos e interpretáveis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Planejamento & Otimização</h3>
                <p className="text-sm text-muted-foreground">
                  Aprendendo sobre planejamento de demanda e otimização de estoque com ciência de dados.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Users className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">CRM & Recomendações</h3>
                <p className="text-sm text-muted-foreground">
                  Aplicação de ciência de dados em CRM e análise de recomendações para melhorar a experiência do cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Brain className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Gosto de trabalhar com problemas reais usando aprendizado de máquina, utilizando modelos que ajudam a tomar decisões e resolver desafios práticos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Idiomas */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Idiomas
            </h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Card className="bg-background border-border">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-foreground mb-1">Português</p>
                  <p className="text-sm text-muted-foreground">Fluente Nativo</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-foreground mb-1">Inglês</p>
                  <p className="text-sm text-muted-foreground">Avançado</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-foreground mb-1">Espanhol</p>
                  <p className="text-sm text-muted-foreground">Básico</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
