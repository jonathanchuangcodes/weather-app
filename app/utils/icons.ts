import { Cloud, MoonStars, Sun, CloudSun, CloudMoon, CloudSnow, CloudRain, CloudLightning, CloudFog, Wind, Icon } from "@phosphor-icons/react"

export const icons: IconType = {
    'clear-day': Sun,
    'clear-night': MoonStars,
    'cloudy': Cloud,
    'fog': CloudFog,
    'partly-cloudy-day': CloudSun,
    'partly-cloudy-night': CloudMoon,
    'rain': CloudRain,
    'showers-day': CloudRain,
    'showers-night': CloudRain,
    'sleet': CloudSnow,
    'snow-showers-day': CloudSnow,
    'snow-showers-night': CloudSnow,
    'snow': CloudSnow,
    'thunder-rain': CloudLightning,
    'thunder-showers-day': CloudLightning,
    'thunder-showers-night': CloudLightning,
    'wind': Wind,
}

type IconType = {
    [key: string]: Icon;
    'clear-night': Icon;
    'clear-day': Icon;
    'partly-cloudy-day': Icon;
    'partly-cloudy-night': Icon;
    'showers-day': Icon;
    'showers-night': Icon;
    'thunder-showers-day': Icon;
    'thunder-showers-night': Icon;
    'thunder-rain': Icon;
    'snow-showers-day': Icon;
    'snow-showers-night': Icon;
    cloudy: Icon;
    fog: Icon;
    rain: Icon;
    sleet: Icon;
    snow: Icon;
    wind: Icon;
    // ... other specific keys
  };