import * as AuthSession from "expo-auth-session";
import {useEffect, useState} from "react";

const useGoogleInfo = (auth, logoutMain) => {
    const [email, setEmail] = useState()
    useEffect(()=>{
        const getUserData = async () => {
            let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
                headers: { Authorization: `Bearer ${auth.accessToken}` }
            });

            userInfoResponse.json().then(data => {
                setEmail(data.email);
            });
        };

        getUserData();
    }, [auth])

    const logout = async () => {
        await AuthSession.revokeAsync({
            token: auth.accessToken
        }, {
            revocationEndpoint: "https://oauth2.googleapis.com/revoke"
        });

        await logoutMain()
    };

    return {
        email,
        logout,
    }
}

export default useGoogleInfo
