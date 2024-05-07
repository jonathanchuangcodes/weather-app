'use client'

import Location from "@/app/components/Location";
import Frequency from "@/app/components/Frequency";
import WeatherDisplay from "@/app/components/WeatherDisplay";
import { WeatherProvider } from "@/app/contexts/WeatherContext";
import WeekNavigation from "@/app/components/WeekNavigation";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-16 w-full">
      <WeatherProvider>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <Location />
          <Frequency />
        </div>
        <WeatherDisplay />
        <WeekNavigation />
      </WeatherProvider>
    </main>
  );
}
