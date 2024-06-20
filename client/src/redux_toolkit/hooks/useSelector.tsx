import { useSelector } from 'react-redux';
import type { RootState } from '../store.tsx';
export const useAppSelector = useSelector.withTypes<RootState>();