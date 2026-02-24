import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems} from "./utils/constants.js";
import {ChangePageContext} from "./utils/context.js";


function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className="w-full px-4">
            <ChangePageContext value={{page, setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </ChangePageContext>
        </div>
    )
}

export default App
