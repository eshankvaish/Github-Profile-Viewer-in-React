const HomeContainer = ({history, isLoggedIn}) => {
    if (isLoggedIn) {
        history.push('/profile');
    } else {
        history.push('/login');
    }
    return null;
};
export default HomeContainer;
