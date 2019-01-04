import React from 'react';
import {shallow} from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentsList from '../CommentsList';

describe('App', () => {
    let appWrapper;

    beforeEach(() => {
        const appInstance = React.createElement(App);
        appWrapper = shallow(appInstance);
    })

    it('should render CommentBox', () => {
        expect(appWrapper.find(CommentBox)).toHaveLength(1);
    });

    it('should render CommentsList', () => {
        expect(appWrapper.find(CommentsList)).toHaveLength(1);
    });
})

