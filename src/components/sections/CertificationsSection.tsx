import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Bootcamp de Machine Learning",
    institution: "Atlântico Avanti",
    year: "2023",
    projectLink: "#projetos",
    projectTitle: "Projeto de Segmentação de Vasos Retinais com Deep Learning",
    description: "Uso de Visão Computacional e Deep Learning (UNet) para desenvolver um sistema de segmentação de vasos sanguíneos da retina. Utilizei Python, TensorFlow/Keras e bibliotecas de Visão Computacional.",
  },
  {
    name: "Bootcamp de Ciência de Dados",
    institution: "Atlântico Avanti",
    year: "2024",
  },
  {
    name: "Curso de Ciência de Dados",
    institution: "ASN.Rocks",
    year: "2025",
    description: "Exploração, limpeza e preparação de dados, além da aplicação de modelos de ML para suporte à decisão estratégica. Abordagem completa de estatística e machine learning, incluindo medidas estatísticas, probabilidade, testes de hipóteses, regressão, análise de clusters e métricas de desempenho.",
  },
  {
    name: "Formação Python Dados & Web",
    institution: "CEPEDI",
    year: "2022",
    period: "Emitido em set de 2022. Expira em dez de 2022",
    competencies: ["Bancos de dados relacionais", "Python", "Trabalho em equipe", "SQL", "Django", "Ciência da computação", "Microsoft Windows", "Infraestrutura"],
  },
  {
    name: "Quality Assurance Básico",
    institution: "Escola Atlântico Avanti",
    competencies: ["Testes manuais", "Trabalho em equipe", "Microsoft Windows", "Office 365", "Automação de testes"],
  },
];

const CertificationsSection = () => {
  return (
    <section id="certificacoes" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Certificações
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Award className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-1">
                      {cert.institution} {cert.year && `- ${cert.year}`}
                    </p>
                    {cert.period && (
                      <p className="text-xs text-muted-foreground mb-2">
                        {cert.period}
                      </p>
                    )}
                    {cert.description && (
                      <p className="text-sm text-muted-foreground mt-2 mb-3">
                        {cert.description}
                      </p>
                    )}
                    {cert.competencies && cert.competencies.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Competências:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.competencies.map((competency, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-md"
                            >
                              {competency}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {cert.projectLink && cert.projectTitle && (
                      <a
                        href={cert.projectLink}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium mt-3 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          const projetosSection = document.getElementById('projetos');
                          if (projetosSection) {
                            projetosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                      >
                        <span>{cert.projectTitle}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
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

export default CertificationsSection;
