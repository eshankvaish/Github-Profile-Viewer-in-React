import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Profile = (props) => {
    const { t } = useTranslation();
    let userData = useSelector(state => state.loginReducer);
    if (props.otherUser) {
        //To be implemented in RA-5
        userData = "Other User Data";
    }
    return (
        <section className="profile center-container">
            Welcome to your Profile
            {/* To be Completed in RA-4 */}
        </section>
    );
}
export default Profile;
