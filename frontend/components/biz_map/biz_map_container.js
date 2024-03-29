
import { connect } from 'react-redux';
import BizMap from './biz_map';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    console.log(ownProps)
    let biz = state.entities.businesses[ownProps.match.params.id];
      
    let center = {  }
    let zoom = 18

    if (state.entities.search.businessIds.length === 1) {
        biz = state.entities.businesses[state.entities.search.businessIds[0]]
    }

    if (Object.values(state.entities.businesses)[0]) {
        if (( ownProps.location.pathname === '/businesses' ) || ( state.entities.search.businessIds.length > 1 )) {
            center = {
                lat: 40.716437,
                lng: -73.956658
            }
            zoom = 12;
            
        } else if (state.entities.search.businessIds.length === 1) {
            biz = state.entities.businesses[state.entities.search.businessIds[0]];
            center = {
                lat: biz.latitude,
                lng: biz.longitude
            }
            zoom = 18;
        } 
    }
    if (biz) {
        if (biz.id.toString() === ownProps.match.params.id) {
            center = {
                lat: biz.latitude,
                lng: biz.longitude
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

export default withRouter(connect(msp)(BizMap));