import ReactDom from 'react-dom';
import React, { Component } from 'react';

const API_KEY = '171a7c48da0aaede9e3a66ef3be2f483';

export class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <h1>Hello World!</h1>;
    }

}

ReactDom.render(<App/>, document.getElementById('root'));