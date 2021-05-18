import React from 'react';
import axios from 'axios'

class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = { weather: '' };
    }

componentDidMount() {
    axios.get("/getWeather")
        .then((response) => {
            console.log(response.data);
            this.setState({
                weather: response.data.weather
            })
        })
}

    render(){
        return(
            <h1>Weather: {this.props.weather}</h1>
        )
    }
}

export default Weather