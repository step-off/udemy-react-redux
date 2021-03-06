import axios from 'axios';

import {SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH} from './types';

export const COMMENTS_URL = 'http://jsonplaceholder.typicode.com/comments';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get(COMMENTS_URL);

    return {
        type: FETCH_COMMENT,
        payload: response
    }
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}