import Navigation from "./Navigation.jsx";

const Header = ({changePage}) => {
    return (
        <header className="rounded-top-5-3xl bg-gray">
            <Navigation changePage={changePage}/>
            <h1 className="text-center text-4xl py-4">Luke Skywalker</h1>
        </header>
    )
}

export default Header;