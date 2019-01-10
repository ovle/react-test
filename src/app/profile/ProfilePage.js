import React from "react";
import type {UserProfileData} from "../state/model/profile";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";


type Props =  { profileData: UserProfileData }

const ProfilePage = ({profileData}: Props) => {
    let profile = profileData.profile;
    return (
        <div>
            <div>Profile:</div>
            {
                profileData.isLoading ? <CircularProgress/> :
                    !!profile ?
                    <ul>
                        <li>City: {profile.city}</li>
                        <li>Languages: {profile.languages.reduce((accumulator, value) => accumulator + ", " + value)}</li>
                    </ul>
                    : <div>No data to display</div>
            }
        </div>
    );
};

export default ProfilePage;