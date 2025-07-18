import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-32 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 framer-floating">
            <div className="text-sm text-primary font-semibold mb-4 framer-badge inline-block">
              ✨ Available for New Projects
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 framer-text-gradient">
              Arun Bide
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
              Native Android Developer
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2 framer-badge">
              <MapPin className="h-4 w-4" />
              Jalna, Maharashtra
            </div>
            <div className="flex items-center gap-2 framer-badge">
              <Phone className="h-4 w-4" />
              9322832034
            </div>
            <div className="flex items-center gap-2 framer-badge">
              <Mail className="h-4 w-4" />
              agbide7@gmail.com
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Crafting innovative mobile applications with <span className="text-primary font-semibold">1+ years</span> of experience. 
            Passionate about clean code, modern architecture, and creating user-friendly solutions 
            that make a difference.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Badge variant="secondary" className="framer-badge px-6 py-3 text-sm">
              <span className="text-primary mr-2">🤖</span>Android SDK
            </Badge>
            <Badge variant="secondary" className="framer-badge px-6 py-3 text-sm">
              <span className="text-primary mr-2">🎯</span>Kotlin
            </Badge>
            <Badge variant="secondary" className="framer-badge px-6 py-3 text-sm">
              <span className="text-primary mr-2">☕</span>Java
            </Badge>
            <Badge variant="secondary" className="framer-badge px-6 py-3 text-sm">
              <span className="text-primary mr-2">🚀</span>Flutter
            </Badge>
            <Badge variant="secondary" className="framer-badge px-6 py-3 text-sm">
              <span className="text-primary mr-2">🔥</span>Firebase
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="framer-button h-14 px-8 text-lg font-semibold"
              onClick={() => window.open('https://linkedin.com/in/arunbide', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              LinkedIn Profile
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold rounded-2xl border-2 border-primary/30 hover:border-primary/60 transition-spring"
              onClick={() => window.open('https://fiverr.com/arunbide', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              Fiverr Profile
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;