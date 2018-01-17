export class CityWeatherDto {

    constructor(json) {
        this.coord = json.coord || { long: 0.0, lat: 0.0 };
        this.name = json.name;
        this.id = json.id;
        this.weather = {
            type: json.weather[0].main,
            description: json.weather[0].description
        };
        this.measures = {
            temp: json.main.temp,
            humidity: json.main.humidity
        };
    }

}