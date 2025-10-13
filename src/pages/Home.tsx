import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Award, Users, ArrowRight, CheckCircle } from "lucide-react";
import heroDefenceBg from "@/assets/hero-defence-bg.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      description: "Certified quality management systems"
    },
    {
      icon: Award,
      title: "OEM to AVNL",
      description: "HVF AvadI, OFMK Medak, MTPF Ambarnath"
    },
    {
      icon: Users,
      title: "25+ Years Experience",
      description: "Serving Army, Navy, Air Force since 1998"
    }
  ];

  const services = [
    "Electric Motors & Components",
    "Pumps (Gasoline & Centrifugal)",
    "Fans & Blowers Systems",
    "Electromagnets & Relays",
    "Limit Switches & Sensors",
    "Reverse Engineering Solutions"
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDefenceBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Serving Indian
              <span className="block text-tricolor-saffron">Defence Forces</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
                for Over 25 Years
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Indigenous manufacturing of  Electrical , Electromechanical and Fabricated assemblies 
              for the Indian Armed Forces. ISO certified and trusted 
              by defence organizations nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">
                  Explore Our Expertise
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="metallic" size="lg" asChild>
                <Link to="/contact">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 shadow-metallic hover:shadow-defence transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Excellence in Defence Manufacturing
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a key contributor to India's defence self-reliance ('Atmanirbhar Bharat'), MG Technicals specializes in the indigenous development and manufacturing of 
                Russian-origin electrical, electromechanical, and fabricated assemblies. Our unwavering dedication to quality and innovation has made us a trusted 
                partner to the Indian Armed Forces, recognized for our excellence in producing a wide range of critical components including:
              </p>
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8 shadow-elevation">
                <CardContent className="p-0">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2022</div>
                    <p className="text-muted-foreground mb-4">
                      Felicitated by Armoured Vehicle Nigam Ltd for excellence in 
                      indigenization of critical defence components
                    </p>
                    <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-primary/10 rounded-full">Tank Components</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full">Electric Motors</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the ranks of satisfied defence organizations who trust MG Technicals 
            for their critical electrical and mechanical component needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="metallic" size="lg" asChild>
              <Link to="/contact">
                Request Quote
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/products">
                View Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;