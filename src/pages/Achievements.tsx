import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap,
  IndianRupee,
  Factory,
  CheckCircle
} from "lucide-react";

const Achievements = () => {
  const majorAchievements = [
    {
      icon: Award,
      title: "Felicitation by Armoured Vehicle Nigam Ltd",
      year: "2022",
      category: "Excellence in Indigenization",
      description: "Recognized for outstanding contribution to the indigenization of critical defence components, particularly the Electric Motor ED76 for T-90 tanks.",
      impact: "Reduced foreign dependency for tank electrical systems",
      details: [
        "Successfully reverse-engineered ED76 motor",
        "Achieved 100% indigenous manufacturing",
        "Established reliable supply chain",
        "Contributed to national security objectives"
      ]
    },
    {
      icon: Target,
      title: "Import Substitution Excellence",
      year: "2020-2024",
      category: "Economic Impact",
      description: "Significant contribution to foreign exchange savings through indigenous manufacturing of previously imported defence components.",
      impact: "₹50+ Crores saved in foreign exchange",
      details: [
        "Substituted 200+ imported components",
        "Established indigenous supply chain",
        "Reduced lead times by 60%",
        "Enhanced supply security"
      ]
    },
    {
      icon: Shield,
      title: "Defence Manufacturing Excellence",
      year: "1999-2024",
      category: "Continuous Service",
      description: "25 years of uninterrupted service to Indian Defence Forces with zero quality failures in critical applications.",
      impact: "100% reliability in mission-critical applications",
      details: [
        "Zero critical failure rate",
        "Continuous supply reliability",
        "Consistent quality standards",
        "Trusted partner status"
      ]
    }
  ];

  const indigenizationProjects = [
    {
      component: "Electric Motor ED76",
      application: "T-90 Tank Main Systems",
      status: "Successfully Indigenized",
      year: "2019-2022",
      savings: "₹15 Crores",
      description: "Complete reverse engineering and indigenous manufacturing of critical tank motor system"
    },
    {
      component: "Hydraulic Pump Assembly",
      application: "Armoured Vehicles",
      status: "Successfully Indigenized", 
      year: "2020-2023",
      savings: "₹12 Crores",
      description: "High-pressure hydraulic pumps for defence vehicle systems"
    },
    {
      component: "Ventilation Fan Systems",
      application: "Naval Vessels",
      status: "Successfully Indigenized",
      year: "2018-2021",
      savings: "₹8 Crores",
      description: "Marine-grade ventilation systems for ship applications"
    },
    {
      component: "Electromagnetic Relay Systems",
      application: "Aircraft Ground Support",
      status: "Successfully Indigenized",
      year: "2021-2024",
      savings: "₹10 Crores",
      description: "Precision relay systems for critical aircraft support equipment"
    }
  ];

  const milestones = [
    {
      year: "1999",
      title: "Company Establishment",
      description: "Founded with vision to serve Indian Defence Forces"
    },
    {
      year: "2005",
      title: "ISO 9001:2015 Certification",
      description: "Achieved international quality management standards"
    },
    {
      year: "2010",
      title: "DGQA Approval",
      description: "Received Directorate General Quality Assurance approval"
    },
    {
      year: "2015",
      title: "Major Contract Milestone",
      description: "Secured first major tank component manufacturing contract"
    },
    {
      year: "2019",
      title: "ED76 Motor Project Initiation",
      description: "Started reverse engineering of critical tank motor"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Felicitated by Armoured Vehicle Nigam Ltd"
    },
    {
      year: "2024",
      title: "Expanded Capabilities",
      description: "Added advanced testing and validation facilities"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Achievements & Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Celebrating 25 years of excellence in defence manufacturing, indigenization 
            success stories, and significant contributions to India's self-reliance in defence.
          </p>
        </div>

        {/* Major Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Major Achievements</h2>
          <div className="space-y-8">
            {majorAchievements.map((achievement, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-defence transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="text-center lg:text-left">
                      <div className="w-20 h-20 mx-auto lg:mx-0 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                        <achievement.icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {achievement.year}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {achievement.category}
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="bg-surface p-4 rounded-lg mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-5 w-5 text-success" />
                          <span className="font-semibold text-foreground">Impact:</span>
                        </div>
                        <p className="text-primary font-semibold">{achievement.impact}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {achievement.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Indigenization Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Indigenization Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {indigenizationProjects.map((project, index) => (
              <Card key={index} className="shadow-metallic hover:shadow-defence transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-success border-success">
                      {project.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-primary font-semibold">
                      <IndianRupee className="h-4 w-4" />
                      <span className="text-sm">{project.savings} Saved</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{project.component}</CardTitle>
                  <p className="text-sm text-muted-foreground">{project.application}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Project Duration:</span>
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Journey of Excellence</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="shadow-metallic hover:shadow-defence transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="secondary" className="font-semibold">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div className="flex-1 md:block hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-20">
          <div className="bg-gradient-primary rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12">Overall Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <IndianRupee className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">₹50+ Cr</div>
                <div className="text-primary-foreground/90">Foreign Exchange Saved</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">200+</div>
                <div className="text-primary-foreground/90">Components Indigenized</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">100%</div>
                <div className="text-primary-foreground/90">Mission Success Rate</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">25+</div>
                <div className="text-primary-foreground/90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-surface rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Achieve More Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in our mission to strengthen India's defence capabilities through 
              indigenous manufacturing and technological excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Partner With Us
                </Link>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link to="/products">
                  Explore Our Solutions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Achievements;