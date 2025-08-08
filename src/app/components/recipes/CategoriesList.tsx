'use client';

import { Recipe, RecipeCategories, RecipeCategory } from '@/models/recipe';
import { useState } from 'react';

import CategoryButton from './CategoryButton';
import Link from 'next/link';

import { AnimatePresence, motion } from 'motion/react';

export default function CategoriesList({ recipes }: { recipes?: Recipe[] }) {
    const [category, setCategory] = useState<RecipeCategory | 'All' | null>(null);

    const filteredRecipes = !category || category === 'All' ? recipes : recipes?.filter((recipe) => recipe.categories.includes(category));

    return (
        <motion.div initial={{ x: '-100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <AnimatePresence mode="wait">
                {!category ? (
                    <motion.div
                        key="categories"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h1>Categories</h1>
                        <div className="flex mt-10 flex-wrap w-2/3 mx-auto justify-center">
                            <div className="p-4 w-1/3">
                                <CategoryButton category="All" onClick={() => setCategory('All')} />
                            </div>
                            {RecipeCategories.map((category) => (
                                <div key={category} className="p-4 w-1/3">
                                    <CategoryButton category={category} onClick={() => setCategory(category)} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="recipes"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex">
                            <h1>List of Recipes - {category}</h1>
                            <div className="flex-grow flex justify-end">
                                <button
                                    className="hover:cursor-pointer transition-all hover:text-gray-600"
                                    onClick={() => setCategory(null)}
                                >
                                    Go back
                                </button>
                            </div>
                        </div>
                        {filteredRecipes?.map((recipe) => (
                            <div key={recipe.id} className="p-4 border-b border-gray-200">
                                <Link href={`/recipes/${recipe.id}`} className="w-min">
                                    <div className="text-lg hover:text-[#b5a42b] transition-colors font-semibold w-max">{recipe.title}</div>
                                </Link>
                                <p className="text-gray-600">{recipe.description}</p>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
