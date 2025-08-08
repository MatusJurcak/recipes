'use client';

import { Ingredient, QUANTITY_TYPE_LABELS_MAP } from '@/models/ingredient';
import { Checkbox } from '@mui/material';

export default function CheckBoxList({ ingredients }: { ingredients: Ingredient[] }) {
    return (
        <div>
            {ingredients.map((ingredient) => (
                <div key={ingredient.name} className="flex last:border-none items-center py-2 border-black border-b-[1px]">
                    <Checkbox id={`ingredient-${ingredient.name}`} className="mr-4 p-0 text-brown-dark" size="large" />
                    <span>
                        <strong>
                            {ingredient.quantity} {QUANTITY_TYPE_LABELS_MAP[ingredient.quantityType]}
                        </strong>{' '}
                        {ingredient.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
