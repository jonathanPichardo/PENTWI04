import React, { Component } from 'react';

export class WeatherCard extends Component {

    constructor(props) {
        super(props);
        console.log('Card Constructed')
    }

    render() {
        return <div class="card teal lighten-4">
            <div class="card-content">
              <span class="card-title">{this.props.city.name}</span>
              <p> {this.props.city.weather.type} | {this.props.city.weather.description} </p>
              <ul>
                <li><b>Humidity:</b> {this.props.city.measures.humidity} </li>
                <li><b>Temp:</b> {this.props.city.measures.temp}</li>
              </ul>
            </div>
          </div>

    }

}