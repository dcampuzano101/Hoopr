
import { connect } from 'react-redux';
import BizMap from './biz_map';
import { withRouter } from 'react-router-dom';

// function moveTo(lat, lng) {
//     let latLng = new google.maps.LatLng(lat, lng); 
//     this.map.panTo(latLng); 
// }

const msp = (state, ownProps) => {
    console.log(ownProps)
    let biz = state.entities.businesses[ownProps.match.params.id];
    debugger;
    let center = {}
    let zoom = 18

    if (Object.values(state.entities.businesses)[0]) {
        if (ownProps.location.pathname === '/businesses') {
            center = {
                lat: 40.716437,
                lng: -73.956658
            }
            zoom = 12;
            
        } else {
            center = {
                lat: Object.values(state.entities.businesses)[0].latitude,
                lng: Object.values(state.entities.businesses)[0].longitude
            }
            zoom = 18;
        }
    }

    return ({
        businesses: state.entities.businesses,
        center: center,
        zoom: zoom
    })
}

// const mdp = dispatch => {
//     return({
//         moveTo: (lat, lng) => dispatch(moveTo(lat, lng))
//     });
// }

export default withRouter(connect(msp)(BizMap));