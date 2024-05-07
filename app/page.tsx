'use client'

import Location from "@/app/components/Location";
import Frequency from "@/app/components/Frequency";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherProvider } from "./contexts/WeatherContext";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-16 w-full">
      <WeatherProvider>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <Location />
          <Frequency />
        </div>
        <WeatherDisplay />
        <div className="w-full p-4 flex flex-row justify-between items-center">
          <button title="previous week" className=" bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <ArrowLeft size={32} /></button>
          <button title="next week" className=" bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <ArrowRight size={32} /></button>
        </div>
      </WeatherProvider>
    </main>
  );
}
