export interface WeatherApiResp {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: ITemperature;
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: IWeather;
  wind: IWind;
}

export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

export interface ITemperature {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}
