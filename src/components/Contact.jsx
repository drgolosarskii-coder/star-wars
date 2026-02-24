import { useEffect, useState } from "react";
import { base_url } from "../utils/constants.js";

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
        <div className="rounded-md bg-gray-100 p-5">
            <form className="space-y-4">
                <div>
                    <label htmlFor="fname" className="mb-1 block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        placeholder="STARWARS name..."
                        className="w-full rounded border border-gray-300 px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                </div>
                <div>
                    <label htmlFor="lname" className="mb-1 block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        placeholder="STARWARS last name.."
                        className="w-full rounded border border-gray-300 px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                </div>

                <div>
                    <label htmlFor="planet" className="mb-1 block text-sm font-medium text-gray-700">
                        Planet
                    </label>
                    <select
                        className="w-full rounded border border-gray-300 bg-white px-3 py-3 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                        <option value="">Select planet...</option>

                        {[...planets]
                            .sort((a, b) => a.id - b.id)
                            .map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.name}
                                </option>
                            ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                        Subject
                    </label>
                    <textarea
                        placeholder="Free text"
                        className="h-52 w-full resize-y rounded border border-gray-300 px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex items-center rounded bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;