import Navigation from "./Navigation.jsx";

const Header = () => {
    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>
            <h1 className="text-right text-4xl py-4">Fantastic space opera about Jedi.</h1>
        </header>
    )
}

export default Header;
