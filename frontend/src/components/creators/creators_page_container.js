import { connect } from 'react-redux'; 
import CreatorsPage from './creators_page'; 

const msp = state => ({
    currentUser: state.session.user
});

export default connect( msp )(CreatorsPage); 