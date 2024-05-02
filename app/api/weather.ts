export default async function getWeather(location: string) {
    // Replace with your desired location
    const locationString = encodeURIComponent(location); // Encode special characters

    // Replace with your actual Visual Crossing API key
    const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationString}/?unitGroup=us&key=${key}&contentType=json`;
    
    if (key) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.status}`);
            }
            const weatherData = await response.json();
            return weatherData;
        } catch (error) {
            console.error("Error:", error);
            // Handle errors appropriately, like displaying an error message to the user
        }
    } else {
        console.error("No API key provided");
        // Handle errors appropriately, like displaying an error message to the user
    }
}