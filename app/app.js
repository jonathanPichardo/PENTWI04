import ReactDom from 'react-dom';
import React, { Component } from 'react';

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