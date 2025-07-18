import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bhakti Point",
      description: "A Flutter application for streaming spiritual music and kathas. Fully dynamic content management using Firebase and AWS S3 for storage.",
      tech: ["Flutter", "Firebase", "AWS S3"],
      highlight: "Dynamic content management"
    },
    {
      title: "KKN Live",
      description: "Real-time news app with category-based filtering, search functionality, push notifications, and intuitive user interface.",
      tech: ["Java", "FMS", "XML"],
      highlight: "Real-time news delivery"
    },
    {
      title: "CloudTrack",
      description: "Weather tracking app using live location and OpenWeather API. Dynamic UI that adapts to weather conditions.",
      tech: ["Kotlin", "Retrofit", "OpenWeather API"],
      highlight: "Dynamic weather-based UI"
    },
    {
      title: "Contact App",
      description: "Modern contact management app built with Jetpack Compose, featuring Room database and clean architecture.",
      tech: ["Jetpack Compose", "Kotlin", "Room", "Dagger-Hilt", "MVVM"],
      highlight: "Modern Android architecture"
    },
    {
      title: "HealthSync",
      description: "Health and medicine tracker with AI-powered chatbot using OpenAI API for personalized health advice and medication reminders.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Dagger Hilt", "OpenAI API"],
      highlight: "AI-powered health assistant"
    },
    {
      title: "SoulScribe",
      description: "Personal journaling app with privacy-first features including app lock. Secure and organized note-keeping application.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Dagger Hilt"],
      highlight: "Privacy-focused design"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcase of mobile applications I've developed
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-glow hover-lift transition-smooth cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex gap-2 opacity-70">
                    <ExternalLink className="h-4 w-4" />
                    <Github className="h-4 w-4" />
                  </div>
                </div>
                <CardDescription className="text-sm text-accent font-medium">
                  {project.highlight}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
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

export default Projects;