import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Linguagens de Programação",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "R"],
  },
  {
    title: "Ciência de Dados",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    title: "Machine Learning",
    skills: ["scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost"],
  },
  {
    title: "Visão Computacional",
    skills: ["OpenCV", "PIL", "YOLO", "CNNs", "Image Processing"],
  },
  {
    title: "Desenvolvimento Web",
    skills: ["React", "Django", "Flask", "Node.js", "HTML/CSS"],
  },
  {
    title: "Ferramentas & DevOps",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Habilidades Técnicas
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 bg-accent text-accent-foreground rounded-md"
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
    </section>
  );
};

export default SkillsSection;
