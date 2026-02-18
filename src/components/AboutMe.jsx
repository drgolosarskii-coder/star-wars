import { useEffect, useState } from "react";
import { base_url } from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(null);

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then((res) => res.json())
            .then((data) => setAboutMe(data));
    }, []);

    if (!aboutMe) return <div>Loading...</div>;

    return (
        <div className="far-galaxy">
            <div>Name: {aboutMe.name}</div>
            <div>Birth Year {aboutMe.birth_year}</div>
            <div>Skin: {aboutMe.skin_color}</div>
            <div>Hair: {aboutMe.hair_color}</div>
            <div>Eyes: {aboutMe.eye_color}</div>
            <div>Weight: {aboutMe.mass}</div>
            <div>Height: {aboutMe.height}</div>

        </div>
    );
};

export default AboutMe;
