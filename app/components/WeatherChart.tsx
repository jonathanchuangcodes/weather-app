
'use client'

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { useMemo } from 'react';
import { Chart } from 'react-chartjs-2';
import { useWeather } from "@/app/contexts/WeatherContext";
import dayjs from 'dayjs'
import { icons } from '../utils/icons';
import { CloudRain, Icon, Wind } from '@phosphor-icons/react';
const advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

export default function WeatherChart({ day }: { day: number }) {
    let { weekday, weather } = useWeather();
    const today = dayjs().day();

    const days = [...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(today - 1, 8), ...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(0, today)]
    const dateTime = useMemo(() => dayjs(weather.days[day]?.datetime).unix(), [day, weather.days]);

    const date = dayjs().add(days.findIndex((day) => day === weekday) + day, 'day').format("Do");
    const datetimes = useMemo(() => weather?.days?.[day]?.hours.map((hour) => hour.datetimeEpoch), [day, weather?.days]);

    let dateTimeIndex = useMemo(() => datetimes?.findIndex((datetime) => datetime > dateTime) !== -1 ? datetimes?.findIndex((datetime) => datetime > dateTime) + 1 : 0, [datetimes, dateTime]);
    console.log(datetimes?.findIndex((datetime) => datetime > dateTime));

    const labels = useMemo(() => weather?.days[day]?.hours.map((hour) => hour.datetime)?.slice(Math.sign(dateTimeIndex - 4) > 0 ? dateTimeIndex - 4 : 0, Math.sign(dateTimeIndex - 4) > 0 ? dateTimeIndex + 4 : 6), [dateTimeIndex, day, weather?.days])

    const hourlyTempData = useMemo(() => weather?.days[day]?.hours.map((hour) => hour.temp)?.slice(Math.sign(dateTimeIndex - 4) > 0 ? dateTimeIndex - 4 : 0, Math.sign(dateTimeIndex - 4) > 0 ? dateTimeIndex + 4 : 6), [dateTimeIndex, day, weather?.days]);

    const data = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'Average Temperature',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: hourlyTempData,
                yAxisID: 'y',
            },
        ],
    };

    const options = {
        responsive: true,
    };

    const Icon: Icon = icons[weather.days[day]?.hours[dateTimeIndex]?.icon];
    return (
        weather?.days.length > 0 && <div className="flex-1 relative">
            <h1 className='text-xl mb-2'>{`${day >= 7 ? "Next" : "This"} ${weekday} the ${date}`}</h1>
            <div className='flex flex-row justify-between items-center gap-4 mb-8'>
                <div className='flex justify-center items-center mr-4'>
                    <Icon weight="duotone" size={48} />
                </div>
                <div className='flex flex-col justify-center gap-2 text-base'>
                    <div className='flex flex-row items-center gap-2'>
                        <Wind size={24} alt="wind speed" />
                        <p>
                            {weather.days[day]?.windspeed} MPH
                        </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <CloudRain size={24} alt='chance of precipitation' />
                        <p>
                            {Math.floor(weather.days[day]?.precipprob)}% Chance
                        </p>
                    </div>
                </div>
                <div className='flex flex-col text-sm'>
                    <p>
                        Average: {weather.days[day]?.temp}°F
                    </p>
                    <p>
                        Minimum: {weather.days[day]?.tempmin}°F
                    </p>
                    <p>
                        Maximum: {weather.days[day]?.tempmax}°F
                    </p>
                </div>
            </div>
            <Chart type='bar' data={data} options={options} />
        </div>
    );
}