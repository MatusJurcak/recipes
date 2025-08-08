'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export default function NavBar() {
    const { data: session, status } = useSession();

    return (
        <nav className="bg-navbar p-4 z-10 shadow-md">
            <div className="flex items-center max-w-screen-xl mx-auto">
                <h1 className="text-2xl font-bold">Recipes</h1>
                <div className="flex-grow px-6">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/recipes">Recipes</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    {status === 'unauthenticated' || status === 'loading' ? (
                        <button onClick={() => signIn()}>Sign in</button>
                    ) : (
                        <div className="flex items-center space-x-5">
                            <div className="flex-row flex items-center gap-2">
                                <div className="aspect-1 rounded-full size-8 relative flex items-center justify-center overflow-hidden">
                                    {session?.user?.image ? (
                                        <Image src={session?.user?.image} alt="User Avatar" fill />
                                    ) : (
                                        <FaUser className="size-6" />
                                    )}
                                </div>
                                <span>{session?.user?.name || session?.user?.email || 'Unknown User'}</span>
                            </div>
                            <button className="transition-colors hover:text-gray-600" onClick={() => signOut()}>
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
