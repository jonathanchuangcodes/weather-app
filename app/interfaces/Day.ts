export default interface Day {
    datetime: string,
    temp: number,
    tempmax: number,
    tempmin: number,
    timestamp: string,
    windspeed: number,
    precipprob: number,
    hours: [{
        temp: number,
        datetime: string,
        datetimeEpoch: number
        icon: string
    }]
}