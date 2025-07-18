import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 gradient-hero">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Arun Bide
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8">
            Native Android Developer
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Jalna, Maharashtra
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              9322832034
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              agbide7@gmail.com
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Dedicated and detail-oriented Native Android Developer with over 1 year of experience 
            in crafting mobile applications. Passionate about creating user-friendly software solutions 
            with clean code and modern architecture.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Badge variant="secondary" className="px-4 py-2">Android SDK</Badge>
            <Badge variant="secondary" className="px-4 py-2">Kotlin</Badge>
            <Badge variant="secondary" className="px-4 py-2">Java</Badge>
            <Badge variant="secondary" className="px-4 py-2">Flutter</Badge>
            <Badge variant="secondary" className="px-4 py-2">Firebase</Badge>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
              <ExternalLink className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <ExternalLink className="h-4 w-4 mr-2" />
              Fiverr Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;