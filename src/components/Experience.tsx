import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, Calendar, MapPin, Award, Users } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold">Background</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 framer-text-gradient">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              Work Experience
            </h3>
            
            <Card className="framer-card transition-spring">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">Freelance Android Developer</CardTitle>
                    <CardDescription className="text-lg text-primary font-semibold">
                      Bank UP (USA-based Startup)
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="framer-badge">
                    Freelance
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Developed bank locator app with bonus offers and referral system, 
                      enhancing user engagement and promoting financial services
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Resolved technical issues and enhanced application performance through 
                      systematic debugging and optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Managed Google Play Console operations and ensured compliance with 
                      platform policies and guidelines
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Collaborated with development team on feature planning and 
                      learned industry best practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="framer-card transition-spring">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">Freelance Developer</CardTitle>
                    <CardDescription className="text-lg text-primary font-semibold">
                      Fiverr Platform
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="framer-badge">
                    Freelance
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Created and deployed multiple Android applications utilizing 
                      Firebase ecosystem and modern development practices
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Gained practical experience with Kotlin, Android Framework, 
                      and third-party library integration
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Managed complete project lifecycle from development to 
                      publishing and client satisfaction
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              Education
            </h3>
            
            <Card className="framer-card transition-spring">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">Bachelor in Computer Science</CardTitle>
                    <CardDescription className="text-lg text-primary font-semibold">
                      Dr. Babasaheb Ambedkar Marathwada University
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="framer-badge">
                    <Calendar className="h-3 w-3 mr-1" />
                    2022 - 2025 (Completed)
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>Maharashtra, India</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Completed comprehensive education in Computer Science with specialization in 
                  software development, data structures, algorithms, and modern mobile 
                  application development methodologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;