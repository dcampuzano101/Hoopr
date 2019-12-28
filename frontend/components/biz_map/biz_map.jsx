import React from 'react';
import ReactDOM from 'react-dom';

class BizMap extends React.Component {

    constructor(props) {
        super(props);
        this.addBizLocation = this.addBizLocation.bind(this);
        console.log(props);
        debugger;
    }

    componentDidMount() {
        if (this.props.center) {
            const map = ReactDOM.findDOMNode(this.refs.map);
            const mapOptions = {
                center: this.props.center,
                zoom: 18
            }
            this.map = new google.maps.Map(map, mapOptions);
        }

        

        Object.values(this.props.businesses).forEach( business => {
            this.addBizLocation(business)
        })
    }

    addBizLocation(business){
        const lat = business.latitude;
        const lng = business.longitude;

        const position = new google.maps.LatLng({
            lat,
            lng
        });

        const marker = new google.maps.Marker({
            position: position,
            map: this.map
        });

    }

    render() {
        return (
            <div id="map-google" className="map-google" ref="map"></div>
        )
    }
}

export default BizMap;