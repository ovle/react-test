// @flow

import {
    loadProfile,
    loadProfileError,
    loadProfileSuccess
} from "../actions/actions";
import {fetchData} from "../../../utils/api";



export type SocialLink = {
    label: string,
    link: string
}

export type UserProfile = {
    userId: number,
    city: string,
    languages: Array<string>,
    social: Array<SocialLink>
}

export type UserProfileData = {
    isLoading: boolean,
    hasError: boolean,
    profile: UserProfile
}


export const fetchProfileData = (userId: number) => {
    return (dispatch: (any) => void) => {
        dispatch(loadProfile(true));

        return fetchData(
            "https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/" + userId,
            () => dispatch(loadProfile(false)),
            (response) => dispatch(loadProfileSuccess(response.data)),
            () => dispatch(loadProfileError(true))
        )
    };
};