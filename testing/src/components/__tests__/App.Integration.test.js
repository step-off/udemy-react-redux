import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';

import App from '../App';
import StoreProvider from '../../helpers/StoreProvider';
import {COMMENTS_URL} from '../../actions';

const RESPONSE_STUB = [
    {name: 'Comment 1'}, 
    {name: 'Comment 2'}, 
    {name: 'Comment 3'}, 
    {name: 'Comment 4'}, 
    {name: 'Comment 5'}
];


describe('App', () => {
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest(COMMENTS_URL, {
            status: 200,
            response: RESPONSE_STUB
        });
    });

    afterEach(() => {
        moxios.uninstall();
    });


    it('should display fetched comments', (done) => {
        const AppWrapper =  mount(
            <StoreProvider>
                <App />
            </StoreProvider>
        );
        
        AppWrapper.find('#fetchButton').simulate('click');

        moxios.wait(() => {
            AppWrapper.update();
        expect(AppWrapper.find('li').length).toEqual(RESPONSE_STUB.length);

        done();
        AppWrapper.unmount();
        });
    })
})