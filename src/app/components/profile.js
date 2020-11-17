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
        <section className="profile-container center-container">
            <h1 className="heading">{userData.name}{t("'s")} {t("Profile")}</h1>
            <div className="profile">
                <div className="profile__avatar">
                    <img className="profile__avatar--img" src={userData.avatar} alt="User Profile Pic"/>
                </div>
                <ul className="profile__data">
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Username")}: </span>{userData.username}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Location")}: </span>{userData.location}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Followers")}: </span>{userData.followers_count}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Following")}: </span>{userData.following_count}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Bio")}: </span>{userData.bio}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Github Profile")}: </span><a href={userData.profile_link} aria-label="Profile Link">{userData.profile_link}</a>
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Email")}: </span>{userData.email}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Blog")}: </span>{userData.blog}
                    </li>     
                </ul>
            </div>
            {/* To be Completed in RA-4 */}
        </section>
    );
}
export default Profile;
