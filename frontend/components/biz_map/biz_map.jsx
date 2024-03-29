import React from 'react';
import ReactDOM from 'react-dom';

class BizMap extends React.Component {

    constructor(props) {
        super(props);
        this.addBizLocation = this.addBizLocation.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.center) {
            const map = ReactDOM.findDOMNode(this.refs.map);
            const mapOptions = {
                center: this.props.center,
                zoom: this.props.zoom,
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false,
                scaleControl: true,
                scrollwheel: false
            }
            this.map = new google.maps.Map(map, mapOptions);
        }
        Object.values(this.props.businesses).forEach( business => {
            this.addBizLocation(business)
        })
    }
    moveTo(lat, lng) {
        let latLng = new google.maps.LatLng(lat, lng); 
        this.map.panTo(latLng); 
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
            map: this.map,
            title: business.name
        });
    }

    render() {
        if (this.props.center) {
            return (
                <div id="map-google" className="map-google" ref="map"></div>
            )
        } else {
            return (null)
        }
    }
}

export default BizMap;