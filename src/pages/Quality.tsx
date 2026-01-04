import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Shield, FileCheck, Users, Target } from "lucide-react";

const Quality = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management Systems certification ensuring consistent quality delivery",
      year: "2005",
      scope: "Design, Development & Manufacturing of Electrical & Electromechanical Components"
    },
    // {
    //   title: "DGQA Approval",
    //   description: "Directorate General of Quality Assurance approval for defence manufacturing",
    //   year: "2010",
    //   scope: "Manufacturing of Defence Grade Components & Systems"
    // },
    {
      title: "MOD Registration",
      description: "Registered with Indian Defence - Army, Navy and Air-Force",
      year: "1999",
      scope: "Defence Manufacturing & Supply Chain"
    }
  ];

  const qualityPillars = [
    {
      icon: Shield,
      title: "Quality Commitment",
      description: "Unwavering commitment to delivering products that meet or exceed customer expectations and military specifications"
    },
    {
      icon: Award,
      title: "Certified Suppliers",
      description: "NABL certified raw material suppliers ensuring consistent quality from source to finished product"
    },
    {
      icon: FileCheck,
      title: "Testing Excellence",
      description: "Comprehensive quality assurance ensuring compliance through in-house performance checks and NABL-approved laboratory testing for environmental and flame-proof standards"
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Highly trained technicians and engineers committed to maintaining the highest quality standards"
    },
    {
      icon: Target,
      title: "Continuous Improvement",
      description: "Regular process improvements and technology upgrades to enhance quality and efficiency"
    },
    {
      icon: CheckCircle,
      title: "International Standards",
      description: "Our products are engineered and tested to strictly comply with global military standards, including MIL-STD (USA) and GOST (Russian) specifications."
    }
  ];

  const testingCapabilities = [
    "Electrical Performance Testing",
    "Environmental Testing",
    "Flame Proof Testing",
    "Vibration & Shock Testing",
    "Temperature Cycling",
    "Salt Spray Testing",
    "Insulation Resistance Testing",
    "Functional Testing",
    "Life Cycle Testing",
    "Material Testing"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quality Policy & Ecosystem
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in our comprehensive quality management 
            system and continuous pursuit of perfection in defence manufacturing.
          </p>
        </div>

        {/* Quality Mission */}
        <section className="mb-20">
          <div className="bg-gradient-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">Our Quality Mission</h2>
            <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              "To consistently deliver world-class electrical and electromechanical components 
              that meet the exacting standards of the Indian Defence Forces, while maintaining 
              the highest levels of quality, reliability, and performance through continuous 
              improvement and innovation."
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Certifications & Approvals</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-defence hover:shadow-elevation transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    Since {cert.year}
                  </Badge>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {cert.description}
                  </p>
                  <div className="bg-surface p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Scope:</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.scope}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quality Pillars - Unified Grid for Better Alignment */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Quality Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityPillars.map((pillar, index) => (
              <Card key={index} className="shadow-metallic hover:shadow-defence transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testing Capabilities - Updated for Outsourced Context */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Testing & Validation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To ensure impartial and rigorous quality control, all our products undergo 
                comprehensive validation through independent NABL-accredited laboratories. 
                This external testing ecosystem ensures every component strictly meets 
                stringent military and international specifications for performance and reliability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance Track</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">NABL</div>
                  <div className="text-sm text-muted-foreground">External Validation</div>
                </div>
              </div>
            </div>
            <Card className="shadow-elevation">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-primary" />
                  All Products Manufactured Comply with the Following Tests:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {testingCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-center gap-3 py-1">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-muted-foreground italic border-t pt-4">
                  * All specialized tests are conducted at authorized NABL-certified third-party facilities to ensure unbiased results.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Ecosystem */}
        <section className="mb-20">
          <div className="bg-surface rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Quality Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Supplier Quality</h3>
                <p className="text-muted-foreground">
                  NABL certified raw material suppliers ensure quality from the source. 
                  Regular audits and quality assessments maintain supplier standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Target className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Process Control</h3>
                <p className="text-muted-foreground">
                  Stringent process controls at every manufacturing stage ensure 
                  consistent quality output and minimize variations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Regular customer feedback and satisfaction surveys drive 
                  continuous improvement in products and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section>
          <Card className="shadow-defence">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Standards Compliance</CardTitle>
              <p className="text-muted-foreground">
                Adhering to national and international quality standards
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">ISO 9001:2015</div>
                  <div className="text-sm text-muted-foreground">Quality Management</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">MIL-STD</div>
                  <div className="text-sm text-muted-foreground">Military Standards</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">GOST Standards</div>
                  <div className="text-sm text-muted-foreground">Russian Standards</div>
                </div>
                <div className="space-y-2">
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Quality;