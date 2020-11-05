import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    // constructor function is NOT REQUIRED by React, but
    // it is a way to initialize the state object.
    // constructor(props) {
    //     // a must-call function
    //     super(props);
    //     // initialize the state object: it's got a variable set to null.
    //     // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO the state.
    //     this.state = { lat: null, errorMessage: '' };
    //     // below is a call-back function. It will get called some point in the future
    //     // -->
    //     // it will return until it really gets the location 
    //     // --> the render will render again

    // }

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage} </div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <div> <SeasonDisplay lat={this.state.lat} /> </div>;
        }
        return <div><Spinner message="Please accept location request" /></div>;
    }

    // render function is REQUIRED by React
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);