import '../styles/globals.scss';

import SessionProvider from './components/SessionProvider';
import { Geist, Geist_Mono } from 'next/font/google';
import { getServerSession } from 'next-auth';

import type { Metadata } from 'next';
import MyLayout from './components/Layout';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Recipes of Matus Jurcak',
    description: 'A collection of very tasty recipes that I have cooked at some point in my life.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerSession();

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <SessionProvider session={session}>
                    <MyLayout>{children}</MyLayout>
                </SessionProvider>
            </body>
        </html>
    );
}
