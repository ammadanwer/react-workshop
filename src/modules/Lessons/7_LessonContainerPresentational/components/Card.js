import React, { Component } from 'react';

import AirlineLogo from './AirlineLogo'
import RouteDiagram from './RouteDiagram'
import Duration from './Duration'
import Stops from './Stops'

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            departure: props.departure,
            arrival: props.arrival,
            img_path: props.img_path,
            duration_h: props.duration_h,
            duration_m:props.duration_m,
            stops: props.stops
        };
    }

    render() {
        const { departure, arrival, img_path, duration_h, duration_m, stops } = this.state;
        return (
            <div>
                <AirlineLogo logo={img_path} />
                <RouteDiagram departure={departure} arrival={arrival}/>
                <Duration hours={duration_h} mins={duration_m}/>
                <Stops stop_status={stops} />
            </div>
        )
    }
}

export default Card;
