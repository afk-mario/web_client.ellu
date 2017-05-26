import { connect } from 'react-redux';
import SubscribePage from '../components/subscribe__page.jsx';
import { apiFetchIfNeeded } from '../actions/api_actions';

const mapStateToProps = (state) => {
    const { apiCalls } = state;
    const config = apiCalls['web_client/config/1/'] || {
        isFetching: true,
        items: {},
    };


    return {
        id: 'subscribe',
        isFetching: config.isFetching,
        items: config.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    dispatch(apiFetchIfNeeded('web_client/config/1/'));
    return {};
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribePage);

export default Home;