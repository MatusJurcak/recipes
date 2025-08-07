export const QuantityTypes = ['grams', 'tablespoon', 'teaspoon', 'milliliters', 'liters', 'none'] as const;
export type QuantityType = (typeof QuantityTypes)[number];

export interface Ingredient {
    name: string;
    quantity: number;
    quantityType: QuantityType;
}

export const QuantityAbbreviations: Record<QuantityType, string> = {
    grams: 'g',
    tablespoon: 'tbsp',
    teaspoon: 'tsp',
    milliliters: 'ml',
    liters: 'l',
    none: '',
};

export const QuantityLables: Record<QuantityType, string> = {
    grams: 'grams',
    tablespoon: 'tablespoon(s)',
    teaspoon: 'teaspoon(s)',
    milliliters: 'milliliter(s)',
    liters: 'liter(s)',
    none: '',
};
