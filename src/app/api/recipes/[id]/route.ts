import { ALL_RECIPES } from '@/mocks/recipe';
import { Recipe } from '@/models/recipe';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse<Recipe | unknown>> {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const recipe = ALL_RECIPES.find((recipe) => String(recipe.id) === id);

    if (!recipe) {
        return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
    }

    return NextResponse.json(recipe, { status: 200 });
}
