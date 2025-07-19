import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar } from "lucide-react";

const Contact = () => {
  const handleScheduleCall = () => {
    window.open('https://cal.com/bidearun/', '_blank');
  };

  return (
    <section id="contact" className="py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 framer-text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next Android project and bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="framer-card transition-spring">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ready to discuss your project? Drop me an email and I'll get back to you within 24 hours.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full h-12 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-spring"
                  onClick={() => window.location.href = 'mailto:agbide7@gmail.com'}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  agbide7@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="framer-card transition-spring">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Available for calls during business hours (9 AM - 6 PM IST).
                </p>
                <Button 
                  variant="outline" 
                  className="w-full h-12 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-spring"
                  onClick={() => window.location.href = 'tel:+919322832034'}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91 9322832034
                </Button>
              </CardContent>
            </Card>

          </div>

          {/* Schedule Call Card */}
          <div className="lg:flex lg:items-center">
            <Card className="framer-card transition-spring h-full">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6 p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit">
                  <Calendar className="h-12 w-12 text-primary mx-auto" />
                </div>
                <CardTitle className="text-3xl mb-4 framer-text-gradient">
                  Schedule a Call
                </CardTitle>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ready to discuss your project? Let's schedule a call to talk about your requirements, 
                  timeline, and how I can help bring your Android app idea to life.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="framer-badge">
                      Android Apps
                    </div>
                    <div className="framer-badge">
                      Flutter Apps
                    </div>
                    <div className="framer-badge">
                      Firebase
                    </div>
                    <div className="framer-badge">
                      Kotlin/Java
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleScheduleCall}
                    className="framer-button w-full h-14 text-lg font-semibold text-white border-0"
                  >
                    <Calendar className="h-5 w-5 mr-3" />
                    Schedule Call Now
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    Free 15-minute consultation • Available Mon-Fri 9 AM - 6 PM IST
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;