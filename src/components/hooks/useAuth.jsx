import { useSelector } from 'react-redux';

import {
    selectEmail,
    selectIsLoggedIn,
    selectIsRefreshing,
    selectUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
    const selectIsLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const email = useSelector(selectEmail);

    return {
        isLoggedIn,
        isRefreshing,
        user,
        email,
    };
};
