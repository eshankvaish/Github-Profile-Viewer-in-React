import { useEffect } from 'react';

const HomeContainer = ({ history, isLoggedIn }) => {
    useEffect(() => {
        if (isLoggedIn) {
            history.push('/search');
        } else {
            history.push('/login');
        }
    }, []);
    return null;
};
export default HomeContainer;
