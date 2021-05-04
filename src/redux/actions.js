import { FILTER, RESTORE } from './types';

export const filter = (nr) => {
    return {
       type: FILTER,
       payload: nr,
    };
};

export const restore = () => {
    return {
       type: RESTORE,
    };
};