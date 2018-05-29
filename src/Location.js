import React, { Component } from 'react';
import DogList from './DogList';

class Location extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.name}</h2>
                <h3>{this.props.address}</h3>
                <DogList locationId={this.props.locationId} />
            </article>
        )
    }
}

export default Location
