import React from 'react';
import {mount} from 'enzyme';

import CommentBox from '../CommentBox';

describe('CommentBox', () => {
    let commentBoxWrapper;

    beforeEach(() => {
        const commentBoxInstance = React.createElement(CommentBox);
        commentBoxWrapper = mount(commentBoxInstance);
    });

    afterEach(() => {
        commentBoxWrapper.unmount();
    })

    it('should render textarea', () => {
        expect(commentBoxWrapper.find(`textarea`)).toHaveLength(1);
    });

    it('should render submit button', () => {
        expect(commentBoxWrapper.find(`button`)).toHaveLength(1);
    });

    it('should set text in texarea', () => {
        const textToSet = 'test text for textarea';

        commentBoxWrapper.find('textarea').simulate('change', {
            target: {
                value: textToSet
            }
        });

        commentBoxWrapper.update();

        expect(commentBoxWrapper.find(`textarea`).prop('value')).toEqual(textToSet)
    })
})

