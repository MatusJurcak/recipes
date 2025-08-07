import Footer from './Footer';
import NavBar from './Navbar';

export default function MyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-background text-black">
            <NavBar />
            <main className="flex-grow w-full shadow-lg max-w-screen-lg bg-background mx-auto p-8">{children}</main>
            <Footer />
        </div>
    );
}
