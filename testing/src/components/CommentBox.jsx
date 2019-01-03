import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends React.Component {
    state = {comment: ''};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h4>Add a comment</h4>
            <textarea name="comment" value={this.state.comment} onChange={this.handleChange} />
            <div>
                <button>
                    Submit a comment
                </button>
            </div>
        </form>
        )
    }

    handleChange = (e) => {
        this.setState({comment: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveComment(this.state.comment)

        this.setState({comment: ''})
    }
}

export default connect(null, actions)(CommentBox);