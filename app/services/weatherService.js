import { fromPromise, empty } from 'rxjs/observable/fromPromise';
import { map, catchError } from 'rxjs/operators';

import { CityWeatherDto } from '../model/weatherDto';

const API_KEY = '171a7c48da0aaede9e3a66ef3be2f483';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?';

export class WeatherService {
    getCityWeather(city) {
        return fromPromise(
                fetch(`${API_URL}q=${city}&appid=${API_KEY}`)
                .then(res => res.json())
            )
            .pipe(
                map(res => new CityWeatherDto(res)),
                catchError(err => {
                    console.error(err);
                    return empty();
                })
            );
    }
}