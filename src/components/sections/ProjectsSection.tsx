import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe } from "lucide-react";
import projectMl from "@/assets/project-ml.jpg";
import projectCv from "@/assets/project-cv.jpg";
import projectData from "@/assets/project-data.jpg";
import projectDl from "@/assets/project-dl.jpg";

type Category = "Todos" | "Data Science"| "Machine Learning" | "Visão Computacional" | "Full Stack" | "Processamento de Linguagem Natural" | "Design" | "Backend" |"Outros";

const categories: Category[] = [
  "Todos",
  "Data Science",
  "Machine Learning",
  "Visão Computacional",
  "Full Stack",
  "Processamento de Linguagem Natural",
  "Design",
  "Backend",
  "Outros",
];

const projects = [
  {
    title: "Segmentação de Vasos Sanguíneos na Retina usando Deep Learning",
    description: "Este trabalho foi fruto do projeto final do Bootcamp de Machine Learning na Atlântico Avanti. Uso de Visão Computacional e Deep Learning (UNet) para desenvolver um sistema de segmentação de vasos sanguíneos da retina. Utilizei Python, TensorFlow/Keras e bibliotecas de Visão Computacional. Foco em IA aplicada à saúde. A segmentação precisa dos vasos é crucial para o diagnóstico e monitoramento de diversas doenças oculares, como retinopatia diabética e glaucoma.",
    image: projectCv,
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Numpy", "Matplotlib", "Seaborn", "Pandas", "Scikit-learn"],
    github: "https://github.com/gzerbone/CNN_Segmentacao_de_Retina",
    post: "https://www.linkedin.com/posts/gabrielazerbone_machinelearning-inteligenciaartificial-visaocomputacional-activity-7323768239224680448-ThL2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA0_KqoBvZqitBXFnqQ1Xu6-x0wOyMafcLg",
    featured: true,
    category: "Visão Computacional" as Category,
  },
  {
    title: "Agente Conversacional Híbrido: Atendimento Médico via WhatsApp",
    description: "Sistema de chatbot inteligente desenvolvido em Django REST Framework que automatiza o pré-agendamento de consultas médicas através do WhatsApp. Utiliza Google Gemini AI 2.0 Flash para conversação natural, com integração completa ao Google Calendar para gerenciamento de horários em tempo real. Desenvolvido como projeto de TCC, o sistema elimina a necessidade de atendimento telefônico para agendamentos, proporcionando uma experiência moderna e eficiente tanto para pacientes quanto para clínicas médicas.",
    image: projectData,
    tags: ["Python", "Django Rest Framework", "Gemini API", "Automação de Processos", "Backend", "PLN", "Whatsapp API", "Google Calendar API", "RAG", "LLMs", "Monitoramento de Tokens"],
    github: "https://github.com/gzerbone/chatbot_ClinicaMedica",
    post:"https://www.linkedin.com/posts/gabrielazerbone_python-django-ai-activity-7411494577091678208-rkdp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA0_KqoBvZqitBXFnqQ1Xu6-x0wOyMafcLg",
    featured: true,
    category: "Processamento de Linguagem Natural" as Category,
  },
  {
    title: "Site do Centro de Inteligência do Cacau",
    description: "O Centro de Inteligência do Cacau (CI Cacau) é uma plataforma dedicada à coleta, análise e difusão de informações estratégicas sobre o setor cacaueiro. Nosso objetivo é conectar ciência, tecnologia e mercado para impulsionar a competitividade e sustentabilidade da cadeia produtiva do cacau.",
    image: projectData,
    tags: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "Python"],
    site: "https://cicacau.uesc.br",
    featured: true,
    category: "Full Stack" as Category,
  },
  {
    title: "Análise de Rotatividade de Clientes Bancários",
    description: "O objetivo deste projeto é analisar os dados de clientes de um banco para identificar os fatores que influenciam a saída dos clientes (churn). Com base nessa análise, podemos desenvolver estratégias para reduzir a taxa de churn e melhorar a retenção de clientes.",
    image: projectDl,
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Numpy"],
    github: "https://github.com/gzerbone/predicao-banking-churn",
    featured: false,
    category: "Data Science" as Category,
  },
  {
    title: "Gerador de Plano de Negócios",
    description: "Um gerador de plano de negócios é uma ferramenta que ajuda empreendedores e empresários a criar um documento estruturado e detalhado que descreve os objetivos, estratégias, mercado, operações e projeções financeiras de um negócio.",
    image: projectData,
    tags: ["Node", "HTML", "CSS", "JavaScript", "Express", "EJS","Bootstrap", "MySQL"],
    github: "https://github.com/gzerbone/gerador-plano-negocios/tree/main",
    featured: false,
    category: "Full Stack" as Category,
  },
  {
    title: "Transformador de Imagem para Arte ASCII",
    description: "Image_To_Ascii_art é um programa em Python que converte imagens em arte ASCII, transformando imagens visuais em representações textuais artísticas.",
    image: projectMl,
    tags: ["Python", "PIL", "ASCII Art"],
    github: "https://github.com/gzerbone/Image_To_Ascii_art/tree/main",
    featured: false,
    category: "Outros" as Category,
  },

];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Projetos
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group ${
                project.featured ? "ring-1 ring-primary/20" : ""
              }`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Destaque
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
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
                  {project.github && (
                  <Button asChild variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  )}
                  {project.post && (
                    <Button asChild variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                      <a href={project.post} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        Post
                      </a>
                    </Button>
                  )}
                  {project.site && (
                    <Button asChild variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                      <a href={project.site} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                        Site
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Nenhum projeto encontrado nesta categoria.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
