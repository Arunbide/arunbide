import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow",
      rating: 5,
      review: "Exceptional work quality and attention to detail. Delivered beyond expectations with clean, maintainable code."
    },
    {
      name: "Michael Rodriguez",
      role: "Startup Founder", 
      company: "InnovateHub",
      rating: 5,
      review: "Professional, reliable, and incredibly skilled. Made our complex project look effortless."
    },
    {
      name: "Emily Watson",
      role: "CTO",
      company: "DevCorp",
      rating: 5,
      review: "Outstanding developer with great communication. Would definitely work with again."
    },
    {
      name: "David Kim",
      role: "Designer",
      company: "CreativeStudio",
      rating: 4.8,
      review: "Brought our designs to life perfectly. Great collaboration and fast delivery."
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "GrowthLab",
      rating: 5,
      review: "Transformed our vision into reality. Excellent problem-solving skills and creativity."
    },
    {
      name: "James Wilson",
      role: "Entrepreneur",
      company: "StartupX",
      rating: 4.9,
      review: "Top-tier development skills. Professional, efficient, and delivers quality results."
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      );
    }

    if (hasPartialStar) {
      stars.push(
        <div key="partial" className="relative">
          <Star className="w-4 h-4 text-muted-foreground/30" />
          <Star 
            className="w-4 h-4 fill-amber-400 text-amber-400 absolute inset-0" 
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        </div>
      );
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 framer-text-gradient">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/60" />
                </div>
                
                {/* Review Text */}
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  "{testimonial.review}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="text-sm font-medium ml-2 text-muted-foreground">
                    {testimonial.rating}
                  </span>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border border-border/30">
                    <span className="text-sm font-semibold text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">50+</div>
            <div className="text-muted-foreground text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">4.9</div>
            <div className="text-muted-foreground text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">100+</div>
            <div className="text-muted-foreground text-sm">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">99%</div>
            <div className="text-muted-foreground text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;