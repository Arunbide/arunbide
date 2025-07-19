import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "sireeshaba",
      role: "Repeat Client",
      country: "United States",
      rating: 5,
      review: "Arun's contribution to our project was nothing short of exceptional. His coding skills were top-notch, delivering clean and well-documented code that significantly contributed to the success of the project. Arun's transparency and collaborative approach were commendable, as he actively participated in discussions, shared valuable insights, and worked seamlessly with the rest of the team. He proved to be a great team player, always willing to lend a helping hand and support his colleagues whenever needed. Overall, Arun's performance was exemplary, and I highly recommend him for any future projects."
    },
    {
      name: "atreyarao",
      role: "Client",
      country: "India",
      rating: 5,
      review: "Arun has delivered exceptional work in app testing. His attention to detail, expertise, and professionalism truly stand out. I highly recommend him for any app testing projects and look forward to collaborating with him again in the future. Good Work Arun!"
    },
    {
      name: "activealex",
      role: "Client",
      country: "United Kingdom",
      rating: 5,
      review: "Pleasure to work with. Very professional, helpful and patient!"
    },
    {
      name: "kknlive",
      role: "Client",
      country: "India",
      rating: 5,
      review: "Arun did an exceptional job updating my app. Their attention to detail is remarkable, ensuring everything was handled with precision. They are incredibly polite and professional, making the process smooth and stress-free. The work exceeded my expectations, and I'm thoroughly satisfied with the outcome. Highly recommend their services to anyone looking for quality and reliability."
    },
    {
      name: "sireeshaba",
      role: "Repeat Client",
      country: "United States",
      rating: 4.3,
      review: "Met expectation and responsive to queries"
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-muted-foreground" />
          <Star 
            className="h-4 w-4 fill-amber-400 text-amber-400 absolute top-0 left-0" 
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        </div>
      );
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-32 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 framer-text-gradient">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="framer-card transition-spring hover:scale-105 h-full flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">{testimonial.country}</span>
                      {testimonial.role === "Repeat Client" && (
                        <Badge variant="secondary" className="text-xs">
                          Repeat Client
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm font-medium ml-1">{testimonial.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">5+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">4.8</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">10+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold framer-text-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;