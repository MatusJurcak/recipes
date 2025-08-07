import { Ingredient } from '@/models/ingredient';

export default function CheckBoxList({ ingredients }: { ingredients: Ingredient[] }) {
    return (
        <div>
            {ingredients.map((ingredient) => (
                <div key={ingredient.name} className="flex items-center mb-2">
                    <input type="checkbox" id={`ingredient-${ingredient.name}`} className="mr-2" />
                    <label htmlFor={`ingredient-${ingredient.name}`}>{ingredient.name}</label>
                </div>
            ))}
        </div>
    );
}
