import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Contato
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Vamos conversar? Estou sempre aberta a novas oportunidades e projetos interessantes.
        </p>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                  <a href="mailto:contato@email.com">
                    <Mail className="h-5 w-5" />
                    Email
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
