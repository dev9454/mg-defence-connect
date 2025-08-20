import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Users, Target } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "1999",
      title: "Company Founded",
      description: "MG Technicals established with a vision to serve Indian Defence Forces"
    },
    {
      year: "2005",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management systems"
    },
    {
      year: "2010",
      title: "DGQA Approval",
      description: "Received approval from Directorate General of Quality Assurance"
    },
    {
      year: "2022",
      title: "Recognition",
      description: "Felicitated by Armoured Vehicle Nigam Ltd for excellence in indigenization"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Uncompromising accuracy in manufacturing defence-grade components"
    },
    {
      icon: Award,
      title: "Quality",
      description: "ISO 9001:2015 certified processes ensuring highest standards"
    },
    {
      icon: Users,
      title: "Service",
      description: "Dedicated to supporting our defence forces with reliable solutions"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About MG Technicals
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A legacy of excellence in defence manufacturing, serving the Indian Armed Forces 
            with indigenous solutions for over two decades.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1999, MG Technicals emerged with a singular mission: to indigenize 
                  Russian electrical and electromechanical assemblies for the Indian Defence Forces. 
                  What started as a vision to reduce foreign dependency has evolved into a 
                  cornerstone of India's defence manufacturing ecosystem.
                </p>
                <p>
                  Over 25 years of dedicated service, we have consistently delivered high-quality 
                  components that meet the stringent requirements of the Indian Army, Navy, and 
                  Air Force. Our expertise spans across critical systems including electric motors, 
                  pumps, fans, electromagnets, and sophisticated sensor assemblies.
                </p>
                <p>
                  Today, we stand proud as an ISO 9001:2015 certified and DGQA approved manufacturer, 
                  contributing significantly to India's 'Atmanirbhar Bharat' initiative in defence 
                  manufacturing.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="shadow-defence">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">25+ Years</h3>
                      <p className="text-muted-foreground">of Excellence</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Continuously serving Indian Defence Forces since 1999
                  </p>
                </CardContent>
              </Card>
              <div className="grid grid-cols-2 gap-4">
                <Card className="shadow-metallic">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </CardContent>
                </Card>
                <Card className="shadow-metallic">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Indigenous</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative shadow-metallic hover:shadow-defence transition-all duration-300">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {milestone.year}
                  </Badge>
                  <CardTitle className="text-lg">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 shadow-metallic hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section>
          <div className="bg-surface rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Leadership & Vision</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Under visionary leadership, MG Technicals has transformed from a small manufacturing 
                unit to a recognized leader in defence component manufacturing. Our leadership team 
                brings decades of experience in engineering, quality management, and defence sector 
                operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Defence Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;