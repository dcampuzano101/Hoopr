
import { connect } from 'react-redux';
import BizMap from './biz_map';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    console.log(ownProps)
    let biz = state.entities.businesses[ownProps.match.params.id];
    debugger;
    let center = {}

    if (Object.values(state.entities.businesses)[0]) {
        center = {
            lat: biz.latitude,
            lng: biz.longitude
        }
    }

    return ({
        businesses: state.entities.businesses,
        center: center
    })
}

export default withRouter(connect(msp)(BizMap));