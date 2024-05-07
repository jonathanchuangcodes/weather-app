"use client"

import { createContext, useContext, useState } from "react";
import Weather from "@interfaces/Weather";
import dayjs from 'dayjs'
const weekday = require('dayjs/plugin/weekday')
dayjs.extend(weekday)

const today = dayjs().day();
const hour = dayjs().hour();

const days = [...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(today - 1, 8), ...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(0, today - 1)]

const getTimeOfDay = (hour: number): string => {
    if (hour >= 8 && hour < 12) {
        return "morning";
    } else if (hour >= 12 && hour < 16) {
        return "afternoon";
    }
    else if (hour >= 16 && hour < 20) {
        return "evening";
    } else {
        return "morning";
    }
}

export interface WeatherContextType {
    error: boolean;
    weekday: string;
    time: string;
    weather: Weather;
    searchTerm: string;
    isSearching: boolean;
    startDate: string;
    setError: (error: boolean) => void;
    setSearchTerm: (searchTerm: string) => void;
    setIsSearching: (isSearching: boolean) => void;
    setWeather: (weather: Weather) => void;
    setWeekday: (weekday: string) => void;
    setTimeOfDay: (time: string) => void;
    setStartDate: (startDate: string) => void;
}

const WeatherContext = createContext<WeatherContextType>(null as any as WeatherContextType);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    let [weekday, setWeekday] = useState<string>(days[0]);
    let [error, setError] = useState<boolean>(false);
    let [startDate, setStartDate] = useState<string>(dayjs().format("YYYY-MM-DD"));
    let [timeOfDay, setTimeOfDay] = useState<string>(getTimeOfDay(hour));
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [weatherState, setWeatherState] = useState<Weather>({
        queryCost: null,
        latitude: null,
        longitude: null,
        resolvedAddress: "",
        address: "",
        timezone: "",
        tzoffset: "",
        description: "",
        days: [],
        alerts: [],
        stations: {},
        currentConditions: {}
    });

    const setWeather = (weather: Weather): void => {
        setWeatherState(weather);
    }

    const value = {
        error,
        weekday,
        time: timeOfDay,
        weather: weatherState,
        searchTerm,
        isSearching,
        startDate,
        setError,
        setStartDate,
        setSearchTerm,
        setIsSearching,
        setWeather,
        setWeekday,
        setTimeOfDay
    };
    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
}
