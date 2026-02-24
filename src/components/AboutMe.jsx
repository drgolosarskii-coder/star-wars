import { useEffect, useState } from "react";
import {ABOUT_ME_FIELDS, base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(() => {
        const raw = localStorage.getItem("about_me");
        return raw ? JSON.parse(raw) : null;
    });

    useEffect(() => {
        if (
            !aboutMe ||
            !localStorage.getItem("about_me_ts") ||
            Date.now() - Number(localStorage.getItem("about_me_ts")) > 2592000000
        ) {
            fetch(`${base_url}/v1/peoples/1`)
                .then((res) => res.json())
                .then((data) => {
                    setAboutMe(data);
                    localStorage.setItem("about_me", JSON.stringify(data));
                    localStorage.setItem("about_me_ts", String(Date.now()));
                });
        }
    }, [aboutMe]);

    if (!aboutMe) return <div>Loading...</div>;

    return (
        <div className="text-center text-6xl text-amber-400">
            {ABOUT_ME_FIELDS.map(({ label, key }) => (
                <div key={key}>
                    {label}: {aboutMe[key]}
                </div>
            ))}
        </div>
    );
};

export default AboutMe;
