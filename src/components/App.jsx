import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import CommentBox from './CommentBox';
import CommentList from './CommentsList';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path='/post' component={CommentBox} />
                <Route path='/' exact component={CommentList} />
            </div>
        )
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/post'>Post a comment</Link>
                </li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }

    renderButton() {
        return this.props.isLoggedIn ? this.signOutButton() : this.signInButton() 
    }

    signInButton() {
        return <button>Sign In</button>
    }

    signOutButton() {
        return <button>Sign Out</button>
    }
    
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(App); 