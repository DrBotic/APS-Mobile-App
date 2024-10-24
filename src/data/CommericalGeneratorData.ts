export interface CommercialGenerator {
    id: string;
    name: string;
    description: string;
    imagelink: any; // Adjust the type based on how you're importing images
    specifications: Specification[];
    type: string;
    index: number;
}

export interface Specification {
    model: string;
    series: string;
    fuelType: string;
    minAmps_240V: string;
    engine_size: string;
    minPowerRating: string;
    warrantyLength: string;
    NG_BTUS?: string;
    LP_BTUS?: string;
    sku: string;
    weight: string;
}

export const CommercialGeneratorData: CommercialGenerator[] = [
    {
        id: 'B1',
        name: 'Generac Protector 25kw Standby Generator',
        description: `
            The best liquid cooled engine packs more power into a smaller footprint–ideal when space is a premium. The neutral styling, color, and small footprint fit unobtrusively into landscaping. Clean burning, continuous fuel choice of natural gas or LP.
        `,
        imagelink: require('../assets/images/25kw_45kw_Commercial-Generator.webp'),
        specifications: [
            {
                model: 'RG0025',
                series: 'Protector',
                fuelType: 'LPG-NG',
                minAmps_240V: '104A',
                engine_size: '4 Cylinders',
                minPowerRating: '25Kw',
                warrantyLength: '5',
                NG_BTUS: '430,000',
                LP_BTUS: '433,440',
                sku: 'Protector RG025',
                weight: '777lb',
            }
        ],
        type: 'Commercial',
        index: 0,
    },
    {
        id: 'B2',
        name: 'Generac Protector 30kw Standby Generator',
        description: '',
        imagelink: require('../assets/images/25kw_45kw_Commercial-Generator.webp'),
        specifications: [
            {
                model: 'RG030',
                series: 'Protector',
                fuelType: 'LPG-NG',
                minAmps_240V: '240A',
                engine_size: '4 Cylinders',
                minPowerRating: '80Kw',
                warrantyLength: '5',
                NG_BTUS: '492,000',
                LP_BTUS: '496,440',
                sku: 'Protector RG030',
                weight: '1857lb',
            }
        ],
        type: 'Commercial',
        index: 1,
    },
    {
        id: 'B3',
        name: 'Generac Protector 45kw Standby Generator',
        description: `
            The best liquid cooled engine packs more power into a smaller footprint–ideal when space is a premium. The neutral styling, color, and small footprint fit unobtrusively into landscaping. Clean burning, continuous fuel choice of natural gas or LP.
        `,
        imagelink: require('../assets/images/25kw_45kw_Commercial-Generator.webp'),
        specifications: [
            {
                model: 'RG045',
                series: 'Protector',
                fuelType: 'LPG-NG',
                minAmps_240V: '188A',
                engine_size: '4 Cylinders',
                minPowerRating: '45Kw',
                warrantyLength: '5',
                NG_BTUS: '730,000',
                LP_BTUS: '730,800',
                sku: 'Protector RG045',
                weight: '1260lb',
            }
        ],
        type: 'Commercial',
        index: 2,
    },
    {
        id: 'B4',
        name: 'Generac Protector 60kw Standby Generator',
        description: `
            Best in class Generac designed & built 4.5L engine – purpose-built exclusively for generator use & designed from the ground up by Generac in Wisconsin. Utilizes a dual-valve ultra-low pressure fuel delivery system and intelligent proprietary engine controls that manage over 100 performance functions to ensure peak efficiency. Generac is one of the only manufacturers to design & produce a complete generator, including engine, alternator, fuel system, controller, and enclosure in the U.S.
        `,
        imagelink: require('../assets/images/60kw_80kw_Commercial-Generator.jpg'),
        specifications: [
            {
                model: 'RG06045',
                series: 'Protector',
                fuelType: 'LPG-NG',
                minAmps_240V: '180A',
                engine_size: '4.5L Turbo',
                minPowerRating: '60Kw',
                warrantyLength: '5',
                NG_BTUS: '862,000',
                LP_BTUS: '824,040',
                sku: 'Protector RG06045',
                weight: '1912lb',
            }
        ],
        type: 'Commercial',
        index: 3,
    },
    {
        id: 'B5',
        name: 'Generac Protector 80kw Standby Generator',
        description: `
            Best in class Generac designed & built 4.5L engine – purpose-built exclusively for generator use & designed from the ground up by Generac in Wisconsin. Utilizes a dual-valve ultra-low pressure fuel delivery system and intelligent proprietary engine controls that manage over 100 performance functions to ensure peak efficiency. Generac is one of the only manufacturers to design & produce a complete generator, including engine, alternator, fuel system, controller, and enclosure in the U.S.
        `,
        imagelink: require('../assets/images/60kw_80kw_Commercial-Generator.jpg'),
        specifications: [
            {
                model: 'RG08045',
                series: 'Protector',
                fuelType: 'LPG-NG',
                minAmps_240V: '240A',
                engine_size: '4.5L Turbo',
                minPowerRating: '80Kw',
                warrantyLength: '5',
                NG_BTUS: '1,063,000',
                LP_BTUS: '990,864',
                sku: 'Protector RG0804',
                weight: '2022lb',
            }
        ],
        type: 'Commercial',
        index: 4,
    },
    {
        id: 'B6',
        name: 'Generac Protector Diesel Series 30kw Standby Generator',
        description: `
            The 30kw generator offers affordable backup power for larger homes and businesses, equipped with advanced technologies enabling 24/7/365 system monitoring and quiet operation. The smart design ensures property usability and fuel efficiency. Mobile Link™ connectivity allows monitoring from anywhere. Smart, user-friendly controls via Generac’s Evolution™ Controller feature a multilingual LCD display to monitor and track maintenance.
        `,
        imagelink: require('../assets/images/30kw_50kw_Diesel_Commercial-Generator.jpg'),
        specifications: [
            {
                model: 'RD03022',
                series: 'Protector',
                fuelType: 'Diesel',
                minAmps_240V: '125A',
                engine_size: '4 Cylinders',
                minPowerRating: '30Kw',
                warrantyLength: '5',
                sku: 'Protector RD03022',
                weight: '1857lb',
            }
        ],
        type: 'Commercial',
        index: 5,
    },
    {
        id: 'B7',
        name: 'Generac Protector Series 50 Kw Standby Diesel Generator',
        description: `
            The 50kw generator is an affordable backup power solution for larger homes and businesses, equipped with advanced technologies enabling 24/7/365 system monitoring and quiet operation. The smart, efficient design keeps property usable and fuel costs low. Mobile Link™ connectivity allows monitoring from anywhere. Smart, user-friendly controls via Generac’s Evolution™ Controller feature a multilingual LCD display to monitor and track maintenance.
        `,
        imagelink: require('../assets/images/30kw_50kw_Diesel_Commercial-Generator.jpg'),
        specifications: [
            {
                model: 'RD05033',
                series: 'Protector',
                fuelType: 'Diesel',
                minAmps_240V: '240A',
                engine_size: '4 Cylinders',
                minPowerRating: '50Kw',
                warrantyLength: '5',
                sku: 'Protector RD05033',
                weight: '1857lb',
            }
        ],
        type: 'Commercial',
        index: 6,
    },
];

export default CommercialGeneratorData;