// Residential Generator's info

const ResidentialGeneratorData = [
    {
        id: 'A1',
        name: '10kW Air-Cooled Standby Generator with WiFi',
        description: ``,
        imagelink: require('../assets/images/homeOwner-Generator.webp'),
        specifications: [
            {
                model: '7172-0', series: 'Guardian', fuelType: 'LPG-NG', NG_BTUS: '127,000', 
                LP_BTUS: '135,000', sku: 'Guardian 7172-0', weight: '338lb'
            }
        ],
        type: 'Residential',
        index: 0,
    },
    {
        id: 'A2',
        name: 'Generac Guardian 14kw Home Backup Generator With Free Mobile Link',
        description: `
            Generac’s Guardian Series generators provide the automatic backup power you need 
            to protect your home and family during a power outage. Connected to your existing 
            LP or natural gas fuel supply, it kicks in within seconds of sensing power 
            loss—automatically—and runs for as long as necessary until utility power returns.

            Now coming with FREE Mobile Link, allowing you to monitor the status of your generator on a phone, 
            tablet or computer from anywhere in the world. Giving you the ability to connect your account to 
            your authorized service dealer for fast, friendly and convenient assistance.

            Mobile Link™ Remote Monitoring.
            5-Year Limited Warranty
            True Power™ Technology delivers best-in-class power
            Generac generators and engines are Engineered and Built in the USA*
            Generac’s G-Force Engines are capable of handling the rigors of generator use
            24/7/365 Customer Support Team
            Tough, Durable All-Aluminum Enclosures
            Smart, User-Friendly Controls
            *Built in the USA using domestic and foreign parts`,
        imagelink: require('../assets/images/homeOwner-Generator.webp'),
        specifications: [
            {
                model: '7224', series: 'Guardian', fuelType: 'LPG-NG', AutomaticTSA_Rating: '100',
                Circuits: '16', engine_size: '816cc', minAmps_240V: '58.3A', minPowerRating: '14Kw',
                warrantyLenght: '5', NG_BTUS: '256,000', LP_BTUS: '280,000', sku: 'Guardian 7224-0', 
                weight: '385lb'
            }
        ],
        type: 'Residential',
        index: 1,
    },
    {
        id: 'A3',
        name: 'Generac Guardian 18kw Home Backup Generator With Free Mobile Link',
        description: `
            Generac’s Protector Series offers benefits that competitors’ can’t match. 
            Installation flexibility and cost reduction. Sophisticated, yet intuitive controls. 
            Quiet operation. Supported by a 24/7/365 customer support team at our corporate 
            headquarters, and a nationwide dealer network of more than 6,000 strong. The best 
            liquid cooled engine packs more power into a smaller footprint – ideal when space is 
            a premium. The neutral styling, color and small footprint fits unobtrusively into landscaping. 
            Clean burning, continuous fuel choice of natural gas to LP.`,
        imagelink: require('../assets/images/homeOwner-Generator.webp'),
        specifications: [
            {
                model: '7228', series: 'Guardian', fuelType: 'LPG-NG', AutomaticTSA_Rating: '200',
                Circuits: '16', engine_size: '816cc', minAmps_240V: '70.8A', minPowerRating: '17Kw',
                warrantyLenght: '5', NG_BTUS: '127,000', LP_BTUS: '135,000', sku: 'Guardian 7228', 
                weight: '420lb'
            }
        ],
        type: 'Residential',
        index: 2,
    },
    {
        id: 'A4',
        name: 'Generac Guardian 22kw Home Backup Generator With Free Mobile Link',
        description: `
            Generac’s new Protector® Series diesel generators raise the bar for residential and light 
            commercial diesel generators. Building and zoning codes can vary wildly from one region to 
            another. In the past, the only answer was to order expensive, custom-configured solutions. 
            Until now. Generac’s diesel-powered Protector Series features Code Ready, a set of popular 
            preconfigured options and a range of code-driven accessories, so you can feel confident that 
            your generator will be able to conform to the required local codes. The Protector Series is 
            versatile, adaptable, meets UL requirements, and is an affordable optional standby diesel 
            generator for your backup power needs.`,
        imagelink: require('../assets/images/homeOwner-Generator.webp'),
        specifications: [
            {
                model: '7043', series: 'Guardian', fuelType: 'LPG-NG', AutomaticTSA_Rating: '200',
                Circuits: '16', engine_size: '999cc', minAmps_240V: '78A', minPowerRating: '19.5Kw',
                warrantyLenght: '5', NG_BTUS: '327,000', LP_BTUS: '355,000', sku: 'G0070433', 
                weight: '476lb'
            }
        ],
        type: 'Residential',
        index: 3,
    },
    {
        id: 'A5',
        name: 'Generac Powerpact 7.5kw Home Backup Generator',
        description: ``,
        imagelink: require('../assets/images/homeOwner-Generator.webp'),
        specifications: [
            {
                model: '6998', series: 'PowerPact', fuelType: 'LPG-NG', AutomaticTSA_Rating: '50',
                Circuits: '8', engine_size: '420cc', minAmps_240V: '25A', minPowerRating: '6Kw',
                warrantyLenght: '3', NG_BTUS: '117,000', LP_BTUS: '129,000', barcode: '9347829347892375', 
                sku: 'PowerPact 6998', weight: '280lb'
            }
        ],
        type: 'Residential',
        index: 4,
    },
    {
        id: 'A6',
        name: 'Guardian 24kW Home Backup Generator WiFi-Enabled',
        description: `
            Innovative Engine Design and Rigorous Testing, True Power Electrical Technology, Mobile Link Connectivity, 
            Solid-State, Frequency Compensated Voltage Regulation, Single Source Service Response, Generac Transfer Switches

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
        imagelink: require('../assets/images/homeOwner-Generator.webp'),
        specifications: [
            {
               size: 'L 48" x W 25" x H 29"', wieght: '455lb', watt: '240', fuelType: 'Natural Gas/Liquid Propane',
            }
        ],
        type: 'Residential',
        index: 5,
    },
    {
        id: 'A7',
        name: 'Guardian 24kW Home Backup Generator with Whole House Switch WiFi-Enabled',
        description: `
            Rated maximum continuous power capacity (LP) 24,000 watts

            Rated maximum continuous power capacity (NG) 21,000 watts

            Innovative Engine Design and Rigorous Testing, True Power Electrical Technology, Mobile Link Connectivity,
            Solid-State, Frequency Compensated Voltage Regulation, Single Source Service Response, Generac Transfer Switches

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
        imagelink: require('../assets/images/homeOwner-Generator.webp'),
        specifications: [
            {
                size: 'L 48" x W 25" x H 29"', wieght: '455lb', watt: '240', fuelType: 'Natural Gas/Liquid Propane',
            }
        ],
        type: 'Residential',
        index: 6,
    },
];

export default ResidentialGeneratorData;