import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Machine Learning Specialization",
    institution: "Coursera - Stanford University",
  },
  {
    name: "Deep Learning Specialization",
    institution: "Coursera - DeepLearning.AI",
  },
  {
    name: "Python for Data Science",
    institution: "IBM - Cognitive Class",
  },
  {
    name: "TensorFlow Developer Certificate",
    institution: "Google",
  },
  {
    name: "SQL for Data Science",
    institution: "Coursera - UC Davis",
  },
  {
    name: "Git e GitHub",
    institution: "Digital Innovation One",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.institution}
                    </p>
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
