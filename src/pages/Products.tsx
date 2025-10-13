import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// --- Step 1: Import all your product images ---

// Electric Motors
import mbn3a from '../assets/ELECTRIC MOTORS OF RUSSIAN ORIGIN/MBN-3A.png';
import mbii2 from '../assets/ELECTRIC MOTORS OF RUSSIAN ORIGIN/MBII2.png';
import my431 from '../assets/ELECTRIC MOTORS OF RUSSIAN ORIGIN/MOTOR MY431.png';
import motor2d7 from '../assets/ELECTRIC MOTORS OF RUSSIAN ORIGIN/MOTOR 2D7.jpg';

// Electromagnets/Relays
import ek48 from '../assets/electromagnets/EK 48.png';
import ek74 from '../assets/electromagnets/EK 74.png';
import em46 from '../assets/electromagnets/EM 46.png';
import em74 from '../assets/electromagnets/EM 74.png';
import els3 from '../assets/electromagnets/TRACTION REALY ELS3.png';
import pm61c from '../assets/electromagnets/Traction Realy PM6-1C.png';

// Fans and Blowers
import pipeBending from '../assets/FAND AND BLOWERS/PIP BENDING.jpg';
import fansWithBracket from '../assets/FAND AND BLOWERS/FANS WITH BRACKET.png';
import blowerLeftRight from '../assets/FAND AND BLOWERS/Blower left and right.png';

// Gasoline & Centrifugal Pumps
import bilgePump1 from '../assets/GASOLINE & CENTRIFUGAL PUMPS OF RUSSIAN ORIGIN/BILGE PUMP.png';
import oilPump from '../assets/GASOLINE & CENTRIFUGAL PUMPS OF RUSSIAN ORIGIN/OIL PUMP.png';
import bilgePump2 from '../assets/GASOLINE & CENTRIFUGAL PUMPS OF RUSSIAN ORIGIN/BILGE PUMP 2.png';
import portableFillingUnit from '../assets/GASOLINE & CENTRIFUGAL PUMPS OF RUSSIAN ORIGIN/PORTABLE FILLLING UNIT MZA-3.png';
import gasolinePump from '../assets/GASOLINE & CENTRIFUGAL PUMPS OF RUSSIAN ORIGIN/GASOLINE CENTRIFUGAL PUMP.png';

// Limit Switches
import limitSwitchRotary from '../assets/limit_switches/limit switch 765-96-CD163.png';
import limitSwitchPush1 from '../assets/limit_switches/limit switch push type 1.png';
import limitSwitchPush2 from '../assets/limit_switches/limit switch push type 2.png';

// Sensor/Switch Assemblies
import leverSwitch from '../assets/SENSORSWITCH ASSEMBLIES OF RUSSIAN ORIGIN/LEVER WITH SWITCH.png';
import gangAssembly from '../assets/SENSORSWITCH ASSEMBLIES OF RUSSIAN ORIGIN/GANG ASSEMBLY.png';
import wireWithSocket from '../assets/SENSORSWITCH ASSEMBLIES OF RUSSIAN ORIGIN/ELECTRICAL WIRE WITH SOCKET.png';
import slipRing from '../assets/SENSORSWITCH ASSEMBLIES OF RUSSIAN ORIGIN/SLIP RING WITH HOUSING.png';
import contactSlider from '../assets/SENSORSWITCH ASSEMBLIES OF RUSSIAN ORIGIN/CONTACT SLIDER.png';
import sendingUnit from '../assets/SENSORSWITCH ASSEMBLIES OF RUSSIAN ORIGIN/SENDING UNIT D-20.png';
import engineShutdown from '../assets/SENSORSWITCH ASSEMBLIES OF RUSSIAN ORIGIN/ENGINE SHUTDOWN MECH.png';


