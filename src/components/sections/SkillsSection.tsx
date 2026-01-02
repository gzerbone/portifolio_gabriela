import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart } from "lucide-react";

const technicalSkills = [
  {
    title: "Linguagens de Programação",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "R", "C"],
  },
  {
    title: "Ciência de Dados & Machine Learning",
    skills: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "LLMs", "Processamento de Linguagem Natural"],
  },
  {  
    title: "Visão Computacional & Deep Learning",
    skills: ["OpenCV", "PIL", "TensorFlow", "Keras", "PyTorch", "CNNs", "Processamento de Imagens"],
  },
  {
    title: "Desenvolvimento Web & APIs",
    skills: ["React", "Django", "Django Rest Framework", "APIs REST", "EJS", "Node.js", "Express", "HTML/CSS", "Bootstrap", "Tailwind CSS", "WordPress"],
  },
  {
    title: "Banco de Dados & Ferramentas",
    skills: ["MySQL", "Git", "GitHub", "Pacote Office", "Excel", "PowerBI", "Cypress", "WavingTest", "Selenium"],
  },
  {
    title: "Design",
    skills: ["Photoshop", "Figma", "Illustrator", "Corel Draw"],
  },
];

const softSkills = [
  {
    title: "Liderança & Gestão",
    skills: ["Liderança de Equipes", "Gestão de Pessoas", "Organização de Eventos", "Recrutamento e Seleção"],
  },
  {
    title: "Comunicação & Colaboração",
    skills: ["Comunicação Eficaz", "Trabalho em Equipe", "Apresentações"],
  },
  {
    title: "Desenvolvimento Pessoal",
    skills: ["Resolução de Problemas", "Pensamento Crítico", "Adaptabilidade", "Proatividade"],
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Habilidades
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        {/* Habilidades Técnicas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Habilidades Técnicas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {technicalSkills.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1.5 bg-accent text-accent-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Habilidades Sociais */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground text-center">
              Habilidades Sociais
            </h3>
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Habilidades desenvolvidas através de experiências com grupos e pessoas em projetos acadêmicos, empresa júnior e trabalhos em equipe.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {softSkills.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Users className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
