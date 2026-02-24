import {starWarsInfo} from "../utils/constants.js";

const StarWars = () => {
    return (
        <div className="crawl-wrap w-[100vw] max-w-none mx-auto px-2">
            <div className="crawl">
                <p className="text-amber-400 text-3xl leading-relaxed tracking-[0.2em] text-justify">
                    {starWarsInfo}
                </p>
            </div>
        </div>
    )
}

export default StarWars;
