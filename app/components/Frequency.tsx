'use client'
import { useWeather } from "@/app/contexts/WeatherContext";
import dayjs from 'dayjs'
const weekday = require('dayjs/plugin/weekday')
dayjs.extend(weekday)

export default function Frequency() {
    let { time, weekday, setWeekday, setTimeOfDay } = useWeather();
    let handleOnWeekdayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setWeekday(event.target.value);
    }

    let handleOnTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeOfDay(event.target.value);
    }

    const today = dayjs().day();

    const days = [...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(today - 1, 8), ...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(0, today - 1)]

    return (
        <div className="flex flex-row flex-wrap justify-center gap-4 items-center text-black">
            <select className="p-1 border-2 rounded-md border-gray" title="weekday" name="weekday" id="weekday" value={weekday} onChange={handleOnWeekdayChange}>
                {days.map((day, index) => {
                    return <option key={index} value={day}>{`Every ${day}`}</option>
                })}
            </select>
            <select className="p-1 border-2 rounded-md border-gray" title="time" name="time" id="time" value={time} onChange={handleOnTimeChange}>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                <option value="evening">Evening (4pm - 8pm)</option>
            </select>
        </div>
    )
}