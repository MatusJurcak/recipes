import { ALL_RECIPES } from '@/mocks/recipe';
import { Recipe } from '@/models/recipe';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { authOptions } from '@/utils/auth';

export async function GET(): Promise<NextResponse<Recipe[] | unknown>> {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json(ALL_RECIPES, { status: 200 });
}
