import React from 'react';
import {connect} from 'react-redux';


class CommentsList extends React.Component {
    render() {
        return (
            <ul>
                <h4>Comments List</h4>
                {this.renderComments()}
            </ul>
        )
    }

    renderComments = () => {
        return this.props.comments.map((comment, index) => {
            return <li key={index}>{comment}</li>
        })
    }
};

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentsList);