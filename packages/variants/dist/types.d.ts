export declare const ADDON_ID = "@storybook-extras/variants";
export declare const PARAM_KEY = "variants";
export declare const DECORATOR_NAME: string;
export interface VariantsParameter {
    enable?: boolean;
    items?: any[];
    include?: any[];
    exclude?: any[];
    groupBy?: string[];
    autoCalculate?: boolean;
    groupSeparator?: string;
    variantSeparator?: string;
}
export interface VariantsConfig {
}
