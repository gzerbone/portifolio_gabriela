import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectMl from "@/assets/project-ml.jpg";
import projectCv from "@/assets/project-cv.jpg";
import projectData from "@/assets/project-data.jpg";
import projectDl from "@/assets/project-dl.jpg";

const projects = [
  {
    title: "Sistema de Classificação de Imagens",
    description: "Modelo de Deep Learning para classificação automática de imagens médicas utilizando redes convolucionais.",
    image: projectCv,
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Análise Preditiva de Vendas",
    description: "Pipeline completo de análise e previsão de vendas com técnicas de Machine Learning e visualização de dados.",
    image: projectData,
    tags: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Detecção de Objetos em Tempo Real",
    description: "Sistema de visão computacional para detecção e rastreamento de objetos em vídeos usando YOLO.",
    image: projectDl,
    tags: ["Python", "YOLO", "OpenCV", "NumPy"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Modelo de Recomendação",
    description: "Sistema de recomendação baseado em filtragem colaborativa e análise de similaridade.",
    image: projectMl,
    tags: ["Python", "scikit-learn", "Pandas", "Flask"],
    github: "https://github.com",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Projetos
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Uma seleção dos meus projetos em Machine Learning, Deep Learning e análise de dados
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-border bg-card hover:shadow-lg transition-shadow ${
                project.featured ? "ring-1 ring-primary/20" : ""
              }`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.featured && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    Destaque
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
