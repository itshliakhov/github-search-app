// Core
import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
// Engine
import {githubActions} from '../engine/github/github.slice';

const actions = {
    ...githubActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}