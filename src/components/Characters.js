import React, { Component } from 'react';

class Character extends Component {
    state = {
        heroName: 'undefinedName',
        heroRole: 'undefinedRole',
        heroDiff: 0,
        heroStats: {
            health: 999,
            armor: 999,
            shield: 999,
        },
        extra: {
            age: 19,
            height: {
                imperial: 76,
                metric: 1.65
            },
            country: "undefinedCountry",
            city: "undefinedCity"
        }
    }

    render() {
        return (
            <div className="hero">
                <h2>Hero: {this.state.heroName}</h2>
            </div>
        );
    }
}

export default Character;