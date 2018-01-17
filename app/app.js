import ReactDom from 'react-dom';
import React, { Component } from 'react';

import { WeatherService } from './services/weatherService';

import { WeatherCard } from './components/weatherCard';

export class App extends Component {

    constructor(props) {
        super(props);
        this.weatherService = new WeatherService();
        this.state = {
            cities: ['london', 'paris', 'tokio'],
            weatherDtos: []
        };


    }

    componentDidMount() {
        this.loadWeatherInfo();
    }

    loadWeatherInfo() {
        this.state.cities.map(city => this.weatherService.getCityWeather(city))
            .forEach(observable => observable.subscribe(dto => {
                this.state.weatherDtos.push(dto);
                this.setState(this.state);
            }));
    }

    render() {
        return (
            <div>
                <h2>Weather Information</h2>
                <div class="row">
                { this.state.weatherDtos.map(dto => (<WeatherCard key={dto.id} city={dto}/>)) }
                </div>
            </div>
        );
    }

}

ReactDom.render(<App/>, document.getElementById('root'));