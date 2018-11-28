import {connect} from 'react-redux';

import {addTodo} from '../actions';
import Button from '../components/Button';

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: () => {
            return dispatch(addTodo('My test component'));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
