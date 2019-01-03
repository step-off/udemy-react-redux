import {saveComment} from "../index";
import {SAVE_COMMENT} from '../types';

describe('saveComment action creator', () => {
    it('should create action with correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('should create action with correct payload', () => {
        const action = saveComment('New comment');

        expect(action.payload).toEqual('New comment');
    });
})