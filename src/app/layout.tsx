import '../styles/globals.scss';

import SessionProvider from './components/SessionProvider';
import { Geist, Geist_Mono, Source_Sans_3 } from 'next/font/google';
import { getServerSession } from 'next-auth';

import type { Metadata } from 'next';
import MyLayout from './components/Layout';

const sans = Source_Sans_3({
    variable: '--font-sans',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Recipes of Matus Jurcak',
    description: 'A collection of very tasty recipes that I have cooked at some point in my life.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerSession();

    return (
        <html lang="en">
            <body className={`${sans.variable} ${sans.className} antialiased`}>
                <SessionProvider session={session}>
                    <MyLayout>{children}</MyLayout>
                </SessionProvider>
            </body>
        </html>
    );
}
