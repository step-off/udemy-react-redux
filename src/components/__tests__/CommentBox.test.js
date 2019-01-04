import React from 'react';
import {mount} from 'enzyme';

import CommentBox from '../CommentBox';

import StoreProvider from '../../helpers/StoreProvider';

describe('CommentBox', () => {
    let commentBoxWrapper;

    beforeEach(() => {
        commentBoxWrapper = mount(
            <StoreProvider>
                <CommentBox />
            </StoreProvider>      
        );
    });

    afterEach(() => {
        commentBoxWrapper.unmount();
    });

    it('should render textarea', () => {
        expect(commentBoxWrapper.find(`textarea`)).toHaveLength(1);
    });

    it('should render submit and fetch buttons', () => {
        expect(commentBoxWrapper.find(`button`)).toHaveLength(2);
    });

    describe('textarea', () => {
        const textToSet = 'test text for textarea';

        beforeEach(() => {
            commentBoxWrapper.find('textarea').simulate('change', {
                target: {
                    value: textToSet
                }
            });
            commentBoxWrapper.update();
        });


        it('should set text', () => {
            expect(commentBoxWrapper.find(`textarea`).prop('value')).toEqual(textToSet)
        });
    
        it('should clear on form submit', () => {    
            commentBoxWrapper.find('form').simulate('submit');
            commentBoxWrapper.update();

            expect(commentBoxWrapper.find(`textarea`).prop('value')).toEqual('');
        });
    });
});
