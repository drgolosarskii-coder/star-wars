import '../contactForm.css';
import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const raw = localStorage.getItem("planets");
        return raw ? JSON.parse(raw) : [];
    });

    useEffect(() => {
        if (
            planets.length === 0 ||
            !localStorage.getItem("planets_ts") ||
            Date.now() - Number(localStorage.getItem("planets_ts")) > 2592000000
        ) {
            fetch(`${base_url}/v1/planets`)
                .then((res) => res.json())
                .then((data) => {
                    setPlanets(data);
                    localStorage.setItem("planets", JSON.stringify(data));
                    localStorage.setItem("planets_ts", String(Date.now()));
                });
        }
    }, [planets]);
    return (
        <div className="container">
            <form>
                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                />

                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                />

                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    <option value="">Select planet...</option>

                    {[...planets]
                        .sort((a, b) => a.id - b.id)
                        .map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: 200 }}
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default Contact;