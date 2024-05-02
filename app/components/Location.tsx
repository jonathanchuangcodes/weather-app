'use client'
import getWeather from "@/app/api/weather";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export default function Location() {
    const [location, setLocation] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const debouncedLocation = useDebounce(location, 300);
    let handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    }

    useEffect(() => {
        (async function () {
            setIsSearching(true);
            if (debouncedLocation) {
                const data = await getWeather(debouncedLocation);
                console.log(data);
            }
            setIsSearching(false);
        })();
    }, [debouncedLocation])
    return (
        <div className="flex flex-row items-center gap-4">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Search Location" title="location" className="text-black" onChange={handleOnChange} />
            {isSearching && <p>Searching...</p>}
        </div>

    )
}