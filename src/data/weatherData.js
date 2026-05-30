export const weatherData = {
  city: "Jakarta",
  temperature: "30°C",
  condition: "Sunny",
  humidity: "70%",
  wind: "12 km/h",
  feelsLike: "32°C",
  uvIndex: "8",
  visibility: "10 km",
  pressure: "1012 hPa"
};

export const weeklyForecast = [
  { day: "Mon", date: "26 May", condition: "Sunny", high: "31°C", low: "24°C", icon: "sunny" },
  { day: "Tue", date: "27 May", condition: "Partly Cloudy", high: "29°C", low: "23°C", icon: "cloudy" },
  { day: "Wed", date: "28 May", condition: "Rainy", high: "27°C", low: "22°C", icon: "rainy" },
  { day: "Thu", date: "29 May", condition: "Cloudy", high: "28°C", low: "23°C", icon: "cloudy" },
  { day: "Fri", date: "30 May", condition: "Sunny", high: "30°C", low: "24°C", icon: "sunny" },
  { day: "Sat", date: "31 May", condition: "Sunny", high: "32°C", low: "25°C", icon: "sunny" },
  { day: "Sun", date: "1 Jun", condition: "Partly Cloudy", high: "29°C", low: "23°C", icon: "cloudy" }
];

export const menuItems = [
  { id: 1, name: "Dashboard", icon: "dashboard", active: true },
  { id: 2, name: "Weather", icon: "weather", active: false },
  { id: 3, name: "Forecast", icon: "forecast", active: false },
  { id: 4, name: "Maps", icon: "maps", active: false },
  { id: 5, name: "Settings", icon: "settings", active: false }
];
