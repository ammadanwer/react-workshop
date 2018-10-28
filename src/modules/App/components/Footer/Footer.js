import React from 'react';
import { connect } from 'react-redux'
import { updateCurrentTime } from '../../../../actions'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => {
    return {...state.timer};
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            updateCurrentTime,
        },
        dispatch
    );
};

class Footer extends React.Component {
    componentDidMount()
    {
        setInterval(this.props.updateCurrentTime, 1000);
    }
    render()
    {

        return (
            <footer className="App-footer">
                <p className="Footer-title">
                    Current Time: {this.props.time}
                </p>
                <p className="Footer-title">
                    GitHub REPO: <a href="https://github.com/InamTaj/react-workshop">InamTaj/react-workshop</a>
                </p>
            </footer>
        );
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
