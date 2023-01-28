// Core
import {TypedUseSelectorHook, useSelector} from 'react-redux';
// Engine
import {RootState} from '../engine/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector