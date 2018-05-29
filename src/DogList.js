import React, { Component } from 'react';
import Dog from "./Dog"

class DogList extends Component {

    state = { dogs: [
        { id: 1, name: "Scout", locationId:1, ownerId: 1 },
        { id: 2, name: "Slinky", locationId:2, ownerId: 2 },
        { id: 3, name: "Milkshake", locationId:1, ownerId: 2 },
        { id: 4, name: "Maya", locationId:2, ownerId: 1 }
    ]}

    render() {
        return (
            <div>
                {
                    this.state.dogs.filter(dog => {
                        return dog.locationId === this.props.locationId
                    })
                    .map(dog => (
                        <Dog name={dog.name} key={dog.id} />
                    ))
                }
            </div>
        )
    }
}

export default DogList
