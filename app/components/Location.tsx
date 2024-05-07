'use client'
import getWeather from "@/app/api/weather";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useWeather } from "@/app/contexts/WeatherContext";
import dayjs from 'dayjs'

export default function Location() {
    const { searchTerm, setSearchTerm, setIsSearching, weekday, setWeather } = useWeather();
    const debouncedLocation = useDebounce(searchTerm, 300);

    const options = {
        maximumAge: 60 * 60 * 24 * 1000,
        enableHighAccuracy: true,
    };

    function success(pos: any) {
        const crd = pos.coords;
        if (searchTerm === "") {
            setSearchTerm(`${crd.latitude}, ${crd.longitude}`);
        }
    }

    function error(err: any) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    let handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const today = dayjs().day();
    const days = [...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(today - 1, 8), ...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(0, today - 1)]

    const startDate = dayjs().add(days.findIndex((day) => day === weekday), "day").format("YYYY-MM-DD");
    const endDate = dayjs().add(days.findIndex((day) => day === weekday) + 7, "day").format("YYYY-MM-DD");

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(success, error, options);

        (async function () {
            setIsSearching(true);
            if (debouncedLocation) {
                const data = await getWeather(debouncedLocation, startDate, endDate);
                console.log(data);
                setWeather(data)
            }
            setIsSearching(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedLocation, startDate, endDate])
    return (
        <div className="flex flex-row items-center gap-4">
            <label htmlFor="location">Location</label>
            <input className="p-1 border-2 rounded-md border-gray text-black" type="search" placeholder="Search Location" title="location" onChange={handleOnChange} />
        </div>

    )
}