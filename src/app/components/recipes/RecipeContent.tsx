'use client';

import CheckBoxList from '@/app/components/recipes/CheckBoxList';
import InstructionList from '@/app/components/recipes/InstructionList';
import { Recipe } from '@/models/recipe';

import { motion } from 'framer-motion';

export default function RecipeContent({ recipe }: { recipe: Recipe }) {
    return (
        <motion.div initial={{ x: '-100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <h1 className="text-center">{recipe.title}</h1>
            <div className="w-1/3 my-5 mx-auto border-black border-[1px] text-lg rounded-md p-4 flex justify-evenly">
                <div className="flex flex-col items-center px-5">
                    <span>Estimated Time</span>
                    <strong>{recipe.estimatedTime}</strong>
                </div>
                <div className="flex flex-col items-center px-5">
                    <span>Servings:</span>
                    <strong>{recipe.servings}</strong>
                </div>
            </div>
            <div className="w-full mx-auto max-w-[67%] font-medium text-lg text-center text-balance">{recipe.description}</div>
            <div className="w-full py-10 flex flex-row ">
                <div className="w-1/2 px-5">
                    <h2 className="text-center mb-4">Ingredients</h2>
                    <CheckBoxList ingredients={recipe.ingredients} />
                </div>
                <div className="w-1/2 px-5">
                    <h2 className="text-center mb-4">Instructions</h2>
                    <InstructionList sections={recipe.instructionSections} />
                </div>
            </div>
        </motion.div>
    );
}