const Products = () => {
  // --- Step 2: Use the imported variables in your array ---
  const products = [
    { id: 2, name: "ELECTRIC MOTOR MBN-3A", partNumber: "MBN-3A", category: "Electric Motors", imageSrc: mbn3a },
    { id: 3, name: "ELECTRIC MOTOR MBII-2", partNumber: "MBII-2", category: "Electric Motors", imageSrc: mbii2 },
    { id: 4, name: "ELECTRIC MOTOR MY-431", partNumber: "MY-431", category: "Electric Motors", imageSrc: my431 },
    { id: 5, name: "ELECTRIC MOTOR 2D7", partNumber: "2D7", category: "Electric Motors", imageSrc: motor2d7 },
    { id: 6, name: "ELECTROMAGNET EK-48", partNumber: "EK-48", category: "Electromagnets/Relays", imageSrc: ek48 },
    { id: 7, name: "ELECTROMAGNET EK-74", partNumber: "EK-74", category: "Electromagnets/Relays", imageSrc: ek74 },
    { id: 8, name: "ELECTROMAGNET EM-46", partNumber: "EM-46", category: "Electromagnets/Relays", imageSrc: em46 },
    { id: 9, name: "ELECTROMAGNET EM-74", partNumber: "EM-74", category: "Electromagnets/Relays", imageSrc: em74 },
    { id: 10, name: "TRACTION REALY ELS3", partNumber: "ELS3", category: "Electromagnets/Relays", imageSrc: els3 },
    { id: 11, name: "Traction Realy PM6-1C", partNumber: "PM6-1C", category: "Electromagnets/Relays", imageSrc: pm61c },
    { id: 12, name: "PIPE BENDING AND ALUMINIUM FABRICATION", partNumber: "", category: "Fans and Blowers", imageSrc: pipeBending },
    { id: 13, name: "FANS WITH BRACKET", partNumber: "", category: "Fans and Blowers", imageSrc: fansWithBracket },
    { id: 14, name: "BLOWER LEFT AND RIGHT", partNumber: "765-71-SB545 & 765-71-SB546", category: "Fans and Blowers", imageSrc: blowerLeftRight },
    { id: 15, name: "BILGE PUMP", partNumber: "675-38-CII3", category: "Gasoline & Centrifugal Pumps", imageSrc: bilgePump1 },
    { id: 16, name: "OIL PRIMING PUMP", partNumber: "M3H-2C", category: "Gasoline & Centrifugal Pumps", imageSrc: oilPump },
    { id: 17, name: "BILGE PUMP FOR T72", partNumber: "AS PER DRG. NO. 54.83.78-cb A", category: "Gasoline & Centrifugal Pumps", imageSrc: bilgePump2 },
    { id: 18, name: "PORTABLE FILLING UNIT", partNumber: "MZA-3", category: "Gasoline & Centrifugal Pumps", imageSrc: portableFillingUnit },
    { id: 19, name: "GASOLINE CENTRIFUGAL PUMP", partNumber: "765-05-CD121", category: "Gasoline & Centrifugal Pumps", imageSrc: gasolinePump },
    { id: 20, name: "LIMIT SWITCH (ROTARY TYPE)", partNumber: "765-96-CD163", category: "Limit Switches", imageSrc: limitSwitchRotary },
    { id: 21, name: "LIMIT SWITCH PUSH", partNumber: "TYPE1", category: "Limit Switches", imageSrc: limitSwitchPush1 },
    { id: 22, name: "LIMIT SWITCH PUSH", partNumber: "TYPE1", category: "Limit Switches", imageSrc: limitSwitchPush2 },
    { id: 23, name: "LEVER WITH SWITCH ASSEMBLY", partNumber: "172-70-003 Cб -4 Cб", category: "Sensor/Switch Assemblies", imageSrc: leverSwitch },
    { id: 24, name: "GANG SWITCH ASSEMBLY", partNumber: "2A46- Cб 21-5", category: "Sensor/Switch Assemblies", imageSrc: gangAssembly },
    { id: 25, name: "ELECTRICAL WIRE WITH SOCKET", partNumber: "TG-0765-55-SUB-116-02", category: "Sensor/Switch Assemblies", imageSrc: wireWithSocket },
    { id: 26, name: "SLIP RING WITH HOUSING", partNumber: "2A46.- Cб 21-27 Cб(TS 27)", category: "Sensor/Switch Assemblies", imageSrc: slipRing },
    { id: 27, name: "CONTACT SLIDER", partNumber: "2A46.- Cб 21-27 Cб", category: "Sensor/Switch Assemblies", imageSrc: contactSlider },
    { id: 28, name: "SENDING UNIT", partNumber: "D-20**", category: "Sensor/Switch Assemblies", imageSrc: sendingUnit },
    { id: 29, name: "ENGINE SHUTDOWN MECHNISM", partNumber: "", category: "Sensor/Switch Assemblies", imageSrc: engineShutdown },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(products.map(product => product.category)))];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Products
          </h1>
          
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