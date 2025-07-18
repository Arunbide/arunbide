import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bhakti Point",
      description: "A Flutter application for streaming spiritual music and kathas. Fully dynamic content management using Firebase and AWS S3 for storage.",
      tech: ["Flutter", "Firebase", "AWS S3"],
      highlight: "Dynamic content management",
      icon: "🎵"
    },
    {
      title: "KKN Live",
      description: "Real-time news app with category-based filtering, search functionality, push notifications, and intuitive user interface.",
      tech: ["Java", "FMS", "XML"],
      highlight: "Real-time news delivery",
      icon: "📰"
    },
    {
      title: "CloudTrack",
      description: "Weather tracking app using live location and OpenWeather API. Dynamic UI that adapts to weather conditions.",
      tech: ["Kotlin", "Retrofit", "OpenWeather API"],
      highlight: "Dynamic weather-based UI",
      icon: "🌤️"
    },
    {
      title: "Contact App",
      description: "Modern contact management app built with Jetpack Compose, featuring Room database and clean architecture.",
      tech: ["Jetpack Compose", "Kotlin", "Room", "Dagger-Hilt", "MVVM"],
      highlight: "Modern Android architecture",
      icon: "👥"
    },
    {
      title: "HealthSync",
      description: "Health and medicine tracker with AI-powered chatbot using OpenAI API for personalized health advice and medication reminders.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Dagger Hilt", "OpenAI API"],
      highlight: "AI-powered health assistant",
      icon: "🏥"
    },
    {
      title: "SoulScribe",
      description: "Personal journaling app with privacy-first features including app lock. Secure and organized note-keeping application.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Dagger Hilt"],
      highlight: "Privacy-focused design",
      icon: "📝"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold">Portfolio</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 framer-text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of innovative mobile applications I've developed with modern technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="framer-card transition-spring cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{project.icon}</div>
                  <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                    <Github className="h-4 w-4" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm text-primary font-medium framer-badge inline-block">
                  {project.highlight}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="framer-badge text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or discussing a collaboration?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://github.com/arunbide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="framer-button inline-flex items-center px-6 py-3 text-white font-semibold rounded-2xl transition-spring"
            >
              <Github className="h-4 w-4 mr-2" />
              View GitHub
            </a>
            <a 
              href="https://fiverr.com/arunbide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-primary font-semibold rounded-2xl border-2 border-primary/30 hover:border-primary/60 transition-spring"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Hire Me on Fiverr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;