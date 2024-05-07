'use client'
import { useWeather } from "@/app/contexts/WeatherContext";
import WeatherChart from "@/app/components/WeatherChart";

export default function WeatherDisplay() {

    let { error, isSearching, weather } = useWeather();
    return (
        !error ? <div className="flex flex-col justify-center text-center items-center w-full">
            <h1 className="text-4xl mt-4 mb-8">{weather?.resolvedAddress}</h1>
            {weather?.days?.length > 0 && !isSearching ?
                <div className="flex flex-row flex-wrap justify-center w-full text-center gap-16">
                    <WeatherChart day={0} />
                    <WeatherChart day={7} />
                </div> : <div className="inline-flex items-center justify-center h-[50vh] w-full px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white"><svg xmlns="http://www.w3.org/2000/svg" className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                </svg></div>}
        </div> : 
        <p className="text-md text-white">Error retrieving data. Please try again later.</p>
    )
}