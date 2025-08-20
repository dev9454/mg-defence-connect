import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Anchor, Plane, Building, Award, Users } from "lucide-react";

const Clients = () => {
  const defenceServices = [
    {
      icon: Shield,
      name: "Indian Army",
      description: "Serving the backbone of India's land forces with specialized electrical components for tanks, vehicles, and equipment",
      projects: ["T-90 Tank Electric Motors", "Vehicle Electrical Systems", "Communication Equipment"],
      highlight: "Primary supplier for ED76 motor indigenization"
    },
    {
      icon: Anchor,
      name: "Indian Navy",
      description: "Supporting naval operations with marine-grade electrical and electromechanical systems",
      projects: ["Ship Electrical Systems", "Pump Systems", "Navigation Equipment"],
      highlight: "Specialized marine environment solutions"
    },
    {
      icon: Plane,
      name: "Indian Air Force",
      description: "Contributing to aerial supremacy with precision components for aircraft ground support and systems",
      projects: ["Ground Support Equipment", "Electrical Components", "Testing Equipment"],
      highlight: "Critical support for air operations"
    }
  ];

  const organizations = [
    {
      name: "Ordnance Factory Board",
      category: "Manufacturing Partner",
      description: "Long-standing partnership for indigenous component manufacturing"
    },
    {
      name: "DGQA (Directorate General of Quality Assurance)",
      category: "Quality Approval",
      description: "Approved supplier with stringent quality certifications"
    },
    {
      name: "Ministry of Defence (MOD)",
      category: "Registered Supplier",
      description: "Official registration for defence manufacturing and supply"
    },
    {
      name: "Armoured Vehicle Nigam Ltd",
      category: "Strategic Partner",
      description: "Recognized for excellence in tank component indigenization"
    },
    {
      name: "Bharat Electronics Limited (BEL)",
      category: "Technology Partner",
      description: "Collaboration for electronic systems and components"
    },
    {
      name: "Defence Research & Development Organisation (DRDO)",
      category: "Research Collaboration",
      description: "Supporting R&D initiatives for advanced defence technologies"
    }
  ];

  const achievements = [
    {
      year: "2022",
      achievement: "Felicitated by Armoured Vehicle Nigam Ltd",
      description: "Recognition for outstanding contribution to indigenization of critical defence components"
    },
    {
      year: "2020",
      achievement: "Export Excellence Award",
      description: "Acknowledged for contributing to foreign exchange savings through import substitution"
    },
    {
      year: "2018",
      achievement: "Quality Excellence Recognition",
      description: "Awarded for maintaining highest quality standards in defence manufacturing"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Clients & Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by India's premier defence organizations and serving the armed forces 
            with dedication, excellence, and unwavering commitment to national security.
          </p>
        </div>

        {/* Defence Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Serving Our Armed Forces</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {defenceServices.map((service, index) => (
              <Card key={index} className="shadow-defence hover:shadow-elevation transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {service.highlight}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-center">Key Projects:</h4>
                    <div className="space-y-2">
                      {service.projects.map((project, idx) => (
                        <div key={idx} className="bg-surface p-3 rounded-lg text-center">
                          <span className="text-sm text-foreground">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Partner Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org, index) => (
              <Card key={index} className="shadow-metallic hover:shadow-defence transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-6 w-6 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {org.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{org.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {org.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements & Recognition */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Recognition & Achievements</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-metallic hover:shadow-elevation transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 mx-auto lg:mx-0 bg-gradient-primary rounded-full flex items-center justify-center mb-3">
                        <Award className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {achievement.year}
                      </Badge>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {achievement.achievement}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-20">
          <div className="bg-gradient-primary rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary-foreground text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">25+</div>
                <div className="text-primary-foreground/90">Years of Service</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">3</div>
                <div className="text-primary-foreground/90">Defence Services</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
                <div className="text-primary-foreground/90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">100%</div>
                <div className="text-primary-foreground/90">Indigenous Manufacturing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section>
          <div className="bg-surface rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Client Testimonial</h2>
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "MG Technicals has been instrumental in our indigenization efforts. Their expertise 
                in reverse engineering and manufacturing of critical components has significantly 
                contributed to reducing our foreign dependency. The quality and reliability of 
                their products meet the exacting standards required for defence applications."
              </blockquote>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-foreground">Senior Engineering Officer</div>
                <div className="text-sm text-muted-foreground">Armoured Vehicle Nigam Limited</div>
                <Badge variant="outline" className="mt-2">Strategic Partner</Badge>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;