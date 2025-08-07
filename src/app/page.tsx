import Auth from './components/Auth';

export default function Home() {
    return (
        <Auth>
            <div className="flex flex-col">
                <h1>Welcome to My Recipes</h1>
            </div>
        </Auth>
    );
}
