import Auth from '@/app/components/Auth';
import RecipeContent from '@/app/components/recipes/RecipeContent';
import { Recipe } from '@/models/recipe';
import { cookies } from 'next/headers';

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cookieStore = await cookies();

    const recipe: Recipe = await fetch(`http://localhost:3000/api/recipes/${id}`, {
        headers: {
            Cookie: cookieStore.toString(),
        },
        cache: 'no-store',
    }).then((res) => res.json());

    return (
        <Auth>
            <RecipeContent recipe={recipe} />
        </Auth>
    );
}
