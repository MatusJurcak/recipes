import { Recipe } from '@/models/recipe';
import { cookies } from 'next/headers';

import CategoriesList from '../components/recipes/CategoriesList';
import Auth from '../components/Auth';

export default async function RecipesPage() {
    const cookieStore = await cookies();

    const recipes: Recipe[] = await fetch(`http://localhost:3000/api/recipes/`, {
        headers: {
            Cookie: cookieStore.toString(),
        },
        cache: 'no-store',
    }).then((res) => res.json());

    return (
        <Auth>
            <div className="flex flex-col">
                <CategoriesList recipes={recipes} />
            </div>
        </Auth>
    );
}
