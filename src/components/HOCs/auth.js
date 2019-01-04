import React from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {    
    class Auth extends React.Component {
        render() {
            return <ChildComponent {...this.props}/>
        }

        componentDidMount() {
            this.checkIfUserIsLoggedIn();
        }

        componentDidUpdate() {
            this.checkIfUserIsLoggedIn();
        }

        checkIfUserIsLoggedIn() {
            if (!this.props.isLoggedIn) {
                this.redirectToStartPage()
            }
        }

        redirectToStartPage() {
            this.props.history.push('/');
        }
    }

    function mapStateToProps(state) {
        return {
            isLoggedIn: state.isLoggedIn
        }
    }

    return connect(mapStateToProps)(Auth);
}