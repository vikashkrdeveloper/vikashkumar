import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store.tsx';
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();