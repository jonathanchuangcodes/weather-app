
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useWeather } from "@/app/contexts/WeatherContext";
import dayjs from "dayjs";

export default function WeekNavigation() {
    const { startDate, setStartDate } = useWeather();
    const handlePrevious = () => {
        setStartDate(dayjs(startDate).subtract(7, "day").format("YYYY-MM-DD"));
    }
    const handleNext = () => {
        setStartDate(dayjs(startDate).add(7, "day").format("YYYY-MM-DD"));
    }

    return (
        <div className="w-full p-4 flex flex-row justify-between items-center">
            <button title="previous week" className=" bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center" onClick={handlePrevious}>
                <ArrowLeft size={32} /></button>
            <button title="next week" className=" bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center" onClick={handleNext}>
                <ArrowRight size={32} /></button>
        </div>
    )
}