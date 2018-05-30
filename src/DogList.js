import React, { Component } from 'react';
import Dog from "./Dog"

class DogList extends Component {

    state = { dogs: [] }

    componentDidMount() {
        fetch(`http://localhost:5000/dogs?locationId=${this.props.locationId}`)
            // Must be explicit on how to parse the response
            .then(response => response.json())

            // JSON parsed data comes to this then()
            .then(apiDogs => {
                this.setState({
                    dogs: apiDogs
                })
            })

    }

    render() {
        return (
            <div>
                {
                    this.state.dogs.map(dog => (
                        <Dog name={dog.name} key={dog.id} />
                    ))
                }
            </div>
        )
    }
}

export default DogList
