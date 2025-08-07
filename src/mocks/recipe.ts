import { Recipe } from '@/models/recipe';

export const ALL_RECIPES: Recipe[] = [
    {
        id: 0,
        categories: ['Bread'],
        title: 'Pita Bread',
        description: 'A simple recipe for making soft and fluffy pita bread at home.',
        ingredients: [
            {
                name: 'whole milk (room temperature)',
                quantity: 160,
                quantityType: 'milliliters',
            },
            {
                name: 'water',
                quantity: 80,
                quantityType: 'milliliters',
            },
            {
                name: 'sugar',
                quantity: 1,
                quantityType: 'teaspoon',
            },
            {
                name: 'active dry yeast',
                quantity: 2,
                quantityType: 'teaspoon',
            },
            {
                name: 'olive oil',
                quantity: 2,
                quantityType: 'tablespoon',
            },
            {
                name: 'salt',
                quantity: 1,
                quantityType: 'teaspoon',
            },
            {
                name: 'hard flour',
                quantity: 320,
                quantityType: 'grams',
            },
            {
                name: 'olive oil (for frying)',
                quantity: 1,
                quantityType: 'tablespoon',
            },
        ],
        createdAt: new Date('2025-08-05').toISOString(),
        updatedAt: new Date('2025-08-05').toISOString(),
        instructionSections: [
            {
                title: 'For the dough',
                instructions: [
                    'Combine the sugar, yeast, water, and milk in a bowl. Set the bowl aside for 5 minutes, until the mixture starts to froth.',
                    'In another bowl, combine the flour, the salt and give it a mix to combine.',
                    'Add the oil to the yeast mixture and stir to combine.',
                    'Add the yeast mixture to the flour mixture in batches. Make sure each batch is incorporated before adding the next.',
                    'Transfer mixture to a lightly floured working surface. Knead for 4-5 minutes until the dough becomes smooth.',
                    'Brush a bowl with some oil and add the dough.',
                    'Cover with a towel and let it rest for about 40 minutes, until it rises and doubles in size.',
                    'After the dough has risen, press on the dough to remove the air and cut into 6 equal sized pieces.',
                    'Place pieces of dough on a lightly oiled working surface. Use a rolling pin to roll out each piece of dough to a circle 20 cm in diameter.',
                ],
            },
            {
                title: 'For frying',
                instructions: [
                    'Place a pan over medium heat.',
                    'Cook the pita bread for 1-2 minutes on each side in the pan, until they puff up slightly.',
                    'Transfer to a plate and serve with chicken or pork gyro, sausages or vegetables.',
                ],
            },
        ],
    },
];
