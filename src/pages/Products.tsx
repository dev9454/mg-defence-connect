import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Products = () => {
  const products = [
    { id: 1, name: "AC Motor ED76", partNumber: "MG-ACM-ED76", category: "Electric Motors", imageSrc: "/placeholder.svg" },
    { id: 2, name: "DC Servo Motor", partNumber: "MG-DCM-SV200", category: "Electric Motors", imageSrc: "/placeholder.svg" },
    { id: 3, name: "Stepper Motor", partNumber: "MG-STM-HY456", category: "Electric Motors", imageSrc: "/placeholder.svg" },
    { id: 4, name: "Gasoline Pump GP-120", partNumber: "MG-GP-120A", category: "Pump", imageSrc: "/placeholder.svg" },
    { id: 5, name: "Centrifugal Pump", partNumber: "MG-CP-250B", category: "Pump", imageSrc: "/placeholder.svg" },
    { id: 6, name: "Hydraulic Pump", partNumber: "MG-HP-180C", category: "Pump", imageSrc: "/placeholder.svg" },
    { id: 7, name: "Axial Fan AF-300", partNumber: "MG-AF-300D", category: "Fans & Blowers", imageSrc: "/placeholder.svg" },
    { id: 8, name: "Centrifugal Blower", partNumber: "MG-CB-450E", category: "Fans & Blowers", imageSrc: "/placeholder.svg" },
    { id: 9, name: "Control Relay CR-24", partNumber: "MG-CR-24V", category: "Electro-Mechanical", imageSrc: "/placeholder.svg" },
    { id: 10, name: "Power Relay PR-48", partNumber: "MG-PR-48V", category: "Electro-Mechanical", imageSrc: "/placeholder.svg" },
    { id: 11, name: "Electromagnetic Switch", partNumber: "MG-EMS-12V", category: "Electro-Mechanical", imageSrc: "/placeholder.svg" },
    { id: 12, name: "Limit Switch LS-10", partNumber: "MG-LS-10A", category: "Switches", imageSrc: "/placeholder.svg" },
    { id: 13, name: "Position Sensor", partNumber: "MG-PS-200B", category: "Switches", imageSrc: "/placeholder.svg" },
    { id: 14, name: "Temperature Sensor", partNumber: "MG-TS-500C", category: "Sensors", imageSrc: "/placeholder.svg" },
    { id: 15, name: "Pressure Sensor", partNumber: "MG-PRS-300D", category: "Sensors", imageSrc: "/placeholder.svg" },
    { id: 16, name: "Level Sensor", partNumber: "MG-LVS-150E", category: "Sensors", imageSrc: "/placeholder.svg" }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(products.map(product => product.category)))];

  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Products
          </h1>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="shadow-metallic hover:shadow-defence transition-all duration-300 group">
              <div className="aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
                <img 
                  src={product.imageSrc} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Part No: {product.partNumber}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;