import { connect } from 'react-redux';
import { requestBusinesses } from '../../actions/biz_actions';
import { requestPhotos, requestPhoto } from '../../actions/photo_actions';
import BizIndexItem from './business_index_item';
import { filterByBorough } from '../../actions/search_actions'

const msp = state => {
  console.log(state);
    
  return ({
    businesses: state.entities.businesses,
    photos: state.entities.photos
  });
};


const mdp = dispatch => {

  return ({
    requestBusinesses: () => dispatch(requestBusinesses()),
    requestPhotos: () => dispatch(requestPhotos()),
    filterByBorough: borough => dispatch(filterByBorough(borough))
  });
};

export default connect(msp, mdp)(BizIndexItem);