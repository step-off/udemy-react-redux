import React from 'react';
import {mount} from 'enzyme';

import CommentsList from '../CommentsList';

import StoreProvider from '../../helpers/StoreProvider';

describe('CommentsList', () => {
    let CommentsListWrapper;
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    beforeEach(() => {
        CommentsListWrapper = mount(
            <StoreProvider initialState={initialState}> 
                <CommentsList />
            </StoreProvider>
        )
    })

    it('should render one LI for per comment', () => {
        const LIElemets = CommentsListWrapper.find('li');

        expect(LIElemets.length).toEqual(initialState.comments.length);
    });

    it('should display comments text', () => {
        initialState.comments.forEach(comment => {
            expect(CommentsListWrapper.render().text()).toContain(comment);
        })
    })
})