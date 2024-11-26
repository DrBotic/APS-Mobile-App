// Industrial Generator's info

export interface IndustrialGenerator {
    id: string;
    name: string;
    description: string;
    imagelink: any; // Adjust the type based on how you're importing images, can use `ImageSourcePropType` if applicable
    type: string;
    index: number;
  }
  
  export const IndustrialGeneratorData: IndustrialGenerator[] = [
    {
      id: 'C1',
      name: 'CUSTOM INDUSTRIAL GENERATOR',
      description: `
        If Standard Gensets Won’t Meet Your Needs, Anderson Power Offers Configured Generac Products. As if it weren’t enough to have the best whole home generators, commercial generators, and industrial generators on the worldwide market, Generac now offers custom configured industrial gensets through experienced generator experts like Anderson Power Services.
  
        As a preferred distributor and installer of all industrial generator products offered by Generac, the professionals from Anderson Power Services have what it takes to get your unique power needs met perfectly. We can have your custom industrial generator created to meet individual electrical needs, fuel needs, or local ordinance compliance situations, and even unique setup or locational needs.
  
        The flexibility and experience of Anderson Power’s seasoned technicians, combined with the unheralded prowess of the industrial generator products built by Generac, will surely change your view of what’s possible with a custom power supply.
  
        Custom Tailored Systems that Grow and Adapt to Meet Your Ever-Changing Power Supply Needs. The Generac Protector series of gaseous commercial grade generators have truly become the industry standard for industrial power solutions around the planet. No other backup power supply products offer the same smooth, seamless power that Generac Generators offers.
  
        For many business owners, general contractors, medical facility operators, or others who need independent supplies of power, it’s hard to imagine a world in which you’d need more than a generator with a 6.8L engine that supplies 150kW of strong, steady power. But that world is very real for many industrial business owners, contractors, medical facility operators, cell tower operators, data center managers, municipal utility operators, and other similar personnel.
  
        This is the part of the story where Generac’s ability to produce custom industrial generators that are truly “off the grid” comes in handy. Whether you’re looking for modular power systems that can adapt to your present and future needs, or you just need a powerhouse generator that’s custom-built and configured to meet your substantial power needs, Anderson Power can have it built, delivered, and installed when and where you need it.
  
        Explore More Possibilities About Your Custom Industrial Generator with Anderson Power Services. Generac offers a wide range of industrial-sized generators for every possible permanent or temporary scenario imaginable in your world. Whether you need industrial power applications to keep patients alive, keep cell towers active, keep mountains of data secured, keep municipal systems operating, or for any other reason, Anderson Power Services can make it happen for you.
  
        Need a generator with a huge alternator? We’ve got you covered. Need sound-dampening enclosures? We can make that happen. Need natural gas, diesel, Bi-Fuel, or EPA compliant generators? No problem! Let’s talk!
  
        Whether you know you need 1000kW right out of the gate, or the power of a 49L engine, or you know your needs will grow over the years, Anderson Power Services and Generac Generators have the Custom Industrial Generator solutions you need. Contact for a custom quote, or a FREE consultation of your industrial power needs.
      `,
      imagelink: require('../assets/images/industrial-generator.png'),
      specifications: [],
      type: 'Industrial',
      index: 0,
    },
  ];
  
  export default IndustrialGeneratorData;
  