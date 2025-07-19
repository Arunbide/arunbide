import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Users, Brain, Zap, Star } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Android SDK", "Android Studio", "Kotlin", "Java", "Flutter"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Development Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["Jetpack Compose", "RESTful APIs", "Coroutines", "Dependency Injection", "Git & GitHub"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Firebase", "Room Database", "Cloud Storage", "Analytics", "AWS S3"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Architecture",
      icon: <Zap className="h-6 w-6" />,
      skills: ["MVVM", "Clean Architecture", "Dagger-Hilt", "Retrofit", "OpenAI API"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Teamwork", "Communication", "Problem-Solving", "Leadership", "Adaptability"],
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Additional",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Flask", "Linux", "Work under pressure", "Google Play Console", "App Publishing"],
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold">Expertise</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 framer-text-gradient">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional mobile applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="framer-card transition-spring group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
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
                      className="framer-badge text-xs hover:scale-105 transition-transform cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="framer-blur-border inline-block p-8 rounded-2xl bg-background/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm passionate about creating innovative mobile solutions that make a difference. 
              Let's discuss how these skills can bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="framer-badge">
                Fast Development
              </div>
              <div className="framer-badge">
                Quality Code
              </div>
              <div className="framer-badge">
                Modern Tech
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;