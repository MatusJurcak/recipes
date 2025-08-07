import Auth from '@/app/components/Auth';
import CheckBoxList from '@/app/components/recipes/CheckBoxList';
import { Recipe } from '@/models/recipe';
import { cookies } from 'next/headers';

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cookieStore = cookies();

    const recipe: Recipe = await fetch(`http://localhost:3000/api/recipes/${id}`, {
        headers: {
            Cookie: cookieStore.toString(),
        },
        cache: 'no-store',
    }).then((res) => res.json());

    return (
        <Auth>
            <h1 className="text-center">{recipe.title}</h1>
            <div className="w-full flex flex-row">
                <div className="w-1/2">
                    <h2 className="text-center">Ingredients</h2>
                    <CheckBoxList ingredients={recipe.ingredients} />
                </div>
                <div className="w-1/2">
                    {/* <h2 className="text-center">Instructions</h2>
                    <p>{recipe.instructions}</p> */}
                </div>
                <div className="w-1/2"></div>
            </div>
        </Auth>
    );
}
