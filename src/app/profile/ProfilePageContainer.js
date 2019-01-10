// @flow

import React from "react";
import ProfilePage from "./ProfilePage";
import {fetchProfileData} from "../state/model/profile";
import connect from "react-redux/es/connect/connect";
import lifecycle from "react-pure-lifecycle";
import type {UserProfileData} from "../state/model/profile";


type Props = UserProfileData

const ProfilePageContainer = (profileData: Props) =>
    (
        <ProfilePage profileData={profileData}/>
    );

const componentDidMount = (props) => {
    props.loadData();
};

const mapStateToProps = (state) => {
    let profileData = state.profileData;
    return {isLoading: profileData.isLoading, hasError: profileData.hasError, profile: profileData.profile}
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => {
            dispatch(fetchProfileData(1));  //todo id
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(lifecycle({componentDidMount})(ProfilePageContainer));

