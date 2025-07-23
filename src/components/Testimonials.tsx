import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "sireeshaba",
      role: "Repeat Client",
      company: "United States",
      rating: 5,
      review: "Arun's contribution to our project was nothing short of exceptional. His coding skills were top-notch, delivering clean and well-documented code that significantly contributed to the success of the project."
    },
    {
      name: "atreyarao",
      role: "Client", 
      company: "India",
      rating: 5,
      review: "Arun has delivered exceptional work in app testing. His attention to detail, expertise, and professionalism truly stand out. I highly recommend him for any app testing projects."
    },
    {
      name: "activealex",
      role: "Client",
      company: "United Kingdom",
      rating: 5,
      review: "Pleasure to work with. Very professional, helpful and patient!"
    },
    {
      name: "kknlive",
      role: "Client",
      company: "India",
      rating: 5,
      review: "Arun did an exceptional job updating my app. Their attention to detail is remarkable, ensuring everything was handled with precision. They are incredibly polite and professional."
    },
    {
      name: "sireeshaba",
      role: "Repeat Client",
      company: "United States",
      rating: 4.3,
      review: "Met expectation and responsive to queries"
    },
    {
      name: "techclient01",
      role: "Startup Founder",
      company: "Canada",
      rating: 4.9,
      review: "Great developer with excellent problem-solving skills. Delivered our mobile app on time with clean code and great performance."
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
            <div className="text-3xl font-bold framer-text-gradient mb-2">5+</div>
            <div className="text-muted-foreground text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">4.9</div>
            <div className="text-muted-foreground text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">10+</div>
            <div className="text-muted-foreground text-sm">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">100%</div>
            <div className="text-muted-foreground text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;