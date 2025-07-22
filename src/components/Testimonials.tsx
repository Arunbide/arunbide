import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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
    <section id="testimonials" className="py-16 md:py-32 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-10 md:top-20 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-12 md:w-24 h-12 md:h-24 bg-accent/10 rounded-full blur-2xl animate-float-delayed" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 framer-text-gradient">
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            What my clients say about working with me
          </p>
        </div>
        
        {/* Slider Container */}
        <div className="relative w-full max-w-4xl mx-auto px-4">
          {/* Carousel */}
          <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                  <Card className="h-full bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-0 shadow-2xl mx-4">
                    <CardContent className="p-8 md:p-12">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl text-primary-foreground">"</span>
                        </div>
                      </div>
                      
                      {/* Review Text */}
                      <blockquote className="text-center mb-8">
                        <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium italic">
                          "{testimonial.review}"
                        </p>
                      </blockquote>
                      
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        <div className="flex items-center gap-1 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 px-4 py-2 rounded-full border border-amber-200/50 dark:border-amber-800/50">
                          {renderStars(testimonial.rating)}
                          <span className="text-sm font-bold ml-2 text-amber-700 dark:text-amber-300">{testimonial.rating}</span>
                        </div>
                      </div>
                      
                      {/* Author Info */}
                      <div className="text-center border-t border-border/50 pt-6">
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-muted to-muted/60 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-muted-foreground">
                              {testimonial.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold text-foreground text-lg">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-muted-foreground">
                                {testimonial.country}
                              </span>
                              {testimonial.role === "Repeat Client" && (
                                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                                  Repeat Client
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:left-4 lg:-left-16">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full border-2 hover:scale-110 transition-all duration-300 disabled:opacity-50 w-10 h-10 md:w-12 md:h-12 bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:right-4 lg:-right-16">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full border-2 hover:scale-110 transition-all duration-300 disabled:opacity-50 w-10 h-10 md:w-12 md:h-12 bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold framer-text-gradient mb-1 md:mb-2">5+</div>
            <div className="text-muted-foreground text-sm md:text-base">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold framer-text-gradient mb-1 md:mb-2">4.8</div>
            <div className="text-muted-foreground text-sm md:text-base">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold framer-text-gradient mb-1 md:mb-2">10+</div>
            <div className="text-muted-foreground text-sm md:text-base">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold framer-text-gradient mb-1 md:mb-2">100%</div>
            <div className="text-muted-foreground text-sm md:text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;