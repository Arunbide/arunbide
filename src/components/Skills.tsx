import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Users, Brain, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Android SDK", "Android Studio", "Kotlin", "Java", "Flutter"]
    },
    {
      title: "Development Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["Jetpack Compose", "RESTful APIs", "Coroutines", "Dependency Injection", "Git & GitHub"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Firebase", "Room Database", "Cloud Storage", "Analytics", "AWS S3"]
    },
    {
      title: "Architecture",
      icon: <Zap className="h-6 w-6" />,
      skills: ["MVVM", "Clean Architecture", "Dagger-Hilt", "Retrofit", "OpenAI API"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Teamwork", "Communication", "Problem-Solving", "Leadership", "Adaptability"]
    },
    {
      title: "Additional",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Flask", "Linux", "Work under pressure", "Google Play Console", "App Publishing"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Technical skills and soft skills I've developed
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow hover-lift transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
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

export default Skills;