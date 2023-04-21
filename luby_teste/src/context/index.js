import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState({});
    const [userDataView, setUserDataView] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [userFollowers, setUserFollowers] = useState([]);
    const [userFollowing, setUserFollowing] = useState([]);

        return (
        <context.Provider value={{
            userData,
            userDataView,
            userRepos,
            userFollowers,
            userFollowing,
            setUserData,
            setUserDataView,
            setUserRepos,
            setUserFollowers,
            setUserFollowing
        }}>
            {props.children}
        </context.Provider>
        );
};