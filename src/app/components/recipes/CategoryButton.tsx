import { RecipeCategory } from '@/models/recipe';
import { BiSolidDrink } from 'react-icons/bi';
import {
    GiCakeSlice,
    GiCauldron,
    GiCheeseWedge,
    GiCroissant,
    GiFishSmoking,
    GiKetchup,
    GiMasonJar,
    GiMeat,
    GiNoodles,
    GiSlicedBread,
    GiSolidLeaf,
} from 'react-icons/gi';
import { LuSalad } from 'react-icons/lu';
import { MdSoupKitchen } from 'react-icons/md';
import { TbMeatOff } from 'react-icons/tb';

export function CategoryIcon({ category, className }: { category: RecipeCategory | 'All'; className?: string }) {
    switch (category) {
        case 'Bread':
            return <GiSlicedBread size={40} className={`${className}`} />;
        case 'Drinks':
            return <BiSolidDrink size={40} className={`${className}`} />;
        case 'Desserts':
            return <GiCakeSlice size={40} className={`${className}`} />;
        case 'Fish':
            return <GiFishSmoking size={40} className={`${className}`} />;
        case 'Meat':
            return <GiMeat size={40} className={`${className}`} />;
        case 'Vegetarian':
            return <TbMeatOff size={40} className={`${className}`} />;
        case 'Vegan':
            return <GiSolidLeaf size={40} className={`${className}`} />;
        case 'Pasta':
            return <GiNoodles size={40} className={`${className}`} />;
        case 'Salads':
            return <LuSalad size={40} className={`${className}`} />;
        case 'Sauces':
            return <GiKetchup size={40} className={`${className}`} />;
        case 'Soups':
            return <MdSoupKitchen size={40} className={`${className}`} />;
        case 'Pastries':
            return <GiCroissant size={40} className={`${className}`} />;
        case 'Preserved & Fermented':
            return <GiMasonJar size={40} className={`${className}`} />;
        case 'Appetizers':
            return <GiCheeseWedge size={40} className={`${className}`} />;
        default:
            return <GiCauldron size={40} className={`${className}`} />;
    }
}

function noop() {
    // Silence...
}

export default function CategoryButton({ category, onClick = noop }: { category: RecipeCategory | 'All'; onClick?: () => void }) {
    return (
        <button className="bg-[#3d3d3d] aspect-square w-full flex flex-col items-center justify-center rounded-xl p-8" onClick={onClick}>
            <CategoryIcon category={category} className="text-white mt-4" />
            <span className="text-white text-lg font-semibold mt-2">{category}</span>
        </button>
    );
}
