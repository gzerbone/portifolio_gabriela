import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 text-lg opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            Olá, eu sou
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
            Gabriela Zerbone Magno Baptista
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            Cientista de Dados | Data & IA
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            Transformando dados em insights e desenvolvendo soluções inteligentes 
            com Machine Learning e Visão Computacional. Formada em Ciência da Computação 
            com foco em aplicações práticas de Inteligência Artificial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            <Button
              asChild
              size="lg"
              className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="https://github.com/gzerbone" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <a href="https://www.linkedin.com/in/gabrielazerbone/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
