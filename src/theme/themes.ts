/* How to Import?

Use this format: "import { Spacing } from './themes/themes.ts';"

*/

// Anderson's theme data directly from website

interface Spacing {
    space_5: any;
    space_10: any;
    space_15: any;
    space_20: number;
    space_30: number;
    space_40: number;
    space_50: number;
    space_60: number;
    space_70: number;
    space_80: number;
}

export const Spacing: Spacing = {
    space_20: 7.04,     // based on 0.44 rem
    space_30: 10.72,    // based on 0.67 rem
    space_40: 16,       // based on 1 rem
    space_50: 24,       // based on 1.5 rem
    space_60: 36,       // based on 2.25 rem
    space_70: 54.08,    // based on 3.38 rem
    space_80: 80.96,    // based on 5.06 rem
};

interface Color {
    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    cyan: string;
    white: string;
    gray: string;
    grayDark: string;
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    light: string;
    dark: string;
}

// Anderson's color palette
export const Color: Color = {
    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',         // Used for Headings, keywords (pov), back-ground-btns, etc.
    orange: '#fd7e14',
    yellow: '#ffc107',      // Used for Keywords, warnings, back-ground-btns, etc.
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',
    white: '#fff',
    gray: '#6c757d',
    grayDark: '#343a40',
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#212529',
};

interface FontFamily {
    montserrat_light: string;
    montserrat_regular: string;
    montserrat_bold: string;
    sansSerif_light: string;
    sansSerif_regular: string;
    sansSerif_bold: string;
}

// Anderson's Font-Family
export const FontFamily: FontFamily = {
    montserrat_light: 'montserrat-light',
    montserrat_regular: 'montserrat-regular',
    montserrat_bold: 'montserrat-bold',
    sansSerif_light: 'sans-serif-light',
    sansSerif_regular: 'sans-serif-regular',
    sansSerif_bold: 'sans-serif-bold',
};

interface FontSize {
    size_small: number;
    size_normal: number;
    size_medium: number;
    size_large: number;
    size_xlarge: number;
}

// Anderson's Font-Size
export const FontSize: FontSize = {
    size_small: 13,
    size_normal: 16,
    size_medium: 20,
    size_large: 36,
    size_xlarge: 42,
};

interface BorderRadius {
    radius_5: number;
    radius_8: number;
    radius_10: number;
    radius_20: number;
    radius_30: number;
    radius_100: number;
}

// Anderson's Border-Radius
export const BorderRadius: BorderRadius = {
    radius_5: 5,
    radius_8: 8,
    radius_10: 10,
    radius_20: 20,
    radius_30: 30,      // Used for main-btns
    radius_100: 100,    // Used for circle-btns
};