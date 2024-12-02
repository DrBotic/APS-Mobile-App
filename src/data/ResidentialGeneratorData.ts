export interface GeneratorSpecification {
    model: string;
    series: string;
    fuelType: string;
    AutomaticTSA_Rating?: string; // Made optional since not all generators have this
    Circuits?: string; // Made optional since not all generators have this
    engine_size?: string; // Made optional since not all generators have this
    minAmps_240V?: string; // Made optional since not all generators have this
    minPowerRating?: string; // Made optional since not all generators have this
    warrantyLength?: string; // Corrected typo from 'warrantyLenght'
    NG_BTUS?: string; // Made optional since not all generators have this
    LP_BTUS?: string; // Made optional since not all generators have this
    barcode?: string; // Added optional property for barcodes
    sku: string;
    weight: string;
}

export interface ResidentialGenerator {
    id: string;
    name: string;
    description: string;
    imagelink: any; // Adjust the type based on how you're importing images
    specifications: GeneratorSpecification[];
    type: string;
    index: number;
}

export const ResidentialGeneratorData: ResidentialGenerator[] = [
    {
        id: 'A1',
        name: '10kW Air-Cooled Standby Generator with WiFi',
        description: ``,
        imagelink: require('../assets/images/gen.png'),
        specifications: [
            {
                model: '7172-0',
                series: 'Guardian',
                fuelType: 'LPG-NG',
                NG_BTUS: '127,000',
                LP_BTUS: '135,000',
                sku: 'Guardian 7172-0',
                weight: '338lb'
            }
        ],
        type: 'Residential',
        index: 0,
    },
    {
        id: 'A2',
        name: 'Generac Guardian 14kW Home Backup Generator With Free Mobile Link',
        description: `
            Generac’s Guardian Series generators provide the automatic backup power you need to protect your home and family during a power outage. Connected to your existing LP or natural gas fuel supply, it kicks in within seconds of sensing power loss—automatically—and runs for as long as necessary until utility power returns. Now coming with FREE Mobile Link, allowing you to monitor the status of your generator on a phone, tablet or computer from anywhere in the world. Giving you the ability to connect your account to your authorized service dealer for fast, friendly and convenient assistance.
            
            Mobile Link™ Remote Monitoring.
            5-Year Limited Warranty
            True Power™ Technology delivers best-in-class power
            Generac generators and engines are Engineered and Built in the USA*
            Generac’s G-Force Engines are capable of handling the rigors of generator use
            24/7/365 Customer Support Team
            Tough, Durable All-Aluminum Enclosures
            Smart, User-Friendly Controls
            *Built in the USA using domestic and foreign parts`,
        imagelink: require('../assets/images/gen.png'),
        specifications: [
            {
                model: '7224',
                series: 'Guardian',
                fuelType: 'LPG-NG',
                AutomaticTSA_Rating: '100',
                Circuits: '16',
                engine_size: '816cc',
                minAmps_240V: '58.3A',
                minPowerRating: '14Kw',
                warrantyLength: '5', // Corrected typo from 'warrantyLenght'
                NG_BTUS: '256,000',
                LP_BTUS: '280,000',
                sku: 'Guardian 7224-0',
                weight: '385lb'
            }
        ],
        type: 'Residential',
        index: 1,
    },
    {
        id: 'A3',
        name: 'Generac Guardian 18kW Home Backup Generator With Free Mobile Link',
        description: `
            Generac’s Protector Series offers benefits that competitors can’t match. Installation flexibility and cost reduction. Sophisticated, yet intuitive controls. Quiet operation. Supported by a 24/7/365 customer support team at our corporate headquarters, and a nationwide dealer network of more than 6,000 strong. The best liquid cooled engine packs more power into a smaller footprint – ideal when space is a premium. The neutral styling, color, and small footprint fit unobtrusively into landscaping. Clean burning, continuous fuel choice of natural gas to LP.`,
        imagelink: require('../assets/images/gen.png'),
        specifications: [
            {
                model: '7228',
                series: 'Guardian',
                fuelType: 'LPG-NG',
                AutomaticTSA_Rating: '200',
                Circuits: '16',
                engine_size: '816cc',
                minAmps_240V: '70.8A',
                minPowerRating: '18Kw',
                warrantyLength: '5',
                NG_BTUS: '127,000',
                LP_BTUS: '135,000',
                sku: 'Guardian 7228',
                weight: '420lb'
            }
        ],
        type: 'Residential',
        index: 2,
    },
    {
        id: 'A4',
        name: 'Generac Guardian 22kW Home Backup Generator With Free Mobile Link',
        description: `
            Generac’s new Protector® Series diesel generators raise the bar for residential and light commercial diesel generators. Building and zoning codes can vary wildly from one region to another. In the past, the only answer was to order expensive, custom-configured solutions. Until now. Generac’s diesel-powered Protector Series features Code Ready, a set of popular preconfigured options and a range of code-driven accessories, so you can feel confident that your generator will be able to conform to the required local codes. The Protector Series is versatile, adaptable, meets UL requirements, and is an affordable optional standby diesel generator for your backup power needs.`,
        imagelink: require('../assets/images/gen.png'),
        specifications: [
            {
                model: '7043',
                series: 'Guardian',
                fuelType: 'LPG-NG',
                AutomaticTSA_Rating: '200',
                Circuits: '16',
                engine_size: '999cc',
                minAmps_240V: '78A',
                minPowerRating: '22Kw',
                warrantyLength: '5',
                NG_BTUS: '327,000',
                LP_BTUS: '355,000',
                sku: 'G0070433',
                weight: '476lb'
            }
        ],
        type: 'Residential',
        index: 3,
    },
    {
        id: 'A5',
        name: 'Generac PowerPact 7.5kW Home Backup Generator',
        description: ``,
        imagelink: require('../assets/images/gen.png'),
        specifications: [
            {
                model: '6998',
                series: 'PowerPact',
                fuelType: 'LPG-NG',
                AutomaticTSA_Rating: '50',
                Circuits: '8',
                engine_size: '420cc',
                minAmps_240V: '25A',
                minPowerRating: '7.5Kw', // Changed to match the name
                warrantyLength: '3',
                NG_BTUS: '117,000',
                LP_BTUS: '129,000',
                barcode: '9347829347892375',
                sku: 'PowerPact 6998',
                weight: '280lb'
            }
        ],
        type: 'Residential',
        index: 4,
    },
    {
        id: 'A6',
        name: 'Guardian 24kW Home Backup Generator WiFi-Enabled',
        description: `
            Innovative Engine Design and Rigorous Testing, True Power Electrical Technology, Mobile Link Connectivity, Solid-State, Frequency Compensated Voltage Regulation, Single Source Service Response, Generac Transfer Switches
            
            Rated maximum continuous power capacity (LP) 24,000 watts
            Rated maximum continuous power capacity (NG) 21,000 watts
            
            * True Power Electrical Technology
            * Two-line multilingual digital LCD Evolution controller (English/Spanish/French/Portuguese)
            * 200 amp service rated transfer switch available
            * Electronic governor
            * Standard Wi-Fi connectivity
            * System status & maintenance interval LED indicators
            * Sound attenuated enclosure
            * Flexible fuel line connector
            * Natural gas or LP gas operation
            * 5 year limited warranty
            * Listed and labeled for installation as close as 18 in (457 mm) to a structure (must be located away from 
            * doors, windows, and fresh air intakes and in accordance with local codes)`,
        imagelink: require('../assets/images/gen.png'),
        specifications: [
            {
                model: '7043',
                series: 'Guardian',
                fuelType: 'LPG-NG',
                minPowerRating: '24Kw', // Corrected power rating to match the name
                warrantyLength: '5',
                NG_BTUS: '240,000',
                LP_BTUS: '220,000',
                sku: 'Guardian 7043',
                weight: '455lb'
            }
        ],
        type: 'Residential',
        index: 5,
    },
    {
        id: 'A7',
        name: 'Generac 40kW Home Backup Generator with Wi-Fi',
        description: `
            The Generac 40kW Home Backup Generator is the ultimate solution for comprehensive home backup power. Featuring Wi-Fi capability, you can monitor your generator's status from anywhere. Designed to run on natural gas or liquid propane, this generator offers robust power delivery for your entire home.
            
            With Generac's G-Force Engine, it’s engineered for longevity and reliability. Automatic transfer switch ensures seamless transition of power during outages. Built with quiet operation in mind, this generator provides peace of mind without the noise.
            
            Key features include:
            - 30kW power capacity
            - Advanced controls for easy monitoring
            - Automatic voltage regulation
            - 5-Year Limited Warranty
            - 24/7 customer support
            - Smart, user-friendly interface
        `,
        imagelink: require('../assets/images/gen.png'),
        specifications: [
            {
                model: '7044',
                series: 'Guardian',
                fuelType: 'LPG-NG',
                AutomaticTSA_Rating: '300',
                Circuits: '20',
                engine_size: '1,064cc',
                minAmps_240V: '125A',
                minPowerRating: '30Kw',
                warrantyLength: '5',
                NG_BTUS: '285,000',
                LP_BTUS: '300,000',
                sku: 'Guardian 7044',
                weight: '528lb'
            }
        ],
        type: 'Residential',
        index: 6,
    },
];

export default ResidentialGeneratorData;