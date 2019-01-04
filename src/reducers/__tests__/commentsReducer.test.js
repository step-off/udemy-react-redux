import commentsReducer from '../comments';
import {SAVE_COMMENT} from '../../actions/types';

describe('commentsReducer', () => {
    it('should handle SAVE_COMMENT action', () => {
       const payload = 'New comment';
       const action = {
           type: SAVE_COMMENT,
           payload: payload
       };
       const newState = commentsReducer(['Old Comment'], action);

       expect(newState).toEqual(['Old Comment', payload])
    });

    it('should handle action with unknown type', () => {
        const newState = commentsReducer([], {type: 'WTF'});

        expect(newState).toEqual([])
    })
})