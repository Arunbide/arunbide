import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Building className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            
            <Card className="card-glow hover-lift transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Freelance Android Developer</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      Bank UP (USA-based Startup)
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    2023 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Developed bank locator app with bonus offers and referral system
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Resolved technical issues and enhanced application performance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Managed Google Play Console and app compliance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Collaborated with development team on feature planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-glow hover-lift transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Freelance Developer</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      Fiverr Platform
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    2022 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Created and deployed multiple Android applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Utilized Firebase for authentication, database, and storage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Managed client console accounts and app publishing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Ensured platform compliance and successful deliveries
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <Card className="card-glow hover-lift transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Bachelor in Computer Science</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      Dr. Babasaheb Ambedkar Marathwada University
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    2022 - 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>Maharashtra, India</span>
                </div>
                <p className="text-muted-foreground">
                  Currently pursuing Bachelor's degree in Computer Science with focus on 
                  software development, data structures, algorithms, and mobile application development.
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="card-glow hover-lift transition-smooth">
              <CardHeader>
                <CardTitle className="text-xl">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Marathi</span>
                    <Badge variant="secondary">Native</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Hindi</span>
                    <Badge variant="secondary">Fluent</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">English</span>
                    <Badge variant="secondary">Intermediate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;