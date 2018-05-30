import React, { Component } from 'react';
import Location from "./Location"

class LocationList extends Component {

    state = {
        locations: []
    }

    componentDidMount() {
        fetch("http://localhost:5000/locations")
            // Must be explicit on how to parse the response
            .then(response => response.json())

            // JSON parsed data comes to this then()
            .then(apiLocations => {
                this.setState({
                    locations: apiLocations
                })
            })

    }

    render() {
        return (
            <div>
                {this.state.locations.map(location =>
                    <Location
                        key={location.id}
                        locationId={location.id}
                        name={location.name}
                        address={location.address} />
                )}
            </div>
        )
    }
}

export default LocationList
