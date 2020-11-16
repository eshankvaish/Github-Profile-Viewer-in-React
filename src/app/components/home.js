import { useSelector } from 'react-redux';

const Home = (props) => {
    const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
    if (isLoggedIn) {
        props.history.push('/profile');
    } else {
        props.history.push('/login');
    }
    return null;
}
export default Home;
