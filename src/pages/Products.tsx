import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Droplets, 
  Wind, 
  Magnet, 
  ToggleLeft, 
  Cpu, 
  Wrench, 
  FlaskConical,
  ArrowRight 
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: Zap,
      title: "Electric Motors",
      description: "High-performance electric motors for defence vehicles including the indigenized ED76 motor for T-90 tanks",
      features: ["AC/DC Motors", "Servo Motors", "Stepper Motors", "Custom Specifications"],
      applications: ["Tank Systems", "Naval Vessels", "Aircraft Ground Support"]
    },
    {
      icon: Droplets,
      title: "Pumps & Systems",
      description: "Gasoline and centrifugal pumps designed for military specifications and harsh environments",
      features: ["Gasoline Pumps", "Centrifugal Pumps", "Hydraulic Systems", "Fuel Transfer Systems"],
      applications: ["Fuel Systems", "Cooling Systems", "Hydraulic Power Units"]
    },
    {
      icon: Wind,
      title: "Fans & Blowers",
      description: "Ventilation and cooling systems for defence vehicles and installations",
      features: ["Axial Fans", "Centrifugal Blowers", "Cooling Systems", "Ventilation Units"],
      applications: ["Vehicle Cooling", "Equipment Ventilation", "Environmental Control"]
    },
    {
      icon: Magnet,
      title: "Electromagnets & Relays",
      description: "Precision electromagnetic components for control and switching applications",
      features: ["Control Relays", "Power Relays", "Solenoids", "Electromagnetic Switches"],
      applications: ["Control Systems", "Safety Circuits", "Switching Operations"]
    },
    {
      icon: ToggleLeft,
      title: "Limit Switches",
      description: "Precision limit switches and position sensors for critical defence applications",
      features: ["Mechanical Switches", "Position Sensors", "Safety Switches", "Proximity Sensors"],
      applications: ["Position Control", "Safety Systems", "Automation"]
    },
    {
      icon: Cpu,
      title: "Sensor Assemblies",
      description: "Advanced sensor and switch assemblies for monitoring and control systems",
      features: ["Temperature Sensors", "Pressure Sensors", "Level Sensors", "Custom Assemblies"],
      applications: ["Monitoring Systems", "Process Control", "Safety Monitoring"]
    }
  ];

  const specialServices = [
    {
      icon: Wrench,
      title: "Reverse Engineering",
      description: "Complete reverse engineering solutions for obsolete or unavailable components",
      capabilities: ["Component Analysis", "Design Recreation", "Material Specification", "Testing & Validation"]
    },
    {
      icon: FlaskConical,
      title: "Test Jigs & Fixtures",
      description: "Custom test jigs and quality control fixtures for manufacturing processes",
      capabilities: ["Custom Design", "Precision Manufacturing", "Calibration Services", "Documentation"]
    },
    {
      icon: Zap,
      title: "Alloy Welding",
      description: "Specialized welding services for defence-grade materials and components",
      capabilities: ["TIG Welding", "MIG Welding", "Aluminum Welding", "Stainless Steel"]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Products & Competence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of electrical and electromechanical components designed 
            for the demanding requirements of Indian Defence Forces.
          </p>
        </div>

        {/* Product Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Core Product Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <Card key={index} className="shadow-metallic hover:shadow-defence transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ArrowRight className="h-3 w-3 text-primary" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Specialized Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <Card key={index} className="shadow-metallic hover:shadow-elevation transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-center">Capabilities:</h4>
                    <div className="space-y-2">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Electrical Spares */}
        <section className="mb-20">
          <div className="bg-surface rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Electrical Spares & Components</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Complete range of electrical spare parts and components for maintenance 
                  and repair of defence equipment. Our inventory includes both standard 
                  and custom-manufactured parts designed to exact specifications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Spare Parts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24hrs</div>
                    <div className="text-sm text-muted-foreground">Quick Response</div>
                  </div>
                </div>
              </div>
              <Card className="shadow-defence">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Available Categories</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span>Contactors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span>Circuit Breakers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span>Transformers</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span>Connectors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span>Cable Assemblies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span>Control Panels</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our engineering team specializes in developing custom solutions for unique 
              defence requirements. From concept to delivery, we ensure complete satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="metallic" size="lg" asChild>
                <Link to="/contact">
                  Request Custom Solution
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/quality">
                  Quality Standards
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;