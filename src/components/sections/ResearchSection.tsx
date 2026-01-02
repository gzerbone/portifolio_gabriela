import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Microscope, Code, Users } from "lucide-react";

const research = [
  {
    title: "Atendimento Híbrido Inteligente: Aplicação de um Agente Conversacional com LLM para o Esclarecimento de dúvidas e Pré-agendamento de Consultas em Clínicas Médicas Via Whatsapp",
    type: "TCC",
    period: "2025",
    description: "Chatbot inteligente que automatiza o pré-agendamento de consultas médicas através do WhatsApp. Utilizando LLM para conversação natural, com integração completa ao Google Calendar para gerenciamento de horários em tempo real. Desenvolvido como projeto de TCC, o sistema elimina a necessidade de atendimento telefônico para agendamentos, proporcionando uma experiência moderna e eficiente tanto para pacientes quanto para clínicas médicas.",
    icon: FileText,
    tags: ["Python", "Django Rest Framework", "Automação de Processos", "Gerência de Projetos", "LLM", "Whatsapp API", "Google Calendar API", "RAG", "Monitoramento de Tokens"],
  },
  {
    title: "Iniciação Científica - Uso da Espectroscopia no Infravermelho Próximo (NIR) e Redes Neurais para Triagem e Monitoramento de Neutropenia (CNPq)",
    type: "Pesquisa",
    period: "2023 - 2024",
    description: "Foi utilizado espectroscopia no infravermelho próximo (NIR) e aprendizado de máquina para identificar neutropenia (baixo nível de glóbulos brancos) em pacientes com câncer. Testei algoritmos como SVM, LDA e Floresta Aleatória, e o modelo SVM obteve os melhores resultados, mostrando o potencial dessa abordagem para uma detecção não invasiva e precisa.",
    icon: Microscope,
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "SVM", "LDA", "Floresta Aleatória", "Espectroscopia NIR"],
  },
  {
    title: "Desenvolvedora Full Stack do Centro de Inteligência do Cacau",
    type: "Projeto de Extensão",
    period: "2023 - 2025",
    description: "Desenvolvimento do novo website do Centro de Inteligência do Cacau (CiCacau). Prototipagem do zero e integração com o banco de dados antigo da empresa",
    icon: BookOpen,
    tags: ["Django", "JavaScript","HTML", "CSS", "Bootstrap", "MySQL", "Git", "Figma", "Gestão de Projetos"],
  },
  {
    title: "Diretora de RH - TecnoJr",
    type: "Empresa Júnior",
    period: "2022 - 2023",
    description: "Gestão de recursos humanos na empresa júnior, responsável por processos seletivos, desenvolvimento de membros, organização de eventos e manutenção do clima organizacional. Desenvolvimento de habilidades em liderança, comunicação e gestão de pessoas.",
    icon: Users,
    tags: ["Gestão de Pessoas", "Recrutamento e Seleção", "Liderança", "Comunicação", "Organização de Eventos"],
  },
  {
    title: "Desenvolvedora Frontend - TecnoJr",
    type: "Empresa Júnior",
    period: "2021 - 2022",
    description: "Desenvolvimento de aplicações web. Participação ativa em projetos de integração de APIs e otimização de sistemas. Trabalho em equipe em uma empresa júnior, desenvolvendo habilidades técnicas e de gestão de projetos.",
    icon: Code,
    tags: ["Node.js", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Figma", "Linux", "VS Code"],
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
          Nesta seção, apresento um resumo das minhas principais experiências acadêmicas, incluindo pesquisa com aprendizado de máquina aplicada à saúde, participação em projetos de extensão em desenvolvimento web, atuação e liderança em empresa júnior, além do desenvolvimento de um agente conversacional inteligente para pré-agendamento de consultas médicas usando LLMs e RAGs no TCC. Essas experiências reforçaram minha atuação prática e interdisciplinar entre ciência de dados, inteligência artificial e desenvolvimento de sistemas inovadores.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {research.map((item, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
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
