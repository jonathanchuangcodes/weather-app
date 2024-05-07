import Day from "./Day";

export default interface Weather {
    "queryCost": number | null,
    "latitude": number | null,
    "longitude": number | null,
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: string;
    description: string;
    days: Day[],
    alerts: [],
    stations: {},
    currentConditions: {}

}