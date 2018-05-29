import React, { Component } from 'react';
import Location from "./Location"

class LocationList extends Component {

    state = {
        locations: [{
            id: 0,
            name: "Nashville North",
            address: "10101 Binary Court"
        },
        {
            id: 0,
            name: "Nashville South",
            address: "314159 Pi Street"
        }]
    }

    render() {
        return (
            <div>
                {this.state.locations.map(location =>
                    <Location name={location.name} address={location.address} />
                )}
            </div>
        )
    }
}

export default LocationList
