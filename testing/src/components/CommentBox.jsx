import React from 'react';

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

        this.setState({comment: ''})
    }
}

export default CommentBox